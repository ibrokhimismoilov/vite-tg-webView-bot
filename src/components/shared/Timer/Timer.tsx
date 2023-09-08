import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
	time: number | Date;
	currentTime?: number | Date;
	format?: "HH:MM:SS" | "DD:HH:MM:SS";
};

const day = 86400; // sec
const hour = 3600; // sec
const min = 60; // sec

const Timer = ({ time, currentTime, format = "HH:MM:SS" }: Props) => {
	if (!new Date(time).valueOf()) return null;
	// if (!new Date(time).valueOf() || !new Date(currentTime).valueOf()) return null;

	const getDifferenceTime = useCallback(() => Math.floor(new Date().valueOf() / 1000) - Math.floor(new Date(time).valueOf() / 1000), [time]);
	// const getDifferenceTime = useCallback(() => Math.floor(new Date(currentTime).valueOf() / 1000) - Math.floor(new Date(time).valueOf() / 1000), [time]);

	const { t } = useTranslation();
	const intervalRef = useRef<any>(null);
	const difference = useRef(getDifferenceTime());

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		difference.current = getDifferenceTime();
	}, [time, currentTime]);

	useEffect(() => {
		intervalRef.current = setTimeout(() => {
			difference.current += 1;

			const _days = Math.floor(difference.current / day);
			const _hours = Math.floor((difference.current % day) / hour);
			const _minutes = Math.floor((difference.current % hour) / min);
			const _seconds = Math.floor(difference.current % min);

			setDays(_days);
			setHours(_hours);
			setMinutes(_minutes);
			setSeconds(_seconds);
		}, 1000);

		return () => {
			if (intervalRef.current) clearTimeout(intervalRef.current);
		};
	}, [difference.current, time, currentTime]);

	if (format === "HH:MM:SS" && difference.current < 0) {
		return <time>0:00:00</time>;
	}

	if (format === "HH:MM:SS") {
		return (
			<time>
				{days ? `${days}:` : null}
				{hours}:{minutes < 10 ? `0${minutes ? minutes : "0"}` : minutes}:{seconds < 10 ? `0${seconds ? seconds : "0"}` : seconds}
			</time>
		);
	}

	return (
		<time>
			{days ? (
				<>
					{days}
					{t("д")}.{" "}
				</>
			) : null}

			{hours ? (
				<>
					{hours < 10 ? `0${hours}` : hours}
					{t("ч")}.{" "}
				</>
			) : null}

			<>
				{minutes < 10 ? `0${minutes ? minutes : "0"}` : minutes}
				{t("м")}.{" "}
			</>

			<>
				{seconds < 10 ? `0${seconds ? seconds : "0"}` : seconds}
				{t("с")}.
			</>
		</time>
	);
};

export default memo(Timer);
