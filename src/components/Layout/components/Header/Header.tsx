import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import cn from "classnames";
import classes from "./Header.module.scss";

import { Container } from "@/components/shared";
import { Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AntButton } from "@/components/AntComponents";
import { setGroupId, setLogout } from "@/store/auth";
import { useDispatch } from "react-redux";

interface IProps {
	isAuth?: boolean;
}

const Header = memo(({ isAuth = false }: IProps) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logoutHandler = useCallback(() => {
		localStorage.removeItem("token");
		dispatch(setGroupId("0"));
		dispatch(setLogout());
		navigate("/login");
	}, []);

	return (
		<header className={cn(classes.header, isAuth && "auth")}>
			<Container>
				<div className={classes.inner}>
					<h2>{t("Header")}</h2>

					<Space size={10}>
						<Link to={"/"}>Home</Link>
						<Link to={"/about"}>About us</Link>
					</Space>

					<AntButton style={{ marginLeft: "auto" }} size="large" type="primary" onClick={logoutHandler}>
						Logout
					</AntButton>
				</div>
			</Container>
		</header>
	);
});

export default Header;
