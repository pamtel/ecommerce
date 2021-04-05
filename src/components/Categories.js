import React from 'react'
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

function Categories() {
    return (
        <div className="categories">
            <div className="d-flex active">
                <p>Electronics</p>
                <span className="ps-1"> (12)</span>
            </div>

            <div className="d-flex category">
                <p>Face masks</p>
                <span className="ps-1"> (3)</span>
            </div>

            <div className="d-flex category">
                <p>Fresh Food</p>
                <span className="ps-1"> (8)</span>
            </div>

            <div className="d-flex category">
                <p>Grocery</p>
                <span className="ps-1"> (6)</span>
            </div>

            <div className="d-flex category">
                <p>Home</p>
                <span className="ps-1"> (24)</span>
            </div>

            <div className="d-flex category">
                <p>Kids</p>
                <span className="ps-1"> (9)</span>
            </div>

            <div className="d-flex color-royal-blue category-icon">
                <p className="pe-2">View all Categories</p>
                <ChevronRightSharpIcon />
            </div>
        </div>
    )
}

export default Categories
