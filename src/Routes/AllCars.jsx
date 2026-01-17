import { useLoaderData } from "react-router-dom";
import CarCard from "../Components/CarCard";

const AllCars = () => {
    const cars = useLoaderData();

    // Optional handlers
    const handleDetails = (car) => {
        console.log("View details:", car);
        // Navigate to single car page
    };

    const handleEdit = (car) => {
        console.log("Edit car:", car);
        // Navigate to edit form
    };

    const handleDelete = (car) => {
        console.log("Delete car:", car);
        // Call API to delete car
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">All Cars</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cars.map((car) => (
                    <CarCard
                        key={car._id || car.title} 
                        car={car}
                        onDetails={handleDetails}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllCars;
