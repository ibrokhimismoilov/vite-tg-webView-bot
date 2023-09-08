import { Outlet } from "react-router-dom";

import classes from "./Layout.module.scss";

import { Footer, Header, OnlineStatus } from "./components";

import cn from "classnames";

import useUserRoles from "@/hooks/custom/useUserRoles";

const Layout = () => {
	const { user } = useUserRoles();

	return (
		<div className={cn(classes.mainLayout, !user && "auth")}>
			<OnlineStatus />

			{/* {!user && <WebSocketIsConnected />} */}

			<Header isAuth={!user} />

			<main className={classes.mainContent}>
				<Outlet />
			</main>

			<Footer isAuth={!user} />
		</div>
	);
};

export default Layout;
