import * as React from "react";
import { Layout } from "../../../containers";
import { API } from "../../../utils";

import './style.css';

let all, history, mine;
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this)
    this.historyHandler = this.historyHandler.bind(this)
    this.state = {
      action: [],
               all: [{
                 id: '',
                crossed: '',
                action: ''
              }],
              history: [{
                id: '',
               crossed: '',
               action: ''
             }],
        loading: false
    }
    this.componentWillMount = () => {
        this.getDBstuff()
        this.getHistory()
    }
    this.componentDidMount = () => {
      this.setState({ loading: false })
    }
  }

  getHistory = () => {
    API.getHistory()
    .then(res => this.setState({ history: res.data.obj }))
    .then(() => console.log(this.state.history ))
    .catch(err => { throw err });
  }

  getDBstuff = () => {
    API.getAll()
    .then(res => this.setState({ all: res.data.obj }))
    .then(() => console.log(this.state.all ))
    .catch(err => { throw err });
  }
  
    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    dataHandler = () => {
      const data = {
        action: this.state.action,
      }
      this.submitHandler(data)
    }

   submitHandler = (arg) => {     
      API.createNewListItem(arg)
      this.resetInputFields()
    }

    resetInputFields = () => {
      const mainInput = document.getElementById('input_add-new-todo');
      mainInput.value = ''
      this.resetSt()
    }

    resetSt = () => {
      this.setState({
        action: []
      })
      this.getDBstuff();
    }

    findById = (arg, arg2) => {
      let returnVal;
      arg.forEach(elem => {
        if(elem.id === arg2) {
          returnVal = elem;
        } 
      });
      return returnVal;
    }
  
    checkboxChangeHandler = (e) => {
      
      all = this.state.all;
      history = this.state.history;
      let found = (
        this.findById(all, parseInt(e.target.id)) === undefined ?
        this.findById(history, parseInt(e.target.id)) : 
        this.findById(all, parseInt(e.target.id))
      )
      // let found2 = this.findById(history, parseInt(e.target.id))
      mine = found;
      mine.crossed = !found.crossed;
      all.forEach(elem => {
        if(elem.id === found.id) {
          elem = found;
        }
      });
      this.setState({ all: all })    
      const data = {
        crossed: mine.crossed
      }
      API.updateOne(data, e.target.id)
    }

    historyHandler = () => {
      let data;
      // let arr =[];
      this.state.all.forEach(elem => {
        data = { action: elem.action, id: elem.id }
        if(elem.crossed) {
          API.addSelectedToHistory(data)
          this.deleteListItem(data, true)
        } 
      });
    }

    eraseHistoryHandler = () => {
      let data;
      this.state.history.forEach(elem => {
        data = { action: elem.action, id: elem.id }
        if(elem.crossed) {
          this.deleteListItem(data, false)
        }
      })
    }

  deleteListItem = (data, bool) => {
    if(bool) {
      API.deleteLI(data)
      .then(() => this.getDBstuff())
      .then(() => this.getHistory())
      .catch(err => { throw err });
    } else {
      console.log('NOPEEEE')
      API.deletItemFromHistory(data)
        .then(() => this.getDBstuff())
        .then(() => this.getHistory())
        .catch(err => { throw err });
    }
    
  }

  render() {
    let myTable = 
    (arg) => { 
      return ( 
    <div>
    {
      arg.map(each => (
        <div key={each.id} className={each.crossed ? 'completed' : ''}>        
          <p><input type='checkbox' id={each.id}
          checked={each.crossed ? 'crossed': ''}
          onChange={this.checkboxChangeHandler}
          />{each.action}</p>
        </div>
      ))
    }
    </div>
    )
  }
    
    return (
      <Layout>
        <div className='container main-pg margin-top'>
          <input id='input_add-new-todo' onChange={this.changeHandler} type='text' name='action' />          
          <button onClick={this.dataHandler}>SEND DATA</button>
          <div className='flex margin-top'>

            <div className='left-col'>
              <div>{myTable(this.state.all)}</div>
            </div>
          
            <div className='right-col'>
              <div>{myTable(this.state.history)}</div>
            </div>
          </div>
          <div className='btn-group flex'>
            <div className='half-width'><button onClick={this.historyHandler}>DONE</button></div>
            <div className='half-width'><button onClick={this.eraseHistoryHandler}>GET IT OUTTA HERE</button></div>
          </div>

      </div>
    </Layout>
    );
  }
}


export default Main;