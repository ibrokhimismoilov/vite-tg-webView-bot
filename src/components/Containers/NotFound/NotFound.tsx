import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import classes from "./NotFound.module.scss";
import { Button, Result } from "antd";

const NotFound = () => {
	const { t } = useTranslation();

	return (
		<div className={classes.wrapper}>
			<div className="pt60 pb60">
				<div className="container">
					<Result
						status={404}
						title={t("Саҳифа мавжуд эмас")}
						extra={
							<Link to={"/"}>
								<Button type="primary" shape="round">
									{t("Бош саҳифа")}
								</Button>
							</Link>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
