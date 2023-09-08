import { FC } from "react";

import { Form } from "antd";

import { NamePath } from "antd/es/form/interface";

import { Input, Select } from "@/components/AntComponents";

type Props = {
	field: "input" | "datepicker" | "select" | "checkbox";
	name: NamePath | undefined;
	label?: string;
	required?: boolean;
	placeholder?: string;
	message?: string;
	disabled?: boolean;
	className?: string;
	inputClass?: string;
	isSearch?: boolean;
	value?: any;
	inputType?: "default" | "primary" | undefined;
	size?: "small" | "middle" | "large" | undefined;
	searchType?: "primary" | "secondary" | undefined;
	type?: "text" | "number" | "tel" | "email" | "file";
	options?: any[];
	// onChange?: (val:any) => void;
};

const InputGenerator: FC<Props> = ({ field, name, message, value, required, className, ...props }) => {
	const getFields = (type: string) => {
		switch (type) {
			case "input":
				return <Input {...props} />;
			// case "datepicker":
			// 	return <DatePicker {...props} />;
			case "select":
				return <Select {...props} value={value} />;
			default:
				return false;
		}
	};

	return (
		<div className={className}>
			<Form.Item
				name={name}
				rules={[
					{
						required: required,
						message: message
					}
				]}>
				{getFields(field)}
			</Form.Item>
		</div>
	);
};

export default InputGenerator;
