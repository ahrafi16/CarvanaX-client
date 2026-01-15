;

const OurServices = () => {
    return (
        <div className="px-6 md:px-20 my-30">
            <h2 className="text-6xl sansita-black-italic text-center mb-6">Our Services</h2>
            <div className="grid grid-cols-12 gap-5">
                <div className="bg-red-400 col-span-4">
                    1
                </div>
                <div className="bg-blue-400 col-span-8">
                    <img className="w-full" src="../../public/seat.png" alt="Seat"/>
                </div>
                <div className="bg-green-400 col-span-8">
                    <img className="w-full" src="../../public/handle.png" alt="Handle"/>
                </div>
                <div className="bg-yellow-400 col-span-4">
                    4
                </div>
            </div>
        </div>
    );
};

export default OurServices;