import React, { Component } from "react";
import { connect } from "react-redux";
import logo from '../logo.svg';
import { logoutUser } from '../store/actions/authAction';
import BookSummary from './BookSummary';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button, Jumbotron
} from 'reactstrap';
import Row from "reactstrap/lib/Row";

class Home extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { isLoggingOut, logoutError } = this.props;

        return (
            <div>
                <Jumbotron className="h-25">
                    <Form onSubmit={this.handleLogout}>
                        <Col>
                            {/* <img className="rounded" alt="100x100" src={logo} /> */}
                            <h2>Hi</h2>
                        </Col>
                        <Col>
                            <Button block onSubmit={this.handleLogout}>Log out</Button>
                        </Col>
                    </Form>
                </Jumbotron>
                <Row xs="3">
                    <BookSummary/>
                    <BookSummary/>
                    <BookSummary/>
                    <BookSummary/>
                </Row>
                
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);