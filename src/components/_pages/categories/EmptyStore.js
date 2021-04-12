import React from 'react'
import Search from '../../Search'
import MobileFooter from '../../MobileFooter'
import AngrySmiley from '../../../assests/img/angrySmiley.png'

function EmptyStore() {
    return (
        <>
        <div className="px-3 pt-2">
            <Search/>

            <div className="mt-4 ">
                <h6>ALL CATEGORIES</h6>
                <div className="d-flex justify-content-center align-items-center py-5">
                    <div className="text-center emptyStore">
                        <img src={AngrySmiley} alt="smiley" className="pb-5 "/>
                        <h6 className="fontWeight color-darkslategray bag-payment">Opps, Store is empty</h6>
                        <p className="fontWeight color-darkgray">Opps! sorry, come back later <br/> store looks empty now</p>
                    </div>
                </div>
            </div>
            
        </div>
        <MobileFooter />
        </>
    )
}

export default EmptyStore
