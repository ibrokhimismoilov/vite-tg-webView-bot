import { memo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import useOnlineStatus from "@/hooks/custom/useOnlineStatus";
import { notification } from "antd";

const OnlineStatus = memo(() => {
	const { t } = useTranslation();
	const checkDidMount = useRef(true);
	const isOnline = useOnlineStatus();
	const [api, contextHolder] = notification.useNotification();

	useEffect(() => {
		if (checkDidMount.current) {
			checkDidMount.current = false;
			return;
		}

		if (isOnline) {
			api.success({
				message: t("Интернет уланди"),
				placement: "top"
			});
		} else {
			api.warning({
				message: isOnline ? t("Интернет уланди") : t("Интернет узулган"),
				placement: "top"
			});
		}
	}, [isOnline, api, t]);

	return contextHolder;
});

export default OnlineStatus;
