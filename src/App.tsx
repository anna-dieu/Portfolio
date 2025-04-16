// filepath: c:\Users\admin\Desktop\CST\Portfolio\src\App.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet /> {/* Renders the current page */}
            </main>
            <Footer /> {/* Footer appears on all pages */}
        </div>
    );
};

export default App;