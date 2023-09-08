import { NumericFormat } from "react-number-format";

type PropsType = {
	num?: any;
	toFixedNum?: number;
};

const FormatNumberFixed = ({ num = 0, toFixedNum = 1 }: PropsType) => {
	const n = parseFloat(num);
	return <NumericFormat thousandSeparator=" " displayType="text" value={n ? n.toFixed(toFixedNum) : 0?.toFixed(toFixedNum)} />;
};

export default FormatNumberFixed;
