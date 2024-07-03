import React, { useState } from 'react';
import propTypes from 'prop-types'
import AppContext from './AppContext';

function Provider({ children }) {

const [products, setProducts] = useState([]);

  const value = {
    products,
    setProducts,
  };

  return ( 
      <AppContext.Provider value={ value }>
        {children}
      </AppContext.Provider>
   );
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;

export default Provider;