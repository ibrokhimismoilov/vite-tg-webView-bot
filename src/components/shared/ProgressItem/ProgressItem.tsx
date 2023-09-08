import classes from "./ProgressItem.module.scss";
import { StatusType } from "types/prop";
import { Progress } from "antd";
import cn from "classnames";

type Props = {
	percent?: number;
	title?: string;
	count?: number;
	color?: string;
	type: StatusType;
};

const ProgressItem = ({ title, count, color, type, percent }: Props) => {
	return (
		<div className={classes.progressItem}>
			<div className={classes.head}>
				<span className={classes.label}>{title}</span>
				<span className={cn(classes.count, classes[type])}>{count}</span>
			</div>
			<Progress percent={percent} showInfo={false} strokeColor={color} />
		</div>
	);
};

export default ProgressItem;
