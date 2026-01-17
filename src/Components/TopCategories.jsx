

const TopCategories = () => {
    const categoryNames = [
        "In stock",
        "Used Cars",
        "Any Models",
        "Any Motors",
        "All Prices"
    ];
    return (
        <div className="px-6 md:px-20 my-30">
            <div className="justify-items-center border-b-2 border-gray-300">
                <h2 className="text-6xl sansita-black-italic text-center mb-6">Top Categories</h2>
                <div className="text-lg md:text-xl flex gap-2 md:gap-5 ">
                    {
                        categoryNames.map((name, index) => (
                            <span key={index} className="pb-4 border-b-4 border-transparent hover:border-blue-600 transition duration-300 cursor-pointer">{name}</span>
                        ))
                    }
                </div>
            </div>

            <div className="mt-10 relative">
                <div className="absolute text-white md:top-1/5 p-3 md:p-10">
                    <h1 className="md:text-4xl text-white sansita-bold-italic mb-2 md:mb-4">Rolls Royce Wraith</h1>
                    <button className="border rounded-md bg-brand px-2 py-1 md:px-4 md:py-2 md:mt-4 hover:bg-brand-dark cursor-pointer hover:bg-white hover:text-black">
                        Learn More
                    </button>
                </div>
                <img className="w-full" src="/public/rolls_royce.png" alt="Rolls Royce" />
            </div>
        </div>
    );
};

export default TopCategories;