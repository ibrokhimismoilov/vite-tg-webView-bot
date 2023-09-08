const tg = globalThis?.Telegram?.WebApp;
import { Suspense, useEffect } from "react";
import { ConfigProvider } from "antd";
import locale from "antd/locale/ru_RU";

import { PageLoader } from "@/components/Containers";
import CommonInfoProvider from "@/context/commonInfo";
import { globalConfig } from "@/components/AntComponents";

// import AllRoutes from "@/Routes";
// import { useQuery } from "@tanstack/react-query";
// import { authRequest } from "@/services/api";
// import { get } from "lodash";
// import { setGroupId, setLogout, setUser } from "@/store/auth";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
	useEffect(() => {}, []);
	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	// const user = useSelector((state) => get(state, "auth.user"));
	// const token = useSelector((state) => get(state, "auth.token")) || localStorage.getItem("token");

	// useQuery(["getUser", token, user], () => authRequest(`${import.meta.env.VITE_API_AUTH}/getUser`, { headers: { Authorization: "Bearer " + token } }), {
	// 	enabled: !user && !!token,
	// 	retry: 1,
	// 	onSuccess: (res: any) => {
	// 		if (get(res, "status") === 200 && get(res, "data")) {
	// 			dispatch(setLogout());
	// 			dispatch(setUser(get(res, "data")));
	// 			dispatch(setGroupId("0"));
	// 		}
	// 	},
	// 	onError: (err) => {
	// 		message.error(get(err, "message"));
	// 		localStorage.removeItem("token");
	// 		dispatch(setGroupId("0"));
	// 		dispatch(setLogout());
	// 		navigate("/login");
	// 	}
	// });

	return (
		<CommonInfoProvider>
			<ConfigProvider theme={globalConfig} locale={locale}>
				<Suspense fallback={<PageLoader />}>
					<Home tg={tg} />
					{/* <AllRoutes /> */}
				</Suspense>
			</ConfigProvider>
		</CommonInfoProvider>
	);
}

export default App;
