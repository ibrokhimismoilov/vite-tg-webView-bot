import { FC, ReactNode } from "react";

import classes from "./Tag.module.scss";
import cn from "classnames";

type Props = {
	title?: string;
	children?: ReactNode;
	type: "primary" | "success" | "danger";
	className?: string;
};

const Tag: FC<Props> = ({ children, title, type, className }) => {
	const classNames = cn(classes.tag, className && className, type === "primary" && classes.primary, type === "success" && classes.success, type === "danger" && classes.error);
	return (
		<div className={classNames}>
			{/* <span className={classes.circle} /> */}
			{title && title}
			{children && children}
		</div>
	);
};

export default Tag;
