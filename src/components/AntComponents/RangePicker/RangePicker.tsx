import { CSSProperties, memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";

const { RangePicker: AntRangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

type Props = {
	style?: CSSProperties;
	isDisable?: boolean;
};

const RangePicker = ({ style, isDisable = true }: Props) => {
	const { t } = useTranslation();
	const [searchParams, setSearchParams] = useSearchParams();
	const [dates, setDates] = useState<RangeValue>(null);
	const [value, setValue] = useState<RangeValue>(null);

	useEffect(() => {
		if (searchParams.has("fromDate") && searchParams.has("toDate")) {
			setValue([dayjs(searchParams.get("fromDate")), dayjs(searchParams.get("toDate"))]);
		}
	}, [searchParams]);

	const disabledDate = (current: Dayjs) => {
		if (!dates) return false;
		const tooLate = dates[0] && current.diff(dates[0], "days") >= 15;
		const tooEarly = dates[1] && dates[1].diff(current, "days") >= 15;
		return !!tooEarly || !!tooLate;
	};

	const onOpenChange = (open: boolean) => {
		if (open) setDates([null, null]);
		else setDates(null);
	};

	const onChange = (val: RangeValue) => {
		if (val?.length) {
			// eslint-disable-next-line
			// @ts-ignore
			searchParams.set("fromDate", val[0].format("YYYY.MM.DD"));
			// eslint-disable-next-line
			// @ts-ignore
			searchParams.set("toDate", val[1].format("YYYY.MM.DD"));
			setSearchParams(searchParams);
		} else {
			if (searchParams.has("fromDate") && searchParams.has("toDate")) {
				searchParams.delete("toDate");
				searchParams.delete("fromDate");
				setSearchParams(searchParams);
			}
		}

		setValue(val);
	};

	return (
		<AntRangePicker
			style={style}
			size="large"
			format={"YYYY.MM.DD"}
			value={dates || value}
			placeholder={[t("Boshlang'ich"), t("Tugash")]}
			disabledDate={isDisable ? disabledDate : () => false}
			onCalendarChange={(val) => setDates(val)}
			onChange={onChange}
			onOpenChange={onOpenChange}
		/>
	);
};

export default memo(RangePicker);
