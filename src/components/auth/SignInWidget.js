import React, { Component } from "react";
import ReactDOM from "react-dom";
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import Navbar from "../Navbar.js";

class SignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      // logo: 'logo.png',
      // make a simple and place in the public
      baseUrl: this.props.baseUrl,
      authParams: {
        pkce: true
      }
    });
    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div>{/* <Navbar /> */}</div>;
  }
}

export default SignInWidget;
