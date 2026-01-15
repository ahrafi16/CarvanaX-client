
const FeatureCars = () => {
    const featureCars = [
        {
            "id": 1,
            "name": "Sedan",
            "icon": "../../public/car_logo (1).png"
        },
        {
            "id": 2,
            "name": "Cabriolet",
            "icon": "../../public/car_logo (2).png"
        },
        {
            "id": 3,
            "name": "Coupe",
            "icon": "../../public/car_logo (3).png"
        },
        {
            "id": 4,
            "name": "SUV",
            "icon": "../../public/car_logo (4).png"
        },
        {
            "id": 5,
            "name": "Micro",
            "icon": "../../public/car_logo (5).png"
        },
    ];
    return (
        <div className="grid gap-1 md:gap-10 grid-cols-5 px-6 md:px-20 my-30">
            {
                featureCars.map(car => (
                    <div key={car.id} className="flex justify-between border-2 rounded-xl border-gray-300 flex-col items-center p-3">
                        <img src={car.icon} alt={car.name} className="mb-2" />
                        <span className="text-gray-600 md:text-xl font-semibold">{car.name}</span>
                    </div>
                ))
            }

        </div>
    );
};

export default FeatureCars;