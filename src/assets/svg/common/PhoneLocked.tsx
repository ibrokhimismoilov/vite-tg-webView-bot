type Props = {
	fill?: string;
};

const PhoneLocked = (props: Props) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 4V3.5C20 2.12 18.88 1 17.5 1C16.12 1 15 2.12 15 3.5V4C14.45 4 14 4.45 14 5V9C14 9.55 14.45 10 15 10H20C20.55 10 21 9.55 21 9V5C21 4.45 20.55 4 20 4ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM16 4H19V3.5C19 2.67 18.33 2 17.5 2C16.67 2 16 2.67 16 3.5V4Z"
				fill={props?.fill ?? "var(--sAqua)"}
			/>
		</svg>
	);
};

export default PhoneLocked;