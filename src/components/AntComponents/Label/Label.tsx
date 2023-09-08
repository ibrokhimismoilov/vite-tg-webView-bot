import classes from "./Label.module.scss";

type PropsType = {
	label: any;
	children: any;
};

const Label = ({ label, children }: PropsType) => {
	return (
		<div className={classes.labelWrap}>
			<label>{label}</label>
			{children}
		</div>
	);
};

export default Label;
