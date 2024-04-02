export default function Pricing() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                {/* <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Our Pricing
                    </p>
                </div> */}
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto" data-aos="zoom-y-out"   >
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative" >Transparent</span>
                    </span>{' '}
                    pricing. Pay as you grow.
                </h2>
                <p className="text-base text-gray-700 md:text-lg" data-aos="zoom-y-out" data-aos-delay="160">
                Benefit from clear and flexible pricing as your business expands. Experience hassle-free shift management tailored to your needs.
                </p>
            </div>
            <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto" data-aos="zoom-in-left" data-aos-delay="200">
                <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                    <div className="text-center">
                        <div className="text-lg font-semibold">Gold</div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="mr-1 text-5xl font-bold">$15</div>
                            <div className="text-gray-700">/ mo</div>
                        </div>
                    </div>
                    <div className="mt-2 space-y-3">
                        <p className="mb-2 font-bold tracking-wide">Features</p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">
                                    Shift swapping
                                </p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">Employee self-service portal</p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">Time off requests</p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">Team messaging and notifications</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded shadow-md hover:bg-green-550 focus:shadow-outline focus:outline-none"
                        >
                            Start with less
                        </a>
                        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                            A cost-effective solution for basic shift management needs.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-green-550" data-aos="zoom-in" data-aos-delay="200">
                    <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                        <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-green-550">
                            Most Popular
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-semibold">Silver</div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="mr-1 text-5xl font-bold">$38</div>
                            <div className="text-gray-700">/ mo</div>
                        </div>
                    </div>
                    <div className="mt-2 space-y-3">
                        <p className="mb-2 font-bold tracking-wide">Features</p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">
                                    Every Gold Features
                                </p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">Manager logbook</p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">Labor optimization and alerts</p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">SSL Certificates</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-m  bg-green-550 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        >
                            Buy Pro
                        </a>
                        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                            Enhanced features for more comprehensive employee management.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow" data-aos="zoom-in-right" data-aos-delay="200">
                    <div className="text-center">
                        <div className="text-lg font-semibold">Platinum</div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="mr-1 text-5xl font-bold">Check</div>
                            <div className="text-gray-700">/ Pricing</div>
                        </div>
                        {/* <div className="mt-2 space-y-3">
                            <div className="text-gray-700">500 GB of storage</div>
                            <div className="text-gray-700">Unlimited domains</div>
                            <div className="text-gray-700">24/7 Support</div>
                        </div> */}
                    </div>
                    <div className="mt-2 space-y-3">
                        <p className="mb-2 font-bold tracking-wide">Features</p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">
                                    Every Silver Features
                                </p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">POS integration</p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">Real-time sales reporting</p>
                            </li>
                            <li className="flex items-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-4 h-4 text-green-550"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLidth="2"
                                    >
                                        <polyline
                                            fill="none"
                                            stroke="currentColor"
                                            points="6,12 10,16 18,8"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            fill="none"
                                            r="11"
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-800">Multi-location staffing</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded shadow-md hover:bg-green-550 focus:shadow-outline focus:outline-none"
                        >
                            Buy Business
                        </a>
                        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                            Premium features tailored for businesses with high-volume scheduling and management needs.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}