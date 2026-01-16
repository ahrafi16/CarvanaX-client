import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "./Footer";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;