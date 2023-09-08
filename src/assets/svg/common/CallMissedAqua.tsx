type Props = {
	fill?: string;
};

const CallMissedAqua = (props: Props) => {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M14.6925 5.25L9 10.9425L4.8075 6.75H8.25V5.25H2.25V11.25H3.75V7.8075L9 13.0575L15.75 6.3075L14.6925 5.25Z" fill={props?.fill ?? "var(--sAqua)"} />
		</svg>
	);
};

export default CallMissedAqua;
