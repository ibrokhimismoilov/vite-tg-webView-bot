import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { authState } from "./auth";
import { commonState } from "./common";
import { generalFilterState } from "./generalFilter";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// import { persistReducer, persistStore } from "redux-persist"
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
// import storage from "redux-persist/lib/storage"

// const generalFilterPersistConfig = {
//     key: "generalFilterState",
//     storage,
//     autoMergeLevel2
// }
// const commonPersistConfig = {
//     key: "common",
//     storage,
//     autoMergeLevel2
// }
// const authPersistConfig = {
//     key: "auth",
//     storage,
//     autoMergeLevel2
// }

// const generalFilterPersistReducer = persistReducer(generalFilterPersistConfig, generalFilterState);
// const commonPersistReducer = persistReducer(commonPersistConfig, commonState);
// const authPersistReducer = persistReducer(authPersistConfig, authState);

// const rootReducer = combineReducers({
// 	generalFilterState: generalFilterPersistReducer,
// 	commonState: commonPersistReducer,
// 	auth: authPersistReducer
// });

const rootReducer = combineReducers({
	generalFilterState,
	common: commonState,
	auth: authState
});

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger)
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const persistor = persistStore(store);

export default store;
