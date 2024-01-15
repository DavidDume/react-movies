import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"
import Boomarks from "./components/Boomarks.tsx"
import Home from "./components/Home.tsx"

import { GlobalStateProvider } from "./context/GlobalStateContext"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/bookmarks",
                element: <Boomarks />,
            },
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStateProvider>
            <RouterProvider router={router} />
        </GlobalStateProvider>
    </React.StrictMode>
)
