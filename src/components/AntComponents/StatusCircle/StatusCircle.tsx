import classes from "./StatusCircle.module.scss";
import cn from "classnames";

type Props = {
	type: "success" | "danger" | "primary" | "secondary";
};

const StatusCircle = ({ type }: Props) => {
	const className = cn(classes.statusCircle, classes[`${type}`]);
	return <div className={className} />;
};

export default StatusCircle;
