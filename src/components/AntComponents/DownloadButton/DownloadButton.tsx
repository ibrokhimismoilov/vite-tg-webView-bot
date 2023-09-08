import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import AntButton from "../AntButton";
import { DownloadOutlined } from "@ant-design/icons";
import { message } from "antd";

import { request } from "@/services/api";

type Props = {
	downloadUrl: string;
	params?: any;
	fileName?: string;
};

const DownloadButton: FC<Props> = ({ downloadUrl, params, fileName = "excel" }) => {
	const { t } = useTranslation();

	const { mutate, isLoading } = useMutation(() => request.get(downloadUrl, { params, responseType: "blob" }), {
		onSuccess: (res: any) => {
			const a = document.createElement("a");

			a.href = URL.createObjectURL(new Blob([res.data], { type: `application/xlsx` }));
			a.setAttribute("download", `${fileName}.xlsx`);
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		},
		onError: (err: any) => {
			message.error(err?.response?.data?.Error || "error");
		}
	});

	return (
		<AntButton loading={isLoading} startIcon={<DownloadOutlined />} disabled={isLoading} onClick={() => mutate()}>
			{t("Юклаб олиш")}
		</AntButton>
	);
};

export default DownloadButton;
