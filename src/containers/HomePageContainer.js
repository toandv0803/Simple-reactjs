import React, { useEffect } from "react";
import { connect } from "react-redux";
import TableEmployees from "../components/TableEmployees";
import * as actions from "../actions/EmployeeAction";

export function HomePageContainer(props) {
    useEffect(() => {
        props.getEmployees();
    }, []);

    return (
        <div>
            <TableEmployees {...props} />
        </div>
    );
}

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

export default connect(null, mapDispatchToProps)(HomePageContainer);
