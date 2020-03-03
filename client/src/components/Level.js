import React, { Component } from "react";
import { connect } from "react-redux";
import logo from '../logo.svg';
import { logoutUser } from '../store/actions/authAction'
import {
    Container, Col, Form,
    FormGroup, Input,
    Button,
} from 'reactstrap';

class Level extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { isLoggingOut, logoutError } = this.props;

        return (
            <Container className="text-center">

                <Form onSubmit={this.handleLogout}>
                    <Col>
                        <img className="rounded" alt="100x100" src={logo} />
                        <h2>Hi</h2>
                    </Col>
                    <Col>
                        <Button block onSubmit={this.handleLogout}>Log out</Button>
                    </Col>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    logoutError: state.auth.logoutError,
})
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Level);