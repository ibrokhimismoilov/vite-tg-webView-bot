import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import classes from "./Language.module.scss";
import { MenuProps } from "antd";
import { get } from "lodash";

import { Dropdown } from "@/components/AntComponents";

const Language = memo(() => {
	const { i18n } = useTranslation();
	const [lang, setLang] = useState("uz_cyrl");

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")) {
			setLang(localStorage.getItem("i18nextLng") as string);
		} else {
			setLang("uz_cyrl");
			localStorage.setItem("i18nextLng", "uz_cyrl");
		}
	}, []);

	const changeLang = useCallback(
		(key: string) => {
			i18n.changeLanguage(key);
			setLang(key);
		},
		[i18n]
	);

	const items: MenuProps["items"] = useMemo(
		() => [
			{
				key: "ru",
				onClick: () => changeLang("ru"),
				label: "РУ"
			},
			{
				key: "uz_cyrl",
				onClick: () => changeLang("uz_cyrl"),
				label: "ЎЗ"
			},
			{
				key: "uz_latn",
				onClick: () => changeLang("uz_latn"),
				label: "O'Z"
			}
		],
		[changeLang]
	);

	const selected = get(
		items.find((_i: any) => _i.key === lang),
		"label",
		"uz_cyrl"
	);

	return (
		<div className={classes.lang}>
			<Dropdown menu={{ items, selectable: true, defaultSelectedKeys: [lang] }} selected={selected} />
		</div>
	);
});

export default Language;
