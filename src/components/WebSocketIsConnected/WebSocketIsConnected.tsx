// import { get } from "lodash";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsConnectedWebSocket } from "store/common";
// import { webSocket } from "@/services/api/socket";

const WebSocketIsConnected = () => {
	// const dispatch = useDispatch();
	// const isConnected = useSelector((state) => get(state, "common.isConnectedWebSocket"));

	// useEffect(() => {
	// 	webSocket.onopen = () => (a: any) => {
	// 		console.log("connected", a);
	// 		dispatch(setIsConnectedWebSocket(true));
	// 		console.log("isConnected", isConnected);
	// 	};

	// 	webSocket.onclose = (event: any) => {
	// 		console.log("[Socket close]", event);
	// 		dispatch(setIsConnectedWebSocket(false));
	// 	};

	// 	webSocket.onerror = (error: any) => {
	// 		console.log(`[Socket error]`, error);
	// 		dispatch(setIsConnectedWebSocket(false));
	// 	};
	// }, [webSocket]);

	return null;
};

export default WebSocketIsConnected;
