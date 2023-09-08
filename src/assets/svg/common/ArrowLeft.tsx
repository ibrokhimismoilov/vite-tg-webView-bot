import { memo } from "react";

const ArrowLeft = (props: any) => (
	<svg width={8} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="M7.7 12.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.4 7l5.3 5.3Z"
			fill="#777B82"
		/>
	</svg>
);

export default memo(ArrowLeft);
