import AcnBox from "./Acnbox"
function BoxApp(){
    return(
        <>
        <AcnBox />
        
        <div className="grid grid-cols-6 gap-4 mt-5 drop-shadow-md mb-5 mx-auto">
            <div className="col-start-2 col-span-4 container">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5">
                    
                    {/* Isinya */}
                    <div className="text-center">
                        <div className="text-lg sm:text-xl font-semibold text-green-400">Balance</div>
                        <p className="mt-2 sm:mt-3 text-2xl sm:text-2xl font-bold text-green-500">5000.00000000 UTF</p>
                    </div>
                    <div className="text-center gap-5 pt-5">
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-3">
                            Stake
                        </button>
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-3">
                            Unstake
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div className="grid grid-cols-6 gap-4 mt-5 drop-shadow-md mb-5 mx-auto">
            <div className="col-start-2 col-span-4 container">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5">
                    
                    {/* Isinya */}
                    <div className="text-center">
                        <div className="text-lg sm:text-xl font-semibold text-green-400">Earning</div>
                        <p className="mt-2 sm:mt-3 text-2xl sm:text-2xl font-bold text-green-500">200.85335716 UTF</p>
                    </div>
                    <div className="text-center gap-5 pt-5">
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-3">
                            Claim
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-6 gap-4 mt-5 drop-shadow-md mb-5 mx-auto">
            <div className="col-start-2 col-span-4 container">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5">
                    
                    {/* Isinya */}
                    <div className="text-center">
                        <div className="text-lg sm:text-xl font-semibold text-green-400">Total undelegate</div>
                        <p className="mt-2 sm:mt-3 text-2xl sm:text-2xl font-bold text-green-500">200.00000000 UTF</p>
                    </div>
                    <div className="text-center gap-5 pt-5">
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-3">
                            Withdraw
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BoxApp