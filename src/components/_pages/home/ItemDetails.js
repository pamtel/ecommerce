import React from 'react'
import MainLayout from '../../_layout/MainLayout'
import { useHistory, useParams } from 'react-router-dom'
import {itemData} from '../../itemData'

function ItemDetails() {
    const { ItemId } = useParams()

    const singleItem = itemData.filter(i => i.id.toString() == ItemId)
    console.log(singleItem);
    return (
        <MainLayout>
        <div className="container">
            <h1>{ItemId}</h1>
        </div>
        </MainLayout>
    )
}

export default ItemDetails
