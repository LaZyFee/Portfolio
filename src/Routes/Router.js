import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ReactProjects from "./Pages/Project/ReactProjects";
import FullStackProjects from "./Pages/Project/FullStackProjects";
import NodeProjects from "./Pages/Project/NodeProjects";
import JsDOM from "./Pages/Project/JsDom";
import Project from "./Pages/Project/Project";
import Home from "./Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "projects",
                element: <Project />,
                children: [
                    {
                        path: "",
                        element: <FullStackProjects />
                    },
                    {
                        path: "react",
                        element: <ReactProjects />
                    },
                    {
                        path: "node",
                        element: <NodeProjects />
                    },
                    {
                        path: "js-dom",
                        element: <JsDOM />
                    }
                ]
            }
        ]
    }
]);