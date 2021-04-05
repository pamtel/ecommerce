import React, { Component } from 'react';
import GlobalHeader from '../GlobalHeader';

export default ({children}) => (
    
          <React.Fragment>
              <GlobalHeader />
              {children}

          </React.Fragment>
    
)