import React, { Component } from "react";
import ReactDOM from "react-dom";
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

class SignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      // logo: 'logo.png',
      // make a simple and place in the public
      baseUrl: this.props.baseUrl,
      // features is the addition that allows the registration link and signup tabs to be added once it has /// been enabled in the admin
      features: { registration: true },
      authParams: {
        pkce: true
      },
      idps: [{ type: "GOOGLE", id: "0oa2kk6dn5jP7Eve04x6" }]
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
