import { FC } from "react";

import AntButton from "../AntButton";
import "./Style.scss";
import { Modal, ModalProps, Row, Space, Typography } from "antd";

interface buttonProps {
	title: string;
	shape?: string | any;
	type?: string | any;
}

type Props = ModalProps & {
	width?: number;
	title?: string;
	buttons?: buttonProps[];
};

const { Title } = Typography;

const AntModal: FC<Props> = ({ width = 960, title, children, buttons, ...props }) => {
	return (
		<Modal width={width} footer={null} {...props}>
			<Title level={2}>{title}</Title>
			{children}
			{buttons && (
				<Row justify="center" style={{ marginTop: 40 }}>
					<Space>
						{buttons?.map(({ title, shape, type }, key) => (
							<AntButton key={key} size="large" shape={shape} type={type}>
								{title}
							</AntButton>
						))}
					</Space>
				</Row>
			)}
		</Modal>
	);
};

export type { ModalProps };

export default AntModal;
