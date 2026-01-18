import { useLoaderData, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CarDetails = () => {
    const car = useLoaderData(); // now a SINGLE car
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 px-4 md:px-10 py-10">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 mb-6 text-blue-600 hover:underline"
            >
                <ArrowLeft size={18} />
                Back
            </button>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <img
                    src={car.photoUrl}
                    alt={car.title}
                    className="w-full h-full object-cover"
                />

                <div className="p-6 space-y-3">
                    <h2 className="text-3xl font-bold">{car.title}</h2>
                    <p><b>Brand:</b> {car.brand}</p>
                    <p><b>Model:</b> {car.model}</p>
                    <p><b>Year:</b> {car.year}</p>
                    <p><b>Type:</b> {car.carType}</p>
                    <p><b>Fuel:</b> {car.fuelType}</p>
                    <p><b>Color:</b> {car.color}</p>

                    <p className="text-2xl font-bold text-blue-600">
                        ৳ {car.price.toLocaleString()}
                    </p>

                    <p className={car.status === "Available" ? "text-green-600" : "text-red-600"}>
                        {car.status}
                    </p>

                    <p className="pt-3">{car.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
