import { FC } from "react";

import Tag from "../../shared/Tag";
import "./Input.scss";
import { ConfigProvider, InputNumber as Input, InputNumberProps } from "antd";
import cn from "classnames";

type AntInputProps = InputNumberProps & {
	loading?: boolean;
	label?: string;
	isSearch?: boolean;
	disabled?: boolean;
	caption?: string;
	isSuccess?: boolean;
	isError?: boolean;
	successMsg?: string;
	inputClass?: string;
	inputType?: "default" | "primary" | undefined;
	size?: "small" | "middle" | "large" | undefined;
	searchType?: "primary" | "secondary" | undefined;
	status?: number;
	value?: any;
	isTextArea?: boolean;
	suffix?: string;
	direction?: "ltr" | "rtl";
	errorMessage?: string;
};

const AntInput: FC<AntInputProps> = ({
	isSearch,
	label,
	caption,
	isSuccess,
	isError,
	successMsg,
	size = "large",
	inputType = "primary",
	searchType = "primary",
	inputClass,
	status,
	isTextArea,
	suffix,
	direction = "rtl",
	errorMessage,
	...props
}) => {
	const classNames = cn(
		"input",
		searchType === "primary" && "search-primary",
		searchType === "secondary" && "search-secondary",
		inputType === "default" && "default",
		isSuccess && "is-success",
		isError && "is-error",
		size && size
	);

	return (
		<>
			<div className={classNames}>
				{label && <span className={"input-label"}>{label}</span>}
				<ConfigProvider direction={direction}>
					<Input
						size={size}
						dir={direction}
						style={{
							color: "#000",
							fontWeight: 800,
							width: "100%",
							textAlign: direction === "rtl" ? "right" : "left"
						}}
						defaultValue={props.value || 0}
						min={0}
						formatter={(value: any) => {
							if (value?.includes(".")) {
								return value?.split(".")?.[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "." + value?.split(".")?.[1] + (suffix || "");
							} else {
								return `${value} ${suffix === "%" ? "%" : ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
							}
						}}
						parser={(value: any) => value.replace(/\$\s?|(\s*)/g, "")}
						className={inputClass}
						{...props}
					/>
				</ConfigProvider>
				{caption && <small>{caption}</small>}
				{successMsg && <Tag title={successMsg} type={"success"} />}
				{errorMessage && <Tag title={errorMessage} type={"danger"} />}
			</div>
		</>
	);
};

export default AntInput;
