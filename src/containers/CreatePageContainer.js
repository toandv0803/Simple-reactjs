import React, { Component } from "react";
import { connect } from "react-redux";
import FormCreate from "../components/FormCreate";
import * as actions from "../actions/EmployeeAction";

export class CreatePageContainer extends Component {
    render() {
        return (
            <div>
                <FormCreate {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        createEmployee: (data) => {
            dispatch(actions.createEmployee(data));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePageContainer);
