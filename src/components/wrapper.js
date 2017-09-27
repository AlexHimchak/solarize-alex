import React, { Component } from "react";
import UserView from "./Views/UserView";
// import AdminView from "./Views/AdminView";
// import Landing from "./Views/Landing";
// import userAPI from "../utils/user-api";
// import leadAPI from "../utils/lead-api";


class wrapper extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      // Change to Landing one finished
      return <UserView/>;
    } else if (this.state.currentPage === "user") {
      return <UserView/>;
    } else if (this.state.currentPage === "admin") {
      return <UserView/>;
    } 
  };
}

export default wrapper;
