import { useNavigate } from "react-router-dom";

import classes from "./GoBack.module.scss";
import Svg from "@/assets/svg";

type Props = {
	title: string;
	goBack?: number;
};

const GoBack = ({ title, goBack = -1 }: Props) => {
	const navigate = useNavigate();

	return (
		<p className={classes.goBack} onClick={() => navigate(goBack)}>
			<Svg icon="arrow-left" />
			<span>{title}</span>
		</p>
	);
};

export default GoBack;
