// App.js

import React, { Component } from 'react';
import Hoc from './HOC';
import StockList from './StockList';
class App extends Component {
  
  render() {
    return (
      <div>
        Higher-Order Component Tutorial
        <StockList></StockList>
      </div>
    )
  }
}
App = Hoc(App);
export default App;