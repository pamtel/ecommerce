import React from 'react'
import Categories from '../categories/Categories'
import ItemList from '../../ItemList'
import BagSideBar from '../bag/BagSideBar'
import MainLayout from '../../_layout/MainLayout'


function HomeRoot() {
    return (
        <>
        <MainLayout id="main-layout">
        <hr className="d-md-block d-none"/>
        <div className="container home-root">
           <div className="row g-0">
               <aside className="category-sidebar col-md-3 border-end py-4">
                   <Categories />
               </aside>

               <main className="main-items col-md-6 border-end p-2 md-p-4">
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
