
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="flex relative items-center justify-between px-6 md:px-20"
            style={{
                backgroundImage: `url(/banner_bg.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "85vh",
            }}
        >
            <div className="space-y-3 md:space-y-5 text-white">
                <h1 className="text-4xl md:text-7xl sansita-black">Find Your <br />
                    Dream Car</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>

                <Link
                    to="/allcars"
                    className="inline-block border rounded-md bg-brand px-4 py-2 md:mt-4 cursor-pointer hover:bg-white hover:text-black"
                >
                    View Cars
                </Link>


            </div>
            <img
                src="/banner_car.png"
                alt="Banner Car"
                className="absolute md:w-2/3 -bottom-30 right-5 md:right-15"
            />
        </div>
    );
};

export default Banner;
