import React from 'react'
import Categories from '../../Categories'
import ItemList from '../../ItemList'
import SliderOne from '../../SliderOne'
import BagSideBar from '../bag/BagSideBar'
import MainLayout from '../../_layout/MainLayout'


function HomeRoot() {
    return (
        <>
        <MainLayout>
        <hr/>
        <div className="container home-root">
           <div className="row g-0">
               <aside className="category-sidebar col-md-3 border-end py-4">
                   <Categories />
               </aside>

               <main className="main-items col-md-6 border-end p-4">
                   <ItemList />
               </main>

               <aside className="bag-sidebar col-md-3 p-4">
                 <BagSideBar />
               </aside>
           </div>
        </div>
        </MainLayout>
        </>
    )
}

export default HomeRoot