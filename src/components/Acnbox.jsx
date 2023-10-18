function AcnBox(){
    return(
        <div className="flex items-center justify-center pt-8">
            <div className="relative inline-block flex flex-col items-center">
                <img className="inline-block h-[3.875rem] w-[3.875rem] rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="hex-image" />
                <div className="mt-3 text-center">
                    <h3 className="font-semibold text-gray-800 dark:text-white">Your account</h3>
                    <p className="text-sm font-medium text-gray-400">0x000000000000000000000000000</p>
                </div>
            </div>
        </div>
    )
}

export default AcnBox