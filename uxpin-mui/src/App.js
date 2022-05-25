import React from "react";
import Home from "./Home";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Radio from "./Radio";
import { Route, Switch } from "react-router-dom";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact from="/button" render={props => <Button {...props} />} />
        <Route exact path="/checkbox" render={props => <Checkbox {...props} />} />
        <Route exact path="/radio" render={props => <Radio {...props} />} />
      </Switch>
    </div>
  );
}