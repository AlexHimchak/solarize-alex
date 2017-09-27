// import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserView from "./components/Views/UserView";
// import AdminView from "./components/Views/AdminView";
import Landing from "./components/Views/Landing";



// class App extends Component {
//   state = {
//     currentPage: "Home"
//   };

//   handlePageChange = page => {
//     this.setState({ currentPage: page });
//   };

//   render = () => {
//     if (this.state.currentPage === "Home") {
//       // Change to Landing one finished
//       return <UserView/>;
//     } else if (this.state.currentPage === "user") {
//       return <UserView/>;
//     } else if (this.state.currentPage === "admin") {
//       return <UserView/>;
//     } 
//   };
// }


// export default App;

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/user" component={UserView} />
      <Route exact path="/admin" component={UserView} />
    </div>
  </Router>;

export default App;

