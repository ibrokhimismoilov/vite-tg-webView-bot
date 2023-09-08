// ============ COMMON_ICONS ============
import { SVGProps, useMemo } from "react";

import Approve from "./common/Approve";
import ArrowDown2 from "./common/ArrowDown2";
import ArrowLeft from "./common/ArrowLeft";
import Close from "./common/Close";
import DownloadSvg from "./common/DownloadSvg";
import Error from "./common/Error";
import Excel from "./common/Excel";
import FilterSettingsSvg from "./common/FilterSettingsSvg";
// import AttachInterface from "./common/AttachInterface";
// import Bars from "./common/Bars";

// ============ OTHER_ICONS ============

import { createProxyWithHandler } from "../../utils/proxy";

export type SvgTypes = "excel" | "filterSettings" | "download" | "close" | "approve" | "error" | "arrow-left" | "arrow-down2";

interface ISvgProps extends SVGProps<SVGSVGElement> {
	icon: SvgTypes;
	withAntIcon?: boolean;
}

export default function Svg({ icon, withAntIcon = false, ...props }: ISvgProps) {
	const SVG_LIST: Record<SvgTypes, JSX.Element> = useMemo(
		() => ({
			excel: <Excel {...props} />,
			filterSettings: <FilterSettingsSvg {...props} />,
			download: <DownloadSvg name={icon} {...props} />,
			close: <Close name={icon} {...props} />,
			approve: <Approve name={icon} {...props} />,
			error: <Error name={icon} {...props} />,
			"arrow-left": <ArrowLeft name={icon} {...props} />,
			"arrow-down2": <ArrowDown2 name={icon} {...props} />
		}),
		[icon, props]
	);

	const proxySvgList = createProxyWithHandler(SVG_LIST, <span />);

	if (withAntIcon) {
		return <span className="anticon">{proxySvgList[icon]}</span>;
	}
	return proxySvgList[icon];
}

/* =============
Example:

1) <Svg icon="error" />

2) <Svg icon="error" style={{color: "blue"}} />

3) <Svg icon="error" {...otherSvgProps} />

============= */
