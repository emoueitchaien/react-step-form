import React, { Component } from "react";
import { AppBar, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
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
            Enter User Details
          </AppBar>
          <br />
          <br />
          <TextField
            //   required
            id="outlined-required"
            label="First Name"
            defaultValue={values.firstName}
            variant="outlined"
            onChange={handleChange("firstName")}
          />
          <br />
          <br />
          <TextField
            //   required
            id="outlined-required"
            label="Last Name"
            defaultValue={values.lastName}
            variant="outlined"
            onChange={handleChange("lastName")}
          />
          <br />
          <br />
          <TextField
            //   required
            id="outlined-required"
            label="Email"
            defaultValue={values.email}
            variant="outlined"
            onChange={handleChange("email")}
          />
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={this.continue}>
            Continue
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
