import { memo } from "react";
import { useTranslation } from "react-i18next";

import cn from "classnames";
import classes from "./Footer.module.scss";

interface IProps {
	isAuth?: boolean;
}

const Footer = memo(({ isAuth = false }: IProps) => {
	const { t } = useTranslation();

	return (
		<footer className={cn(classes.footer, isAuth && "auth")}>
			<span>{t("© 2023. All Rights Reserved")}.</span>
		</footer>
	);
});

export default Footer;
