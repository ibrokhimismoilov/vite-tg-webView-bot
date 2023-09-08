import { createContext } from "react";

import { IThemeContext } from "./type";

const defaultValue: IThemeContext = {
	state: {
		theme: "light"
	},
	actions: {
		onToggleTheme(e: boolean) {
			console.log(e);
		},
		getClass(c: string) {
			console.log(c);
			return "";
		}
	}
};

const ThemeContext = createContext<IThemeContext>(defaultValue);

export default ThemeContext;
