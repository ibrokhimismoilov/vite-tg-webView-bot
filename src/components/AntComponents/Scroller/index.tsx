// eslint-disable-next-line
// @ts-nocheck
import React, { FC, useEffect } from "react";

import { debounce } from "./debounce";
import classes from "./scroll.module.scss";

import Svg from "@/assets/svg";

const scroller = (element: any) => (direction: any) => {
	let scrollEl = document.getElementsByClassName(element);
	let table = scrollEl[0].getElementsByClassName("ant-table-container")[0]?.childNodes;

	if (scrollEl && scrollEl[0] && table) {
		const [header, body] = table;

		if (direction === "right") {
			header.scroll({ behavior: "smooth", left: 0 });
			body?.scroll({ behavior: "smooth", left: 0 });
		}
		if (direction === "left") {
			header.scroll({
				behavior: "smooth",
				left: header?.scrollWidth - Math.abs(header.scrollWidth - header.clientWidth) + header.scrollLeft
			});
			body?.scroll({
				behavior: "smooth",
				left: body?.scrollWidth - Math.abs(body.scrollWidth - body.clientWidth) + body.scrollLeft
			});
		}
	}
};

const element = "ant-table-wrapper";
const scrollTo = scroller(element);

// const SHOW_POINT_PX = 5;

function ScrollerComponent() {
	// const [arrows, setArrows] = useState([0, 0]);

	function manageArrows(firstRight = 0) {
		let el = document.getElementsByClassName(element)[0];
		if (el) {
			// let right = el.scrollWidth - (el.scrollLeft + el.clientWidth) || firstRight;
			// let left = el.scrollLeft;
			// setArrows([right > SHOW_POINT_PX, left > SHOW_POINT_PX]);
		}
	}

	useEffect(() => {
		let [el] = document.getElementsByClassName(element) || [];

		function windowScroll() {
			let r = window.document.getElementsByClassName("right_scroll");
			let l = window.document.getElementsByClassName("left_scroll");
			if (r?.length > 0 && l.length > 0) {
				let left = l[0];
				let right = r[0];
				right.style.marginTop = (window?.pageYOffset - right?.offsetHeight) / 2 + "px";
				left.style.marginTop = (window?.pageYOffset - left?.offsetHeight) / 2 + "px";
			}
		}

		window.addEventListener("scroll", () => {
			debounce(windowScroll, "scroll", 200);
		});

		if (el) {
			manageArrows(20);
			el.addEventListener("scroll", () => {
				debounce(manageArrows, "scrll", 200);
			});
		}

		return () => {
			window.removeEventListener("scroll", windowScroll);
		};
	}, []);

	return (
		<div className={classes["table-scroll"]}>
			<div onMouseOver={() => scrollTo("right")} onClick={() => scrollTo("right")} className={classes["left_scroll"]}>
				<Svg icon="arrow-left" />
			</div>
			<div
				onMouseOver={(e) => {
					scrollTo("left");
				}}
				onClick={(e) => {
					scrollTo("left");
				}}
				className={classes["right_scroll"]}>
				{/* <LeftArrow /> */}
				<Svg icon="arrow-left" />
			</div>
		</div>
	);
}

type Props = {
	tableId?: any;
};

const Scroller: FC<Props> = ({ tableId }) => {
	return (
		<>
			<ScrollerComponent />
		</>
	);
};

export default React.memo(Scroller);
