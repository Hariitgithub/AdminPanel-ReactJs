import { configureStore } from "@reduxjs/toolkit";
import alertMessage from "../slice/alertMessage";
import { api } from "../api/api";
import { rtkQueryErrorLogger } from "../slice/errorLogger";

//

const store = configureStore({
  reducer: {
    alertMessage: alertMessage,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, rtkQueryErrorLogger),
});

export default store;
