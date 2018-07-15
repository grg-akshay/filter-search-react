import React, { Component } from 'react';
import './App.css';
import Search from './Input/Search';


function handleFetchErrors(resp) {
  if (!resp.ok) {
    console.log(resp.statusText)
    throw Error(resp.statusText);
  }
  return resp;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {list: [] };    
    this.changeList= this.changeList.bind(this);
  }


  changeList(val){
    this.setState({list: val});
  }

componentDidMount(){
  var that= this;
  const url= "https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json";
  fetch(url)
    .then(handleFetchErrors)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (respJson) {
      let val=respJson.Reggae;
       that.setState({list: val});
       //console.log(that.state);
    })

}

  render() {
    let list =this.state.list;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search filter in React js</h1>
        </header>
        <br/>
        
        <Search list={this.state.list} changeList={this.changeList} />
        <ul>
        {list.map(function(curr, index, arr){
          return <li key={index} >{curr}</li> 
        })} 
        </ul>

      </div>
    );
  }
}

export default App;
