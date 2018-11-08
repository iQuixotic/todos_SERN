import * as React from "react";
import { Layout } from "../../../containers";
import { API } from "../../../utils";

import './style.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
    this.state = {
      action: [],
               all: [{
                 id: '',
                crossed: '',
                action: ''
              }],
        loading: false
    }
    this.componentWillMount = () => {
      // this.setState({ loading: true })
        // .then(() => API.getAll())
        this.getDBstuff()
    }
    this.componentDidMount = () => {
      this.setState({ loading: false })
    }
  }

  getDBstuff = () => {
    API.getAll()
    .then(res => this.setState({ all: res.data.obj }))
    .then(() => console.log(this.state.all ))
    .catch(err => { throw err });
  }
  
    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value })
      console.log(this.state.action, 'this action is')
    }

    dataHandler = () => {
      const data = {
        action: this.state.action,
      }
      this.submitHandler(data)
    }

   submitHandler = (arg) => {     
      console.log(arg)
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
  
  

  render() {
    const myTable = 
    ( 
      // this.state.all[0].action
    <div>
    {
      this.state.all.map(each => (
        <div key={each.id}>
          <h3>{each.crossed}</h3>
          <p>{each.action}</p>
        </div>
      ))
    }
    </div>
    )
    
    return (
      <Layout>
        <div className='container'>
        <input id='input_add-new-todo' onChange={this.changeHandler} type='text' name='action' />
        <button onClick={this.dataHandler}>SEND DATA</button>
       <div>{myTable}</div>
       {/* <div>{this.state.all.obj}</div> */}
       </div>
      </Layout>
    );
  }
}


export default Main;