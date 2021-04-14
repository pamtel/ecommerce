import React from 'react';
import GlobalHeader from '../GlobalHeader';

 const  HeaderLayout = ({children}) => (
    
          <React.Fragment>
              <GlobalHeader />
              {children}

          </React.Fragment>
    
)
export default HeaderLayout