import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import classes from "./PageSizeOptions.module.scss";
import { Select } from "antd";

import { pageSizesOptions } from "@/constants/general";

type PropType = {
	size?: "large" | "middle" | "small";
	// pageSize: number | string | undefined;
	// onHandlePageSizeChange: (e: string) => void;
};
// pageSize, onHandlePageSizeChange
const PageSizeOptions = ({ size = "large" }: PropType) => {
	const { t } = useTranslation();
	const [search, setSearch] = useSearchParams();
	const pageSize = search.get("pageSize") ? Number(search.get("pageSize")) : "10";

	return (
		<div className={classes.main}>
			<span>{t("Записей на странице")}:</span>
			<Select
				size={size}
				style={{ width: "80px" }}
				options={pageSizesOptions}
				value={pageSize}
				onSelect={(event) => {
					search.set("pageSize", String(event));
					setSearch(search);
				}}
			/>
		</div>
	);
};

export default PageSizeOptions;
