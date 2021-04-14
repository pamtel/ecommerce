import React  from 'react';
import GlobalHeader from '../GlobalHeader';
import GlobalFooter from '../GlobalFooter';

 const MainLayout = ({children}) => (
    
          <React.Fragment>
              <GlobalHeader />
              {children}
              <GlobalFooter />

          </React.Fragment>
    
)
export default MainLayout