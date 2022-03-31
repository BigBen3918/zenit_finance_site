import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import PrivateRoute from "./components/privateRoute";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

// Pages
/* --- Need Auth --- */
import Main from "./pages/main";

/* --- No Auth --- */
import FirstPage from "./pages/firstpage";
import NotFound from "./pages/notfound";

export default function Routing() {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <Routes>
                    {/* Private Routes */}
                    <Route
                        path="/dashboard"
                        element={<PrivateRoute component={Main} />}
                    />

                    {/* Normal Routes */}
                    <Route path="/" element={<FirstPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}
