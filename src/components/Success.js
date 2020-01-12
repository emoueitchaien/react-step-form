import React, { Component } from "react";
import { AppBar } from "@material-ui/core";
import Button from "@material-ui/core/button";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class Success extends Component {
  home = () => {
    
    this.props.homeStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            style={{
              position: "relative",
              height: 50,
              padding: 10,
              fontSize: 20
            }}
          >
            Success
          </AppBar>
          <h1>Thank you for registering!</h1>
          <p>We will send you a confirmation mail soon!</p>
          <br />
          <Button variant="contained" color="secondary" onClick={this.home}>
            Submit Another Form
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
