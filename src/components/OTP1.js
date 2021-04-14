import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';


function OTP1() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div>
            <Button variant="contained" className="ms-4  px-4 py-2 bg-sandybrown color-royal-blue" onClick={handleClickOpen}>
                Login
            </Button>

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="d-flex justify-content-between mb-0">
              <DialogTitle id="alert-dialog-title">
                <h5>Verify your number</h5> 
              </DialogTitle>
              <Button onClick={handleClose}>
                <CloseIcon/>
              </Button>
            </div>
            <hr className="mt-0"/>
            <DialogContent className="verify-content">
              <DialogContentText id="alert-dialog-description">
                  <sup className="mx-5 mb-2 color-darkslategray fontWeight">Please enter verification code sent via SMS to +256 76 633 4574</sup><br/>
                  <div className="d-flex mx-5">
                  <input type="text" placeholder="0"/>
                  <input type="text" placeholder="0"/>
                  <input type="text" placeholder="0"/>
                  <input type="text" placeholder="0"/>
                  </div>
              </DialogContentText>

              </DialogContent>
            <DialogActions>
            </DialogActions>
          </Dialog>
        </div>
    )
}

export default OTP1
