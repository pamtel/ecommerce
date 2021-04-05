import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import footer1 from '../assests/img/footer1.png';
import footer2 from '../assests/img/footer2.png';
import footer3 from '../assests/img/footer3.png';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function GlobalFooter() {
    const classes = useStyles();
    return (
        <div className="footer">
            <div className="footer-section text-white">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <div className="pb-2 d-flex justify-content-center">
                            <img src={footer1} alt="footer"/>
                        </div>
                        <p>Fast Delivery</p>
                    </div>
                    <div>
                        <div className="pb-2 d-flex justify-content-center">
                            <img src={footer2} alt="footer"/>
                        </div>
                        <p>Buyer Protection</p>
                    </div>
                    <div>
                        <div className="pb-2 d-flex justify-content-center">
                            <img src={footer3} alt="footer"/>
                        </div>
                        <p>Customer Support</p>
                    </div>
                </div>
            </div>

            <footer className="main-footer d-flex justify-content-center">
                <div className="">
                    <p>STORE DETAILS</p>
                    <p className="target">Target</p>
                    <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, ug</p>
                </div>
            </footer>

            <div className="d-flex justify-content-center pb-3">
                <Button
                    variant="contained"
                    className="chat-button text-white"
                    startIcon={<DeleteIcon />}
                >
                    Chat with us
                </Button>
            </div>
        </div>
    )
}

export default GlobalFooter
