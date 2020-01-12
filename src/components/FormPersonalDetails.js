import React, { Component } from "react";
import { AppBar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from "@material-ui/core/button";

class FormPersonalDetails extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
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
            Enter Personal Details
          </AppBar>
          <br />
          <br />
          <TextField
            //   required
            id="outlined-required"
            label="Occupation"
            defaultValue={values.occupation}
            variant="outlined"
            onChange={handleChange("occupation")}
          />
          <br />
          <br />
          <TextField
            //   required
            id="outlined-required"
            label="City"
            defaultValue={values.city}
            variant="outlined"
            onChange={handleChange("city")}
          />
          <br />
          <br />
          <TextField
            //   required
            id="outlined-required"
            label="Bio"
            defaultValue={values.bio}
            variant="outlined"
            onChange={handleChange("bio")}
          />
          <br />
          <br />
          <Button variant="contained" color="secondary" onClick={this.back}>
            Back
          </Button>
          &emsp;
          <Button variant="contained" color="primary" onClick={this.continue}>
            Continue
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
