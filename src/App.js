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

/*
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
    const handleDrawer = this.handleDrawerTouch.bind(this);
    return (
      <div className="App">
        <TopAppBar
          title="MyApp"
          onLeftButtonTouch={handleDrawer}
        />
        <Button variant="raised" color="primary">Hello World!</Button>
        <MenuDrawer open={this.state.drawerOpen}/>
      </div>
    );
  }
}
*/

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

export default App;
