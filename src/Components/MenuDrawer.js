import {Component} from "react";
import List from "@material-ui/core/List";
import {mailFolderListItems, otherMailFolderListItems} from "./tileData";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import React from "react";
import {withStyles} from "@material-ui/core/styles";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class MenuDrawer extends Component {
  state = {
    top: false,
    bottom: false,
    left: this.props.open,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider/>
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>{mailFolderListItems}</List>
        <Divider/>
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )

  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuDrawer);