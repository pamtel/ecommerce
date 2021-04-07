import React from 'react'
import Button from '@material-ui/core/Button';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import HeaderLayout from '../../_layout/HeaderLayout';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

function AccountAddress() {
    return (
        <HeaderLayout>
          <div className="container d-flex justify-content-between align-items-center mb-2">
            <div>
                <p className="fontWeight color-darkslategray phoneNunber">+91-8080021387</p>
            </div>

            <Button 
              variant="outlined" 
              size="medium" 
              className="border-darkgray color-darkslategray fontWeight" 
               >
                  Log Out
            </Button>
          </div>
          <hr/>

          <div className="container border round my-4 py-4 pt-0 pb-0 account-root">
              <div className="row fontWeight ">
                <div className="col-md-3 border py-4 details">
              
                    <div className="d-flex ps-3 color-darkgray">
                        <SpeakerNotesOutlinedIcon />
                        <p className="ps-2"><Link to="/account" className="item-data color-darkgray">My order</Link> </p>
                    </div>                   
                    <div className="d-flex ps-3 color-royal-blue">
                        <AddLocationOutlinedIcon />
                        <p className="ps-2">My addresses</p>
                    </div>
                   
                </div>

                <div className="col-md-9 border py-4 all-orders">
                    <div className="row gap-4 mt-3 grid-container">
                        <div className="col-md-4 border p-3">
                            <div>
                                <p>Shery Karan</p>
                                <p>Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda</p>
                                <p>+256 76 633 4574</p>
                                <div className="d-flex ">
                                    <p className="pe-5">Edit</p>
                                    <p className="">Delete</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 border p-3">
                            <div className="d-flex justify-content-center">
                                <AddIcon />
                                <p>Add New Address</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          </HeaderLayout>
    )
}

export default AccountAddress
