import Logo from "../../components/Logo";

const Checkout = () => {

    // const dummySavedInfo = [{
    //     username: "email@gmail.com",
    //     cardNumber: 9999 - 8888 - 7777 - 6666,
    //     cardExpiryDate: 10 / 2026,
    //     cvv: 123,
    //     address: "610, dummy street, Opp dummy office",
    //     city: "just city",
    //     state: "just state",
    //     postalCode: 789 - 963,
    // }]

    return (
        <div className="font-mont">
            <header className="py-6">
                <Logo size="text-2xl font-bold tracking-tight" />
            </header>
            {/* <div>
                <h3 className="font-semibold mb-4 text-xl">Saved Address</h3>
                <div className="rounded-md p-4">
                    {dummySavedInfo.map(data => (
                        <div>
                            <p>{dummySavedInfo.username}</p>
                            <p>{dummySavedInfo.cardNumber}</p>
                            <p>{dummySavedInfo.cardExpiryDate}</p>
                            <p>{dummySavedInfo.cvv}</p>
                            <p>{dummySavedInfo.address}</p>
                            <p>{dummySavedInfo.city}, {dummySavedInfo.state} - {dummySavedInfo.postalCode}</p>
                        </div>

                    ))}
                </div>
            </div> */}
            <div className="flex justify-center py-8">
                <main className="w-full max-w-7xl grid lg:grid-cols-2 px-6 lg:px-12 mx-2">
                    {/* Left Section */}
                    <section className="py-6 px-8 bg-[#312E81] rounded-l-lg">
                        <div>
                            <div className="mb-8">
                                <p className="text-sm text-[#A5B4FC]">Amount due</p>
                                <p className="text-2xl font-bold text-white">$232.00</p>
                            </div>
                            <ul>
                                {Array(3).fill().map((_, index) => (
                                    <li key={index} className="flex border-b border-white/10 py-6">
                                        <img
                                            src="https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
                                            alt="Image of a product"
                                            className="h-20 w-20 object-cover flex-shrink-0 bg-white rounded mr-4"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-white font-medium">High Wall Tote</h3>
                                            <p className="text-[#A5B4FC] text-sm">White and black</p>
                                            <p className="text-[#A5B4FC] text-sm">15L</p>
                                        </div>
                                        <p className="text-lg font-semibold text-white">$210.00</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-[#A5B4FC] pt-6">
                                {["Subtotal", "Shipping", "Taxes"].map((label, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2">
                                        <p>{label}</p>
                                        <p>${label === "Subtotal" ? "570.00" : label === "Shipping" ? "25.00" : "47.60"}</p>
                                    </div>
                                ))}
                                <div className="text-white pt-6 mt-6 border-t border-white/10 flex justify-between items-center">
                                    <p className="text-lg font-semibold">Total</p>
                                    <p className="text-xl font-bold">$642.60</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Right Section */}
                    <section className="p-6 lg:p-8 rounded-r-lg border border-slate-400">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <div className="mb-6">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="username"
                                    id="username"
                                    className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
                            <h3 className="text-xl font-semibold col-span-4">Payment Details</h3>
                            <div className="col-span-4">
                                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">
                                    Card number
                                </label>
                                <input
                                    type="number"
                                    name="card-number"
                                    id="card-number"
                                    className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="card-expiry" className="block text-sm font-medium text-gray-700 mb-2">
                                    Expiration Date (MM/YY)
                                </label>
                                <input
                                    type="date"
                                    name="card-expiry"
                                    id="card-expiry"
                                    className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="card-cvv" className="block text-sm font-medium text-gray-700 mb-2">
                                    CVV
                                </label>
                                <input
                                    type="number"
                                    name="card-cvv"
                                    id="card-cvv"
                                    className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <h3 className="text-xl font-semibold col-span-3">Shipping Address</h3>
                            <div className="col-span-3">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                                    State / Province
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-2">
                                    Postal Code
                                </label>
                                <input
                                    type="number"
                                    name="postal-code"
                                    id="postal-code"
                                    className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl font-semibold mb-4">Billing information</h3>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="billing-info" className="accent-primary" />
                                <label htmlFor="billing-info" className="text-sm text-gray-700">
                                    Same as shipping information
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 pt-6 border-t border-black/10">
                            <button className="bg-primary px-6 py-3 text-white font-medium rounded hover:bg-primary-dark">
                                Pay now
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Checkout;
