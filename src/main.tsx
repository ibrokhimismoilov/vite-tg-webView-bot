import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { ErrorBoundary } from "@/components/shared";
import { queryClient } from "@/services/api";
import store from "@/store";
import App from "./App.tsx";

// styles
import "@/assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ErrorBoundary>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<App />
				</Provider>
				<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
			</QueryClientProvider>
		</BrowserRouter>
	</ErrorBoundary>
);

{
	/* <React.StrictMode>
		<App />
	</React.StrictMode> */
}
