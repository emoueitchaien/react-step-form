import React, { Component } from "react";
import { AppBar, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class Confirm extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = e => {
    // e.preventDefault();
    //PROCESS FORM EXPRESS
    this.props.nextStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
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
            Confirm User Data
          </AppBar>
          <br />
          <br />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>

            <ListItem secondaryText={email}>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>

            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <Button variant="contained" color="secondary" onClick={this.back}>
            Back
          </Button>
          &emsp;
          <Button variant="contained" color="primary" onClick={this.continue}>
            Confirm
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
