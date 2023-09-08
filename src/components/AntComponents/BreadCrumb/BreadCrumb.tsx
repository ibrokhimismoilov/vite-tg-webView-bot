import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./Style.module.scss";
import { Breadcrumb } from "antd";
import cn from "classnames";

type breadCrumb = {
	id: number;
	title: string;
	path?: string;
};

type Props = {
	breadCrumb: Array<breadCrumb>;
	separator?: string;
	className?: string;
};

const BreadCrumb: FC<Props> = ({ separator = "-", className, breadCrumb }) => {
	const classNames = cn(classes.breadcrumb, className && className);

	return (
		<Breadcrumb separator={separator} className={classNames}>
			{breadCrumb &&
				breadCrumb.map((item, key) => (
					<Breadcrumb.Item key={key} className={classes.breadcrumbItem}>
						{item.path ? <Link to={item.path}>{item.title}</Link> : item.title}
					</Breadcrumb.Item>
				))}
		</Breadcrumb>
	);
};

export default BreadCrumb;
