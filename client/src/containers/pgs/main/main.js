import * as React from "react";
import { Layout } from "../../../containers";
import { API } from "../../../utils";

import './style.css';

class Main extends React.Component {
    state = {
               all: [{
                 id: '',
                crossed: '',
                action: ''
              }],
        loading: false
    }
    componentWillMount() {
      API.getAll()      
      // console.log(res.data)
        .then(res => this.setState({ all: res.data.obj }))
        .then(res => console.log(this.state.all ))
        // .then(res => console.log(this.state.all))


        // .then(() => this.setState({ loading: false }))
        .catch(err => { throw err });
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
       <div>{myTable}</div>
       {/* <div>{this.state.all.obj}</div> */}
      </Layout>
    );
  }
}


export default Main;