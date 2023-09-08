import { useTranslation } from "react-i18next";
import classes from "./Login.module.scss";

const Login = () => {
	const { t } = useTranslation();

	return (
		<div className={classes.login}>
			<h1>{t("Login")}</h1>
		</div>
	);
};

export default Login;
