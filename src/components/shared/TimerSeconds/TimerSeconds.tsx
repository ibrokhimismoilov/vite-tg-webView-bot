import { memo, useMemo } from "react";

import classes from "./TimerSeconds.module.scss";

type Props = {
	format?: "HH:MM:SS" | "DD:HH:MM:SS";
	seconds?: number;
};

const _day = 86400;
const _hour = 3600;
const _min = 60;

const TimerSeconds = ({ seconds, format = "HH:MM:SS" }: Props) => {
	if (!seconds) return null;

	const getDays = useMemo(() => Math.floor(seconds / _day), [seconds]);

	const getHours = useMemo(() => {
		const _h = Math.floor((seconds % _day) / _hour);
		return _h > 9 ? _h : _h ? `0${_h}` : "00";
	}, [seconds]);

	const getMins = useMemo(() => {
		const _m = Math.floor((seconds % _hour) / _min);
		return _m > 9 ? _m : _m ? `0${_m}` : "00";
	}, [seconds]);

	const getSecs = useMemo(() => {
		const _s = seconds % _min;
		return _s > 9 ? _s : _s ? `0${_s}` : "00";
	}, [seconds]);

	if (format === "DD:HH:MM:SS") {
		return (
			<time className={classes.time}>
				{getDays ? getDays + ":" : null}
				{getHours}:{getMins}:{getSecs}
			</time>
		);
	}

	return (
		<time className={classes.time}>
			{getHours}:{getMins}:{getSecs}
		</time>
	);
};

export default memo(TimerSeconds);
