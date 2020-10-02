import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
	Large = 'lg',
	Small = 'sm'
}

export enum ButtonType  {
	Primary = 'primary',
	Default = 'default',
	Danger = 'danger',
	Link = 'link'
}

interface IBaseButtonProps {
  /**
   * Add user define class to button
   */
  className?: string;
  /**
   * button cannot be clicked if it's disabled
   */
  disabled?: boolean;
  /**
   * size of button: lg sm, default is normal size
   */
  size?: string;
  /**
   * button type: primary, default, danger, link
   */
	btnType?: ButtonType;
  /**
   * href value of button with link type
   */
  href?: string;
  /**
   * set button as round corner or not
   */
  roundCorner?: boolean;
  children?: React.ReactNode;
}

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

const Button: React.FC<ButtonProps> = (props) => {
 	const {
		btnType,
		disabled,
		size,
    children,
    roundCorner,
		href,
		className,
		...restProps
	} = props;
	// btn, btn-big, btn-primary
	const classes = classNames('btn', className, {
		[`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'round-corner': roundCorner,
		'disabled': (btnType === ButtonType.Link) && disabled
	});
	if (btnType === ButtonType.Link && href) {
		return (
			<a
				className={classes}
				href={href}
				{...restProps}
			>
				{children}
			</a>
		);
	} else {
		return (
			<button
				className={classes}
				disabled={disabled}
				{...restProps}
			>
				{children}
			</button>
		);
	}
}

Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Default
}

export default Button;