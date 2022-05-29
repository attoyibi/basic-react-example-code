// App.js

import React, { Component } from 'react';
import Hoc from './HOC';
import StockList from './StockList';
import UserList from './UserList';


const Stocks = Hoc(
  StockList,
);

const Users = Hoc(
  UserList,
);

class App extends Component {
  
  render() {
    return (
      <div>
        Higher-Order Component Tutorial
        {/* <StockList></StockList> */}
        <Users></Users>
        <Stocks></Stocks>
      </div>
    )
  }
}
// App = Hoc(App);
export default App;