import { FC, ReactNode } from "react";

import classes from "./Button.module.scss";
import { Button, ButtonProps } from "antd";
import cn from "classnames";

type Props = {
	strictlyDisabled?: boolean;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	isRounded?: boolean;
	isDanger?: boolean;
} & Omit<ButtonProps, "icon">;

const AntButton: FC<Props> = ({ children, className, startIcon, endIcon, disabled, strictlyDisabled, isRounded, isDanger = false, ...props }): JSX.Element => {
	return (
		<Button
			className={cn(classes.button, className, isRounded && classes.buttonRounded, isDanger && classes.buttonDanger, disabled && classes.buttonDisabled)}
			disabled={disabled || strictlyDisabled}
			{...props}>
			{startIcon && startIcon}
			{children}
			{endIcon && endIcon}
		</Button>
	);
};

export default AntButton;
