import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar/test.jsx';

const MainLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

/*MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};*/

export default MainLayout;