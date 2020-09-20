import React, { useState, Fragment } from 'react';
import classNames from 'classnames';

export enum AlertType{
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Default = 'default'
};

interface IAlertProps{
  title: string;
  description?: string;
  type?: AlertType;
  closable?: boolean;
  onClose?: () => void;
};

const Alert: React.FC<IAlertProps> = (props) => {
  const [ hide, setHide ] = useState(false);
  const {
    title,
    description,
    type,
    closable,
  } = props;
  // alert, alert-default, alert-success
	const classes = classNames('alert', {
		[`alert-${type}`]: type
  });
  const titleClass = classNames('alert-title', {
    'bold-title': description
  });
  const handleClose = (e: React.MouseEvent) => {
    setHide(true);
  }
  return (hide ? <Fragment></Fragment> :
    <div
      className={classes}
    >
      <span className={titleClass}>{title}</span>
      { description && <p className="alert-desc">{description}</p> }
      { closable && <span className="alert-close" onClick={handleClose}>x</span> }
    </div>
  )
};

Alert.defaultProps = {
  type: AlertType.Default,
  closable: true,
};

export default Alert;