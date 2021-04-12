import React, { Component } from 'react';
import GlobalFooter from '../GlobalFooter';

export default ({children}) => (
    
          <React.Fragment>
              <GlobalFooter />
              {children}

          </React.Fragment>
    
)