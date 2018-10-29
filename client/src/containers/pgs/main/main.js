import * as React from "react";
import { Layout } from "../../../containers";
import { API } from "../../../utils";

import './style.css';

class Main extends React.Component {
    state = {
        all: '',
        loading: false
    }
    componentWillMount() {
      API.getAll()      
      // console.log(res.data)
        // .then(res => this.setState({ all: res.data }))
        .then(res => console.log(res.data ))

        // .then(() => this.setState({ loading: false }))
        // .catch(err => { throw err });
    }

  render() {
    // const postItems = this.props.posts.map(post => (
    //   <div key = {post.id}>
    //     <h3>{post.title}</h3>
    //     <p>{post.body}</p>
    //   </div>
    // ))
    return (
      <Layout>

       <div>hello</div>
       <div>{this.state.all}</div>
      </Layout>
    );
  }
}


export default Main;