import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from "./Components/MenuDrawer";
import TopAppBar from "./Components/TopAppBar";
import Child from "./Components/ParentChild/Child";
import Parent from "./Components/ParentChild/Parent";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";


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
      <div className="App">
        <AppBar title="MyApp">
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
    );
  }
}


/*
class App extends Component {
  state = {
    title: "Placeholder Title",
  };

  changeTheWorld = (newTitle) => {
    this.setState({title: newTitle})
  };

  render() {
    const result =
      <div className="App">
        <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, "new world")}
                keepTheWorldSameEvent={this.changeTheWorld.bind(this, "kept world")}
                title={this.state.title}
        />
      </div>;

    return result;
  }
}
*/

export default App;
