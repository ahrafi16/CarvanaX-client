import { Eye, Edit, Trash2 } from "lucide-react";
import { useAuth } from "./Authcontext";

const CarCard = ({ car, onDetails, onEdit, onDelete }) => {
    const { isAdmin } = useAuth();
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-500 flex flex-col transition-transform hover:scale-105">
            {/* Car Image */}
            <img
                src={car.photoUrl}
                alt={car.title}
                className="w-full h-48 object-cover"
            />

            {/* Car Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{car.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{car.brand} - {car.model} ({car.year})</p>
                    <p className="text-sm text-gray-500 mt-1">Type: {car.carType}</p>
                    <p className="text-sm text-gray-500 mt-1">Fuel: {car.fuelType} | Color: {car.color}</p>
                    <p className="text-lg font-bold text-blue-600 mt-2">৳ {car.price.toLocaleString()}</p>
                    <p className={`mt-1 font-medium ${car.status === "Available" ? "text-green-600" : "text-red-600"}`}>
                        {car.status}
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                    <button
                        onClick={() => onDetails(car)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4   rounded-lg border cursor-pointer hover:border-blue-700 hover:text-blue-700 transition"
                    >
                        <Eye size={16} />
                        Details
                    </button>
                    {
                        isAdmin && (
                            <>
                                <button
                                    onClick={() => onEdit(car)}
                                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4  rounded-lg border cursor-pointer hover:border-yellow-600 hover:text-yellow-600 transition"
                                >
                                    <Edit size={16} />
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(car)}
                                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border cursor-pointer rounded-lg hover:border-red-700 hover:text-red-700 transition"
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>
                            </>
                        )
                    }
                </div>
            </div>

            {/* Description */}
            <div className="p-4 border-t text-sm text-gray-600">
                {car.description.length > 60
                    ? car.description.slice(0, 60) + "..."
                    : car.description}
            </div>
        </div>
    );
};

export default CarCard;
