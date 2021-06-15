import React, { Component, createContext } from "react";
import { getEmployees } from "../service/EmployeesService";

export const myContext = createContext();

class MyContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listEmployees: [],
    };
  }

  componentDidMount() {
    this.getListEmployees();
  }

  getListEmployees = () => {
    getEmployees()
      .then((res) => {
        console.log("rrress", res);
        this.setState({
          listEmployees: res,
        });
      })
      .catch((err) => {
        console.log("CONTEXT EMPLOYEES Errr", err);
      });
  };

  // createEmployees = () => {
  //   createEmployees()
  //     .then((res) => {
  //       console.log("thêm mới thành viên", res);
  //     })
  //     .catch((err) => {
  //       console.log("CONTEXT EMPLOYEES Errr", err);
  //     });
  // };

  getListEmployees = () => {
    getEmployees()
      .then((res) => {
        this.setState({
          listEmployees: res,
        });
      })
      .catch((err) => {
        console.log("CONTEXT EMPLOYEES Errr", err);
      });
  };

  render() {
    const { listEmployees } = this.state;
    const value = {
      listEmployees,
      getListEmployees: this.getListEmployees,
    };
    return (
      <myContext.Provider value={value}>
        {this.props.children}
      </myContext.Provider>
    );
  }
}

export default MyContext;
