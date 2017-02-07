import React from 'react';
import ReactDOM from 'react-dom';

class todoDetailView extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
          <h1>{this.props.body}</h1>
    );
  }
}


export default todoDetailView;
