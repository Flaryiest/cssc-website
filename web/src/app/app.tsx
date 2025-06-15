import { RouterProvider } from "react-router-dom";
import Router from "@app/router";
import AppProvider from "@app/provider";
export default function App() {
    return (
        <AppProvider value={{ isAuthenticated: false, theme: 'light' }}>
            <RouterProvider router={Router} />
        </AppProvider>

    )
}