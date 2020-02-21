import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Widget = ({ to, title, children }) => {
  let Wrapper = Container;

  if (to) {
    Wrapper = Link;
  }

  return (
    <Wrapper to={to} className="widget-wrapper">
      <div>
        <div className="widget-header">
          {title}
        </div>
      </div>
      <div className="widget-content">
        {children}
      </div>
    </Wrapper>
  );
};


const Container = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Widget;
