import React, { Component } from 'react';

  class Search extends Component {
      constructor(props) {
          super(props);
          this.state = {value: '' };
          this.handleChange=this.handleChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
      }

      handleChange(evt){
          console.log('change');
        //console.log(this.props.list);
          var list = this.props.list;
          console.log('backspace: '+evt.target.value)
          var searchStr = evt.target.value.toLowerCase();
         if (searchStr.length > 0) {
          list = list.filter(function (letter) {
            return letter.toLowerCase().match(searchStr);
          });
          console.log('keycode :'+ evt.target.keyCode);
          console.log("hit "+list.length );
          this.props.changeList(list);
        }
      }

      handleSubmit(evt){
          evt.preventDefault();
          console.log('submit');
      }

      render() { 
          return ( 
              <div>
                  <form onSubmit={this.handleSubmit} >
                    <input type="text" name="lala" onChange={this.handleChange} / >
                    <button type="submit" >Search</button>
                  </form>                    
              </div>
           )
      }
  }
   
  export default Search;