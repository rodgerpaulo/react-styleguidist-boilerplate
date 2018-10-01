import React from 'react';
import { string, func, bool } from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const { children, className, type, roundedBorder, onClick, ...rest } = props;
  const classes = classNames('btn', 'sans-bold', className, {
    'btn--rounded': roundedBorder
  });
  const buttonType = type || 'button';

  return (
    <button type={buttonType} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button has rounded border
   */
  roundedBorder: bool,
  /**
   * Button classNames
   */
  className: string,
  /**
   * Type attr
   */
  type: string,
  /**
   * Click callback
   */
  onClick: func
};

Button.defaultProps = {
  roundedBorder: true,
  className: ''
};

export default Button;
