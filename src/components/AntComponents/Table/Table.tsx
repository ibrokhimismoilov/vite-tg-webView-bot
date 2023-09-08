import { FC, ReactNode } from "react";

import classes from "./Table.module.scss";
import { PageSizeOptions } from "./components";
import { Table as AntTable, Skeleton, TableProps } from "antd";
import cn from "classnames";

import { Scroller } from "@/components/AntComponents";

type Props = TableProps<any> & {
	bordered?: boolean;
	download?: boolean;
	mainFilter?: ReactNode | boolean;
	hasPageSize?: boolean;
	hasHeaderFilter?: boolean;
	headerLeftFilter?: ReactNode;
	width?: number | "auto";
	height?: number | "auto";
	scrollable?: boolean;
	isLoading?: boolean | ReactNode;
	title?: string;
	wrapClassName?: string;
	isScroller?: boolean;
	withHeadColors?: boolean;
	isBordered?: boolean;
	withMargin?: boolean;
};

const Table: FC<Props> = ({
	hasPageSize = false,
	hasHeaderFilter = false,
	headerLeftFilter,
	mainFilter = false,
	bordered = true,
	download = true,
	scrollable,
	width = 2000,
	height = 1000,
	isLoading = false,
	wrapClassName,
	isScroller,
	withHeadColors = false,
	title = "",
	withMargin = false,
	isBordered = true,
	...props
}) => {
	const classnames = cn(
		wrapClassName,
		classes.table,
		withMargin && classes.tableWithMargin,
		scrollable && classes.scrollTable,
		isBordered && classes.tableBordered,
		height === "auto" && classes.tableYnotScroll,
		withHeadColors && classes.withHeadColors
	);

	return (
		<div className={classnames}>
			{(hasHeaderFilter || hasPageSize) && (
				<div className={classes.headerFilter}>
					{headerLeftFilter && <div>{headerLeftFilter}</div>}
					{hasPageSize && <PageSizeOptions />}
				</div>
			)}

			{mainFilter && <>{mainFilter}</>}

			{title && <div className={classes.title}>{title}</div>}

			{isLoading ? (
				Array(10)
					.fill(1)
					.map((_, key) => <Skeleton.Input key={key} active size={"large"} block style={{ marginBottom: 10 }} />)
			) : (
				<AntTable rowKey="key" id={"product_table"} pagination={false} scroll={scrollable ? { x: width, y: height } : undefined} {...props} bordered={bordered} />
			)}

			{isScroller && props.dataSource?.length !== 0 ? <Scroller tableId={"product_table"} /> : null}

			{isBordered && <div className={classes.foot} />}
		</div>
	);
};

export default Table;
