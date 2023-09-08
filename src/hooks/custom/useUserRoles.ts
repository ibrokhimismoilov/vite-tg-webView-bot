import { get } from "lodash";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { ROLES, getCurrentUserRole } from "@/constants/general";

const useUserRoles = () => {
	const user = useSelector((state) => get(state, "auth.user"));
	const token = useSelector((state) => get(state, "auth.token"));

	// roles
	const ROLE = useMemo(() => getCurrentUserRole(get(user, "isAdmin")), [user]);
	const isUser = useMemo(() => ROLE === ROLES.USER, [ROLE]);
	const isSuperAdmin = useMemo(() => ROLE === ROLES.SUPER_ADMIN, [ROLE]);

	return { isSuperAdmin, isUser, user, token };
};

export default useUserRoles;
