import { CSSProperties, FC } from "react";

import "./AntInput.scss";
import { Input, InputProps } from "antd";
import cn from "classnames";

type AntInputProps = InputProps & {
	loading?: boolean;
	label?: string;
	isFooterSearch?: boolean;
	isSearch?: boolean;
	disabled?: boolean;
	caption?: string;
	isSuccess?: boolean;
	successMsg?: string;
	onSearch?: (val: any) => void;
	labelPosition?: "relative" | "absolute";
	containerStyle?: CSSProperties;
};

const AntInput: FC<AntInputProps> = ({ isFooterSearch, isSearch, label, caption, isSuccess, successMsg, labelPosition = "absolute", containerStyle, ...props }) => {
	const { Search } = Input;

	const classNames = cn("input", isSearch && "is-search", isFooterSearch && "is-footer-search", isSuccess && "is-success");

	return (
		<>
			<div className={classNames} style={containerStyle}>
				{label && (
					<span data-position={labelPosition} className={"input-label"}>
						{label}
					</span>
				)}
				{isSearch ? <Search {...props} /> : <Input size="large" {...props} />}
				{caption && <small>{caption}</small>}
				{successMsg && <p>{successMsg}</p>}
			</div>
		</>
	);
};

export default AntInput;
