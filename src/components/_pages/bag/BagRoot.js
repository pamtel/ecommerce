import React from 'react'
import HeaderLayout from '../../_layout/HeaderLayout';
import CheckOut from './CheckOut';
import AngrySmiley from './AngrySmiley';


function BagRoot() {
    // const classes = useStyles();
    return (
        <>
        <HeaderLayout>
        <hr/>
            {/* <div>
                <AngrySmiley />
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-md-9 border-2">
                        <CheckOut />
                    </div>
                    <div className="col-md-3 border-2">

                    </div>
                </div>
            </div>
            </HeaderLayout>
        </>
    )
}

export default BagRoot
