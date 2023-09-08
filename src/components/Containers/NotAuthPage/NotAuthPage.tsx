import { useTranslation } from "react-i18next";

import { Button, Result } from "antd";

const NotAuthPage = () => {
	const { t } = useTranslation();

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh"
			}}>
			<Result
				status="403"
				title={t("Авторизациядан ўтинг")}
				subTitle={t("Илтимос дастурга қайта киринг")}
				extra={
					<a href={import.meta.env.VITE_API_PROD === "false" ? "http://10.15.51.214/" : "http://10.15.51.205/"}>
						<Button type="primary" size="large" shape="round">
							{t("Кириш")}
						</Button>
					</a>
				}
			/>
		</div>
	);
};

export default NotAuthPage;
