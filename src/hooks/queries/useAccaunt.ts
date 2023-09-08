import { QueryOptions, useQuery } from "@tanstack/react-query";

import { get } from "lodash";

import { request } from "@/services/api";

// ========================================================================================================
// /accaunt/get-users

interface IAccauntGetUsers {
	groupId?: string;
	enabled?: boolean;
	options?: QueryOptions;
	refetchInterval?: number;
}

export const useAccauntGetUsersQ = ({ groupId, refetchInterval, enabled = true, options = {} }: IAccauntGetUsers) => {
	return useQuery(["/accaunt/get-users", refetchInterval, groupId], () => request.get("/accaunt/get-users"), {
		select: (data: any) => {
			if (groupId && groupId !== "0") return data?.data.filter((item: any) => get(item, "queue") === groupId);
			else return data?.data;
		},
		enabled,
		refetchInterval,
		...options
	});
};
