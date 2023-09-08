import { FC } from "react";
import { useTranslation } from "react-i18next";

import AntButton from "../AntButton";
import { Pagination, PaginationProps } from "antd";
import Svg from "@/assets/svg";

type Props = PaginationProps & {
	itemRender?: any;
};

const AntPagination: FC<Props> = ({ ...props }) => {
	const { t } = useTranslation();

	function itemRender(_: number, type: string, originalElement: any) {
		if (type === "prev") {
			return <AntButton startIcon={<Svg icon="arrow-left" />}>{t("Дастлабки")}</AntButton>;
		}
		if (type === "next") {
			return <AntButton endIcon={<Svg icon="arrow-left" style={{ rotate: "180deg" }} />}>{t("Кейинги")}</AntButton>;
		}
		return originalElement;
	}

	return <Pagination showSizeChanger={false} itemRender={itemRender} {...props} />;
};

export default AntPagination;
