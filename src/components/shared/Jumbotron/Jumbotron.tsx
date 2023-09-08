import cn from "classnames";
import classes from "./Jumbotron.module.scss";
import { StatusType } from "types/prop";

interface IProps {
	type: StatusType;
	title?: string;
	title2?: string;
	isDuble?: boolean;
	className?: string;
	hasBorderBottom?: boolean;
}

export default ({ title, title2, type, className = "", isDuble = false, hasBorderBottom = true }: IProps) => (
	<div className={cn(classes.jumbotron, classes[type], className, !hasBorderBottom && classes.noBorderBottom)}>
		{isDuble ? (
			<div className={classes.duble}>
				<span className={classes.title}>{title}</span>
				<span className={classes.title}>{title2}</span>
			</div>
		) : (
			<span className={classes.title}>{title}</span>
		)}
	</div>
);
