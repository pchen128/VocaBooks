import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupUser } from '../store/actions/authAction'
import logo from '../logo.svg';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button,
} from 'reactstrap';

export class Signup extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    }
    handleChange = ({ target }) => {
        this.setState({ [target.id]: target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signupUser(this.state);
    };
    render() {
        return (
            <Container className="text-center">

                <Form onSubmit={this.handleSubmit}>
                    <Col>
                        <img className="rounded" alt="100x100" src={logo} />
                        <h2>Create account</h2>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
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
                        <Button block onSubmit={this.handleSubmit}>Create account</Button>
                    </Col>
                    <Col>
                        Already have an account?&nbsp;
                    <Link to="/">Sign in</Link>
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
const mapDispatchToProps = dispatch => ({
    signupUser: user => dispatch(signupUser(user))
})
export default connect(null, mapDispatchToProps)(Signup);
