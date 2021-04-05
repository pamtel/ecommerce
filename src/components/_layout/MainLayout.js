import React, { Component } from 'react';
import GlobalHeader from '../GlobalHeader';
import GlobalFooter from '../GlobalFooter';

export default ({children}) => (
    
          <React.Fragment>
              <GlobalHeader />
              {children}
              <GlobalFooter />

          </React.Fragment>
    
)