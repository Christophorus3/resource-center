import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";

//import { createMuiTheme } from '@material-ui/core/styles';
import MyTheme from './MyTheme';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {drawerOpen: false};
  }

  handleDrawerTouch() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={MyTheme}>
        <div className="App">
          <AppBar title="TestApp">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerTouch.bind(this)}>
                <MenuIcon/>
              </IconButton>
              <Typography variant="title" color="inherit">Title Of App</Typography>
            </Toolbar>
          </AppBar>
          <Button variant="raised" color="primary">Hello World!</Button>
          <Drawer
            open={this.state.drawerOpen}
            onClose={this.handleDrawerTouch.bind(this)}
          >
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
