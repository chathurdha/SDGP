import React from "react";
export default function OverviewBackground() {

    return (
        <div className="">

            <section className="relative h-80">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/postive-caring-relationships-teachers 1.png')`, opacity: 0.7 }}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Your Header</h1>
                    <p className="text-lg">Your Tagline</p>
                </div>
            </section>

            <section className="py-12 flex justify-center">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4 mx-auto">Upcoming Seminars</h2>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                        <li className="bg-white p-4 flex justify-between items-center shadow-md">
                            <h3 className="text-lg font-semibold">Item Title</h3>
                            <div>
                                <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Button 1</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Button 2</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-12 flex justify-center">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4 mx-auto">Past Seminars</h2>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                        <li className="bg-white p-4 flex justify-between items-center shadow-md">
                            <h3 className="text-lg font-semibold">Item Title</h3>
                            <div>
                                <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Button 1</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Button 2</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-12 bg-gray-100 flex justify-center">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Seminars</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 flex flex-col justify-between shadow-md">
                            <img src="your_image_url.jpg" alt="Card" className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                            <p className="text-gray-600 mb-2">Subtitle</p>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500">Star Rating</span>
                            </div>
                            <p className="text-gray-500">Date</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}