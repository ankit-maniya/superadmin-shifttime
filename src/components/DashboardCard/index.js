import { BiSolidCoinStack, BiMoney } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

const DashboardCards = () => {
    return (
        <div className="flex flex-wrap -mx-3 removable mt-2">
            <div className="w-full max-w-full px-3 mb-2 md:w-2/4 lg:w-1/4 sm:flex-none xl:mb-0 drop-zone">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border mb-4 draggable" draggable="true">
                    <div className="flex-auto p-4">
                        <div className="flex flex-row -mx-3">
                            <div className="flex-none w-2/3 max-w-full px-3 flex items-center">
                                <div>
                                    <p className="mb-0 font-sans font-semibold leading-normal text-sm">Revenue</p>
                                    <h5 className="mb-0 font-bold"> $53,000 <span className="leading-normal text-sm font-weight-bolder text-lime-500">+4%</span></h5>
                                </div>
                            </div>
                            <div className="px-3 text-right basis-1/3 flex justify-end">
                                <div className="flex w-14 h-14 text-center rounded-lg bg-gradient-to-tl from-green-500 to-lime-500 shadow-soft-2xl justify-center">
                                    <BiSolidCoinStack className="leading-none text-2xl relative top-3.5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-full px-3 mb-2 md:w-2/4 lg:w-1/4 sm:flex-none xl:mb-0 drop-zone">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border mb-4 draggable" draggable="true">
                    <div className="flex-auto p-4">
                        <div className="flex flex-row -mx-3">
                            <div className="flex-none w-2/3 max-w-full px-3 flex items-center">
                                <div>
                                    <p className="mb-0 font-sans font-semibold leading-normal text-sm">Users</p>
                                    <h5 className="mb-0 font-bold">2,300<span className="leading-normal text-sm font-weight-bolder text-lime-500">+3%</span></h5>
                                </div>
                            </div>
                            <div className="px-3 text-right basis-1/3 flex justify-end">
                                <div className="flex w-14 h-14 text-center rounded-lg bg-gradient-to-tl from-green-500 to-lime-500 shadow-soft-2xl justify-center">
                                    <BiWorld className="leading-none text-2xl relative top-3.5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-full px-3 mb-2 md:w-2/4 lg:w-1/4 sm:flex-none xl:mb-0 drop-zone">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border mb-4 draggable" draggable="true">
                    <div className="flex-auto p-4">
                        <div className="flex flex-row -mx-3">
                            <div className="flex-none w-2/3 max-w-full px-3 flex items-center">
                                <div>
                                    <p className="mb-0 font-sans font-semibold leading-normal text-sm">Orders</p>
                                    <h5 className="mb-0 font-bold">4,539<span className="leading-normal text-sm font-weight-bolder text-lime-500">+8%</span></h5>
                                </div>
                            </div>
                            <div className="px-3 text-right basis-1/3 flex justify-end">
                                <div className="flex justify-center w-14 h-14 text-center rounded-lg bg-gradient-to-tl from-green-500 to-lime-500 shadow-soft-2xl">
                                    <BiCart className="leading-none text-2xl relative top-3.5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-full px-3 mb-2 md:w-2/4 lg:w-1/4 sm:flex-none xl:mb-0 drop-zone">
                <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border mb-4 draggable" draggable="true">
                    <div className="flex-auto p-4">
                        <div className="flex flex-row -mx-3">
                            <div className="flex-none w-2/3 max-w-full px-3 flex items-center">
                                <div>
                                    <p className="mb-0 font-sans font-semibold leading-normal text-sm">Subscriptions</p>
                                    <h5 className="mb-0 font-bold">4,539<span className="leading-normal text-sm font-weight-bolder text-lime-500">+8</span></h5>
                                </div>
                            </div>
                            <div className="px-3 text-right basis-1/3 flex justify-end">
                                <div className="flex justify-center w-14 h-14 text-center rounded-lg bg-gradient-to-tl from-green-500 to-lime-500 shadow-soft-2xl">
                                    <BiMoney className="leading-none text-2xl relative top-3.5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCards;
