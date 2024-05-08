import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { createRoot } from "react-dom/client";
import Main from "./main";
import Aside from "./aside";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Single from './single';
import Basic from './layout/basic';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-8">
                        <Main></Main>
                    </div>
                    <div className="col-md-4">
                        <Aside></Aside>
                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
/*import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";


const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header>
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-md-8">
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <Footer></Footer>
    </StrictMode>
);*/