import { ThemeConfig } from "antd/es/config-provider/context";

export { default as RangePicker } from "./RangePicker";
export { default as Scroller } from "./Scroller";
export { default as Input } from "./Input";
export { default as Table } from "./Table";
export { default as Select } from "./Select";
export { default as Checkbox } from "./Checkbox";
export { default as Dropdown } from "./Dropdown";
export { default as AntButton } from "./AntButton";
export { default as Pagination } from "./Pagination";
export { default as BreadCrumb } from "./BreadCrumb";
export { default as InputGenerator } from "./InputGenerator";
export { default as DownloadButton } from "./DownloadButton";
export { default as Label } from "./Label";
export { default as StatusCircle } from "./StatusCircle";

// TODO: https://ant.design/docs/react/customize-theme#api
export const globalConfig: ThemeConfig = {
	token: {
		colorPrimary: "#325ecd",
		fontFamily: `"PT Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
	}
};
