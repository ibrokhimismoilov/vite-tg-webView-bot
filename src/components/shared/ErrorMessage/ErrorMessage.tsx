import classes from "./ErrorMessage.module.scss";

type Props = {
	errors: any;
	name: string;
};

const ErrorMessage = ({ errors, name }: Props) => {
	if (Object.prototype.hasOwnProperty.call(errors, name)) {
		const { message } = errors[name];
		// console.log("message", message);

		return message ? <span className={classes.errorMessage}>{message}</span> : null;
	}
	return null;
};

export default ErrorMessage;
