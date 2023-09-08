type Props = {
	fill?: string;
};

const CallMade = (props: Props) => {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M6.75 3.75V5.25H11.6925L3 13.9425L4.0575 15L12.75 6.3075V11.25H14.25V3.75H6.75Z" fill={props?.fill ?? "var(--sSuccessLight)"} />
		</svg>
	);
};

export default CallMade;
