import React from "react";

import classes from "./IconWithContent.module.scss";

type Props = {
	icon?: React.ReactNode;
	content?: React.ReactNode;
};

const IconWithContent = ({ icon, content }: Props) => {
	return (
		<div className={classes.iconWithContent}>
			{icon && icon}
			{content && content}
		</div>
	);
};

export default IconWithContent;
