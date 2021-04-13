import React from 'react'
import smiley from '../../../assests/img/smiley2.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MobileFooter from '../../MobileFooter';
import HeaderLayout from '../../_layout/HeaderLayout';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function AngrySmiley() {
    return (
        <div>
            <HeaderLayout>
                <hr/>
            <div className="text-center py-5">
            <img src={smiley} alt="smiley" className="py-4"/>
            <div className="bag-content fontWeight">
                <p className="heading color-darkslategray">It's empty here</p>
                <p className="text color-darkgray">Start shopping to add items to your bag</p>
            </div>
        </div>
        <div className="d-flex justify-content-center pb-5">
            <Link to = "/" className="text-decoration-none">
            <Button
                    variant="contained"
                    className="chat-button text-white bg-sandybrown">
                    Back to homepage
                </Button>
            </Link>
                
            </div>
            </HeaderLayout>
            <MobileFooter />
        </div>
    )
}

export default AngrySmiley
