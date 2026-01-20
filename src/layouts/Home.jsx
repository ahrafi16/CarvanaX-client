import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import FeatureCars from "../Components/FeatureCars";
import OurServices from "../Components/OurServices";
import TopCategories from "../Components/TopCategories";


const Home = () => {
    const cars = useLoaderData();
    console.log("Homer", cars)
    return (
        <div>
            <Banner></Banner>
            <FeatureCars></FeatureCars>
            <TopCategories cars={cars}></TopCategories>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;


