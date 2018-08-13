import {Component} from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "../../node_modules/@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import React from "react";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class TopAppBar extends Component {
  render() {
    const { classes } = this.props;
    const { onLeftButtonTouch } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onLeftButtonTouch}>
              <MenuIcon/>
            </IconButton>
            <Typography className={classes.flex} variant="title" color="inherit">{this.props.title}</Typography>
            <Button color="secondary">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopAppBar);