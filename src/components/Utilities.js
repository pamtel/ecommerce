import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import LoginIcon from '@material-ui/icons/AccountCircle'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'; 
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import StepForm from "./components/StepForm";
import Link from "@material-ui/core/Link";


function Utilities() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Button endIcon={<LoginIcon />} color="primary" variant="contained">
        Login
    </Button>

    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <hr/>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <StepForm />
        </Paper>
        <Divider style={{ marginTop: 100 }} />
        <Typography
          component="p"
          align="center"
          style={{ margin: "10px 0", fontSize: ".75rem" }}
        >
          Fork on{" "}
          <Link
            component="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/awran5/react-material-ui-step-form"
            title="Github Rebo"
          >
            Github
          </Link>
        </Typography>
      </main>
      <hr/>

    </div>
  );
}

export default Utilities
