import React, { Component } from "react";
import { connect } from "react-redux";
import TableEmployees from "../components/TableEmployees";
import * as actions from "../actions/EmployeeAction";

export class HomePageContainer extends Component {
    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <div>
                <TableEmployees {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployees: () => {
            dispatch(actions.getEmployees());
        },
        createEmployees: (data) => {
            dispatch(actions.createEmployee(data));
        },
        editEmployees: (data, id) => {
            dispatch(actions.editEmployee(data, id));
        },
        deleteEmployees: (id) => {
            dispatch(actions.deleteEmployee(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
