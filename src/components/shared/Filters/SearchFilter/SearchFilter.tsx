import { useState } from "react";
import { FromToDatePicker } from "..";
import { Input } from "antd";
import classes from "./SearchFilter.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import cn from "classnames";

interface IProps {
	withDateFilter?: boolean;
}

const SearchFilter = ({ withDateFilter = false }: IProps) => {
	const [toggle, setToggle] = useState(false);

	const onSearch = (val: string) => console.log("onSearch", val);

	return (
		<div className={classes.searchFilter}>
			{withDateFilter ? <FromToDatePicker /> : <div />}

			<div className={cn(classes.search, toggle && classes.searchToggle)}>
				<div className={classes.searchInput}>
					<Input.Search size="large" allowClear onSearch={onSearch} />
				</div>

				<div onClick={() => setToggle((p) => !p)} className={classes.icon}>
					<SearchOutlined />
				</div>
			</div>
		</div>
	);
};

export default SearchFilter;
