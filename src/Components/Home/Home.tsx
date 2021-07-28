import React from "react";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import pic from "../../cover.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img src={pic} alt="" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1>To Do List</h1>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText>
                <h3>Loosing track of what works should be done?</h3>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText>
                <h3>Keep track of all of your work</h3>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText>
                <h3>Organize all your work with To-do list</h3>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText>
                <h3>Make your day more easy.</h3>
              </ListItemText>
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="secondary"
            style={{
              padding: "1.5vw",
              marginTop: "2%",
              borderRadius: "1vw",
              fontSize: "1.5vw",
            }}
          >
            <Link className="textDesign" to="/toDo">
              Start Now
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
