;

const OurServices = () => {
    return (
        <div className="px-6 md:px-20 my-30" id="services">
            <h2 className="text-6xl sansita-black-italic text-center mb-6">Our Services</h2>
            <div className="grid md:grid-cols-12 gap-5">
                <div className="bg-[#161C28] rounded-xl text-white col-span-12 md:col-span-4 flex flex-col justify-center items-start p-5 gap-5">
                    <h2 className="text-5xl sansita-regular-italic">All Brands</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, at quidem? Nam alias nemo iure vel quae eligendi suscipit, excepturi rem reprehenderit voluptas dolorum ut voluptates autem iusto eos molestiae praesentium, ad maiores perspiciatis odio. Placeat eligendi ea incidunt debitis amet nobis odit nesciunt eum dignissimos! Quos officia tempora soluta!</p>
                    <button className="text-3xl">
                        Learn More
                    </button>
                </div>
                <div className="bg-blue-400  rounded-xl col-span-12 md:col-span-8">
                    <img className="w-full h-96 rounded-xl object-cover" src="/seat.jpg" alt="Seat" />
                </div>
                <div className="bg-green-400 rounded-xl col-span-12 md:col-span-8">
                    <img className="w-full h-96 rounded-xl object-cover" src="/handle.jpg" alt="Handle" />
                </div>
                <div className="bg-[#161C28] rounded-xl text-white col-span-12 md:col-span-4 flex flex-col justify-center items-start p-5 gap-5">
                    <h2 className="text-5xl sansita-regular-italic">All Brands</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloremque, molestias quam illo eos modi. Natus laudantium sit molestiae reprehenderit provident impedit voluptates consequuntur corrupti deserunt facilis, et esse sint blanditiis rem officia perferendis nemo ea magni delectus aperiam ipsum suscipit aliquam? Enim ipsum ullam praesentium explicabo, nemo voluptas pariatur?</p>
                    <button className="text-3xl">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurServices;