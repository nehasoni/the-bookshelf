import React, { Component } from 'react';

class SearchBox extends React.Component {

  handleEnterKeyPress = (e) => {
    if(e.key == 'Enter'){
      this.sendQuery()
    }
  }

  sendQuery(){
    alert("Fetching books...")
  }

  render() {
    return (
      <div>
        <input type="text" onKeyPress={ this.handleEnterKeyPress.bind(this) } />
        <button type="submit" onClick={ this.sendQuery.bind(this) } >Search</button>
      </div>
    )
  }
}

export default SearchBox;
