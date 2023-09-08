import classes from "./FilterBtn.module.scss";

import Svg from "@/assets/svg";

type Props = {
	onClick?: (e: any) => void;
};

const FilterBtn = ({ onClick }: Props) => {
	return (
		<div className={classes.filterBtn} onClick={onClick}>
			<Svg icon="filterSettings" />
		</div>
	);
};

export default FilterBtn;
