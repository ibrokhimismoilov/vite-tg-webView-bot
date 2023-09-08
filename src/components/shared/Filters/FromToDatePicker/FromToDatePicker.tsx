import { DatePicker, DatePickerProps, Space } from "antd";
import { AntButton } from "@/components/AntComponents";
import { DATE_FORMAT } from "@/constants/general";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

interface IProps {
	mb?: 10 | 15 | 20 | 25 | 30 | 50;
}

interface IDates {
	fromDate?: string;
	toDate?: string;
}

const FromToDatePicker = ({ mb = 50 }: IProps) => {
	const { t } = useTranslation();
	const [dates, setDates] = useState<IDates>({ fromDate: undefined, toDate: undefined });
	const [search, setSearch] = useSearchParams();

	const fromDate = search.get("fromDate") ?? undefined;
	const toDate = search.get("toDate") ?? undefined;

	useEffect(() => {
		setDates({ fromDate, toDate });
	}, []);

	const onChangeFromDate: DatePickerProps["onChange"] = (_, dateString) => {
		setDates((p: IDates) => ({ ...p, fromDate: dateString }));
	};

	const onChangeToDate: DatePickerProps["onChange"] = (_, dateString) => {
		setDates((p: IDates) => ({ ...p, toDate: dateString }));
	};

	const setFilter = useCallback(() => {
		if (dates.fromDate) search.set("fromDate", dates.fromDate);
		else if (search.has("fromDate")) search.delete("fromDate");

		if (dates.toDate) search.set("toDate", dates.toDate);
		else if (search.has("toDate")) search.delete("toDate");
		setSearch(search);
	}, [search, dates]);

	return (
		<Space size={15} style={{ marginBottom: mb }}>
			<DatePicker
				allowClear
				placeholder={t("Бошланғич")}
				format={DATE_FORMAT}
				value={dates.fromDate ? dayjs(dates.fromDate, DATE_FORMAT) : undefined}
				onChange={onChangeFromDate}
				size="large"
			/>

			<DatePicker
				allowClear
				format={DATE_FORMAT}
				placeholder={t("Тугаш")}
				disabled={!dates.fromDate}
				value={dates.toDate ? dayjs(dates.toDate, DATE_FORMAT) : undefined}
				onChange={onChangeToDate}
				size="large"
			/>

			<AntButton onClick={setFilter} type="primary" size="large">
				{t("Применить")}
			</AntButton>
		</Space>
	);
};

export default FromToDatePicker;
