import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { loginUser } from '../store/actions/authAction'
import {
    Container, Col, Form,
    FormGroup, Input,
    Button,
} from 'reactstrap';

export class Login extends Component {
    state = { email: "", password: "" };
    handleChange = ({ target }) => {
        this.setState({ [target.id]: target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginUser(this.state);
    };
    render() {
        const { loginError, isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/" />;
        } else {
            return (
                <Container className="text-center">

                    <Form onSubmit={this.handleSubmit}>
                        <Col>
                            <img className="rounded" alt="100x100" src={logo} />
                            <h2>Login</h2>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            {loginError && (
                                <p>
                                    Incorrect email or password.
                                </p>
                            )}
                            <Button block onSubmit={this.handleSubmit}>Sign In</Button>
                        </Col>
                        <Col>
                            Don't have an account?&nbsp;
                        <Link to="/signup">Create account</Link>
                        </Col>
                        <Col className="text-center">
                            Sign in as a&nbsp;
                        <Link to="/">guest</Link>
                        </Col>
                    </Form>
                </Container>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    };
}
const mapDispatchToProps = dispatch => ({
    loginUser: user => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
