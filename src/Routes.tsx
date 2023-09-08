import { lazy } from "react";
import { get } from "lodash";
import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";

import { Layout } from "@/components";
import { NotFound, PageLoader } from "@/components/Containers";

// Public Routes
const Login = lazy(() => import("@/pages/Auth/Login"));

// Private Routes
const Home = lazy(() => import("@/pages/Home"));

export default function AllRoutes() {
	const user = useSelector((state) => get(state, "auth.user"));
	const token = useSelector((state) => get(state, "auth.token"));

	const privateRoutes = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/login",
					element: <Navigate to={"/"} />
				},
				{
					index: true,
					path: "/",
					element: <Home />
				},
				{
					path: "*",
					element: <NotFound />
				}
			]
		}
	]);

	const ghostRoutes = useRoutes([
		{
			path: "*",
			element: !token ? <Navigate to="/login" /> : <PageLoader />
		},
		{
			path: "/login",
			element: <Login />
		}
	]);

	return user ? privateRoutes : ghostRoutes;
}
