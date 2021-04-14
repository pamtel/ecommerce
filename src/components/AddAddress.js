import React, { useState }  from 'react'
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

function AddAddress() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <>
        <div className="d-flex justify-content-center add-address" onClick={handleClickOpen}>
            <AddIcon  className="me-2"/>
            <p>Add New Address</p>
        </div>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="d-flex justify-content-between mb-0">
              <DialogTitle id="alert-dialog-title">
                <h5>{"Edit Address"}</h5> 
              </DialogTitle>
              <Button onClick={handleClose}>
                <CloseIcon/>
              </Button>
            </div>
            <hr className="mt-0"/>
            <DialogContent className="dialog-content">
              <DialogContentText id="alert-dialog-description">
                  <sup>Name</sup><br/>
                  <input type="text" placeholder="e.g John Doe"/>
              </DialogContentText>

              <DialogContentText id="alert-dialog-description">
                  <sup>Mobile Number</sup><br/>
                  <input type="text" placeholder="+256   Enter mobile number"/>
              </DialogContentText>

              <DialogContentText id="alert-dialog-description">
                  <sup>City</sup><br/>
                  <input type="text" placeholder="e.g Kampala"/>
              </DialogContentText>

              <DialogContentText id="alert-dialog-description">
                  <sup>Address</sup><br/>
                  <textarea type="text" placeholder="e.g Kalema Apartments, Plot 00 Johnson Rd, Room 24B"/>
              </DialogContentText>
              </DialogContent>
            <DialogActions>
              
            <Button variant="contained">Add Address</Button>
            </DialogActions>
          </Dialog>
          </>
    )
}

export default AddAddress
