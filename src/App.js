import './App.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Switch, Route } from "react-router-dom";
import BagRoot from './components/_pages/bag/BagRoot';
import HomeRoot from './components/_pages/home/HomeRoot';
import AccountRoot from './components/_pages/account/AccountRoot';
import ItemDetails from './components/_pages/home/ItemDetails';
import AccountAddress from './components/_pages/account/AccountAddress';
import Utilities from './components/Utilities';
import CheckOut from './components/_pages/bag/CheckOut';

const App = () => {
   return (
     <>
       
        {/* Routing */}
        <Switch>
            <Route path='/' exact>
                <HomeRoot />
            </Route>

            <Route path='/bag' exact>
                <BagRoot />
            </Route>

            <Route path='/account' exact>
                <AccountRoot />
            </Route>

            <Route path='/address'>
                <AccountAddress/>
            </Route>

            <Route path='/utilities'>
                <Utilities />
            </Route>

            <Route path='/bag/checkout'>
                <CheckOut />
            </Route>

            <Route path='/item-details/:ItemId' exact>
                <ItemDetails/>
            </Route>
            
          </Switch>
     </>
   )
}

export default App;


