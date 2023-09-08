type Props = {
	fill?: string;
};

const CallReceived = (props: Props) => {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M15 4.0575L13.9425 3L5.25 11.6925V6.75H3.75V14.25H11.25V12.75H6.3075L15 4.0575Z" fill={props?.fill ?? "#001F60"} />
		</svg>
	);
};

export default CallReceived;
