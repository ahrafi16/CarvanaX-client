const AddCar = () => {
    const handleAddCar = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCar = Object.fromEntries(formData.entries());

        // send data to the db
        fetch('http://localhost:3000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Car added successfully');
                    form.reset();
                }
            })

    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-30">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 md:p-10">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Add New Car
                </h2>

                <form onSubmit={handleAddCar} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Car Title */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Car Title / Name</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Toyota Corolla 2022"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Brand</label>
                        <input
                            type="text"
                            name="brand"
                            placeholder="Toyota"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Model */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Model</label>
                        <input
                            type="text"
                            name="model"
                            placeholder="Corolla"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Year */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Year</label>
                        <input
                            type="number"
                            name="year"
                            placeholder="2022"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Car Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Car Type</label>
                        <select
                            name="carType"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Coupe">Coupe</option>
                        </select>
                    </div>

                    {/* Condition */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Condition</label>
                        <select
                            name="condition"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                        </select>
                    </div>

                    {/* Fuel Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Fuel Type</label>
                        <select
                            name="fuelType"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Electric">Electric</option>
                        </select>
                    </div>

                    {/* Color */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Color</label>
                        <input
                            type="text"
                            name="color"
                            placeholder="White"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="1500000"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Availability Status</label>
                        <select
                            name="status"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Available">Available</option>
                            <option value="Sold">Sold</option>
                        </select>
                    </div>

                    {/* Photo URL */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            name="photoUrl"
                            placeholder="https://example.com/car.jpg"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            placeholder="Write car details..."
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Add Car
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
