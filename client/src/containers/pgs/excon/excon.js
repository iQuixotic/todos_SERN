import * as React from "react";
import { DropDown, Panel } from "../../../components";
import { Layout } from "../../../containers";
import * as actionTypes from "../../../store/actions";


import './style.css';

class ExCon extends React.Component {
    state = {
        headLine: 'Excon Page'
    }

  render() {
    return (
      <Layout>
        <Panel>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        </Panel>
        {/* <Toolbar></Toolbar> */}
       
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.props.pos}</h1>



        <DropDown>
          <option>here</option>
          <option>there</option>
          <option>where</option>
        </DropDown>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostAdded: (arg) => dispatch ({type: actionTypes.ADD_POST, postName: arg}),
    onPostRemoved: (arg) => dispatch ({type: actionTypes.REMOVE_POST, postName: arg})
  };
}

const mapStateToProps = state => {
  return {
    pos: state.posts
  };
}

export default ExCon;