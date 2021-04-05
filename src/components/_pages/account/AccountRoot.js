import React from 'react'
import Button from '@material-ui/core/Button';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import order1 from '../../../assests/img/order1.png'
import order2 from '../../../assests/img/order2.png'
import HeaderLayout from '../../_layout/HeaderLayout';

function AccountRoot() {
    return (
        <HeaderLayout>
          <div className="container d-flex justify-content-between align-items-center mb-2">
            <div>
                <p className="fontWeight">+91-8080021387</p>
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

          <div className="container border my-4 py-4 pt-0 pb-0">
              <div className="row">
                <div className="col-md-3 border py-4">
                    <div className="d-flex">
                        <SpeakerNotesOutlinedIcon />
                        <p>My order</p>
                    </div>                   
                    <div className="d-flex">
                        <AddLocationOutlinedIcon />
                        <p>My addresses</p>
                    </div>
                </div>

                <div className="col-md-9 border py-4 ps-5">
                    <div className="d-flex justify-content-between">
                        <p>Showing all orders</p>
                        <Button 
                        variant="outlined" 
                        size="medium" 
                        startIcon={<AddLocationOutlinedIcon />}
                        className="border-darkgray color-darkslategray fontWeight" >
                         Filters
                      </Button>
                    </div>

                    <div className="row gap-4 mt-4 ms-2">
                        <div className="col-md-5 border p-3">
                            <div className="d-flex ">
                                <img src={order1} alt="orders"/>
                                <p>Target</p>
                            </div>
                        </div>
                        <div className="col-md-5 border p-3">
                            <div className="d-flex ">
                                <img src={order2} alt="orders"/>
                                <p>Abhi's Juke Store</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          </HeaderLayout>
    )
}

export default AccountRoot
