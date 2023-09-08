import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import classes from "./Login.module.scss";
import { Checkbox, Input, Spin, message } from "antd";
import axios from "axios";
import { get } from "lodash";

import { ErrorMessage } from "@/components/shared";
import { AntButton } from "@/components/AntComponents";

// import { ReactComponent as InputPass } from "assets/images/svg/login-input-pass.svg";
// import { ReactComponent as InputUser } from "assets/images/svg/login-input-user.svg";
// import Logo from "assets/svg/common/logo.svg";
// import Svg from "assets/svg";

import { useDispatch } from "react-redux";
import { setToken } from "@/store/auth";

interface IForm {
	login: string;
	password: string;
}

const defaultValues: IForm = { login: "", password: "" };

const Login = () => {
	// const [search, setSearch] = useSearchParams();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	const { mutate } = useMutation((body: IForm) => axios.post(`${import.meta.env.VITE_API_AUTH}/login`, body), {
		onSuccess: (res: any) => {
			if (get(res, "data")) {
				localStorage.setItem("token", get(res, "data"));
				dispatch(setToken(get(res, "data")));
				window.location.reload();
				// navigate("/");
			} else {
				setError("login", { type: "focus", message: t("Логин хато") });
				setError("password", { type: "custom", message: t("Пароль хато") });
			}
		},
		onError: (err: any) => {
			message.error(get(err, "message"));
		}
	});

	const {
		control,
		setError,
		formState: { errors, isSubmitting },
		handleSubmit
	} = useForm<IForm>({
		mode: "all",
		defaultValues
	});

	const onSubmit = (values: IForm) => mutate(values);

	return (
		<div className={classes.login}>
			<Spin spinning={isSubmitting}>
				<form autoComplete="off" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
					<input style={{ display: "none" }} type="text" name="login" autoComplete="login" />
					<input style={{ display: "none" }} type="password" name="password" autoComplete="password" />

					<h3 className={classes.title}>{t("Авторизация")}</h3>

					<div className="mb-20" />

					<Controller
						name="login"
						control={control}
						rules={{ required: { value: true, message: t("To'ldirilishi shart") } }}
						render={({ field: { value, onBlur, onChange } }) => (
							<Input
								type="text"
								size="large"
								value={value}
								onBlur={onBlur}
								onChange={onChange}
								autoComplete="off"
								className="onlyLight"
								placeholder={t("Логин") + " ..."}
								status={"login" in errors ? "error" : ""}
								// prefix={<InputUser />}
							/>
						)}
					/>
					<ErrorMessage name="login" errors={errors} />

					<div className="mb-20" />

					<Controller
						name="password"
						control={control}
						rules={{ required: { value: true, message: t("To'ldirilishi shart") } }}
						render={({ field: { value, onBlur, onChange } }) => (
							<Input.Password
								className="onlyLight"
								size="large"
								value={value}
								onBlur={onBlur}
								onChange={onChange}
								autoComplete="off"
								placeholder={t("Пароль") + " ..."}
								status={"password" in errors ? "error" : ""}
								// prefix={<InputPass />}
							/>
						)}
					/>
					<ErrorMessage name="password" errors={errors} />

					<div className="mb-10" />

					<div className={classes.footer}>
						<label className={classes.remember}>
							<Checkbox />
							{t("Запомнить")}
						</label>

						<AntButton disabled={isSubmitting} htmlType="submit" size="large" type="default">
							{t("Войти")}
						</AntButton>
					</div>
				</form>
			</Spin>
		</div>
	);
};

export default Login;
