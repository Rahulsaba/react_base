import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { store } from '@/redux/store/store'
import { Provider } from 'react-redux'
import router from "@/routing/createRouting";
import { Loader } from "@/path";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<div className="min-h-screen flex_main"> <Loader /></div>}>
      {/* fallbackElement */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);




