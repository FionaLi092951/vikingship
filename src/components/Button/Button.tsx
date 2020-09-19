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
	className?: string;
	disabled?: boolean;
	size?: string;
	btnType?: ButtonType;
	children?: React.ReactNode;
	href?: string;
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
		href,
		className,
		...restProps
	} = props;
	// btn, btn-big, btn-primary
	const classes = classNames('btn', className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
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