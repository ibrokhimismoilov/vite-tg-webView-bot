import { FC } from "react";

import "./Select.scss";
import { Select as AntSelect, SelectProps } from "antd";
import cn from "classnames";

type Props = SelectProps<any> & {
	className?: string;
	fullWidth?: boolean;
	label?: string;
	size?: string;
	defaultValue?: any;
	value?: any;
	options?: any;
	// onChange?: (val:any) => void;
};

const Select: FC<Props> = ({
	children,
	label,
	className,
	fullWidth,
	options,
	size,
	// onChange,
	...props
}) => {
	const wrapperClasses = cn("select-wrapper", className && className, size && `select-size-${size}`);

	const { Option } = AntSelect;

	return (
		<div className={wrapperClasses} style={{ position: "relative" }}>
			{label && <span className={"select-label"}>{label}</span>}
			<AntSelect className={"select"} options={options} size={size} {...props}>
				{options &&
					options.map((i: any, key: number) => (
						<Option key={key} value={String(i.value)}>
							{i.label}
						</Option>
					))}
			</AntSelect>
		</div>
	);
};

export default Select;
