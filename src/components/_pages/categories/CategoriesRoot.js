import React from 'react'
import AllCategories from './AllCategories'
import EmptyStore from './EmptyStore'
import SingleCategory from './SingleCategory'



function CategoriesRoot() {
    return (
        <div>
            {/* <EmptyStore/> */}
            <AllCategories />
            <SingleCategory />
            
        </div>
    )
}

export default CategoriesRoot
