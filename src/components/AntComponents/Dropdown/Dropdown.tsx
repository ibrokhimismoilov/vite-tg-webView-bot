import { FC } from "react";

import classes from "./Dropdown.module.scss";
import { Dropdown } from "antd";

type DropdownProps = {
	menu: any;
	selected?: string;
};

const DropdownMaker: FC<DropdownProps> = ({ selected, menu }) => {
	return (
		<Dropdown menu={menu}>
			<a className={classes.linkStyle} onClick={(e) => e.preventDefault()}>
				{selected}
				{/* {<Svg icon="arrow-down2" color={"#282F38"} />} */}
			</a>
		</Dropdown>
	);
};

export default DropdownMaker;
