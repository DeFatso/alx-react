import React from 'react';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import './BodySectionWithMarginBottom.css'; // Importing the CSS file

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;