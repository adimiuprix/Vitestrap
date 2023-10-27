function ActionBox(){
    return(
        <>
            <div className="text-center gap-5 pt-5">
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-3">
                    Stake
                </button>
                <button type="button" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-3">
                    Unstake
                </button>
            </div>
        </>
    )
}

export default ActionBox