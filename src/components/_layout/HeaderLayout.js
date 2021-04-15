import React from 'react';
import GlobalHeader from '../GlobalHeader';

 const  HeaderLayout = ({bagCleared , children}) => {
     console.log("header", bagCleared);

    return (
          <React.Fragment>
              <GlobalHeader bagCleared={bagCleared}/>
              {children}

          </React.Fragment>
    )
    
 }
export default HeaderLayout