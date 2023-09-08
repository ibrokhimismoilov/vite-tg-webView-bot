interface IProps {
	active: number;
	count: number;
	title: string;
	uPointerId: string | number;
}

const Pointer = ({ active, uPointerId, title, count }: IProps) => {
	return (
		<div className={`u-pointer u-pointer-${uPointerId} ${active === uPointerId ? "active" : ""}`}>
			<div className="u-pointer__content">
				<span className="u-pointer__content-text">{title}</span>
				<span className="u-pointer__content-count">{count}</span>
			</div>
			<div className="u-pointer__dot-primary" />
			<div className="u-pointer__dot-danger" />
		</div>
	);
};

export default Pointer;
