import React, { Component } from "react";
import { connect } from "react-redux";
import logo from '../logo.svg';
import { logoutUser } from '../store/actions/authAction'
import {
    Container, Col, Form,
    FormGroup, Input,
    Button, Card, CardTitle, CardText
} from 'reactstrap';

class BookSummary extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { isLoggingOut, logoutError } = this.props;

        return (
            <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>Book Name</CardTitle>
                    <CardText>Description</CardText>
                    <Button>Button</Button>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    logoutError: state.auth.logoutError,
})
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(BookSummary);