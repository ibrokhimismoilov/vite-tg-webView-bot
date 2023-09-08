import dayjs from "dayjs";

export enum CurrDate {
	MONTH = dayjs().month() + 1,
	YEAR = dayjs().year(),
	DAY = dayjs().day()
}

export const PI = 3.14159265359 as const;

export const pageSizesOptions = [
	{ id: 1, value: "10", label: "10" },
	{ id: 2, value: "20", label: "20" },
	{ id: 3, value: "50", label: "50" },
	{ id: 4, value: "100", label: "100" }
];

export const DEFAULT_PAGE_SIZE = "10";

export const DATE_FORMAT = "DD.MM.YYYY";
export const DATE_TIME_FORMAT = "mm.HH.DD.MM.YYYY";
export const DATE_TIME_FORMAT_UI = "DD.MM.YYYY HH:mm:ss";

export const TIN_LENGTH = 9 as const,
	PINFL_LENGTH = 14 as const,
	TOKEN_LENGTH = 32 as const,
	TICKET_LENGTH = 32 as const;

export const MILLIARD = 1e9 as const,
	MILLION = 1e6 as const,
	MILLE = 1e3 as const;

export const ROLES = {
	SUPER_ADMIN: "SUPER_ADMIN",
	USER: "USER"
} as const;

export const getCurrentUserRole = (_role?: number | null) => {
	if (_role === 1) return ROLES.SUPER_ADMIN;
	else return ROLES.USER;
};
