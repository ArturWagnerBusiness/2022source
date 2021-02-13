import React from 'react';


export default class App extends React.Component{
  box(){
    return (
      <div>
        <h1>e</h1>
        <p>World text</p>
      </div>
    )
  }
  render(){
    return(
      <div className="App">
        {this.box()}
      </div>
    )
  }
}