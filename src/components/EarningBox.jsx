import { useEffect, useState } from 'react'
import { useContractRead, useAccount } from 'wagmi'
import { ContractStaking } from '../constant/ContractStaking'
import { formatUnits } from 'viem'

function EarningBox(){
    const { address } = useAccount()
    const [earnBalance, setearnBalance] = useState(null)

    const { isLoading, isSuccess, data } = useContractRead({
        address: "0x4c287d39d0faec45e758a27cea57ce1bf272d6c4",
        abi: ContractStaking,
        functionName: "calculateReward",
        args: [ address ],
        watch: true,
    })

    const dataBalance = data
    const decimals = 18
    const balanceNow = formatUnits(dataBalance, decimals).slice(0, 18)

    useEffect(() => {
        if (isSuccess && balanceNow) {
            const balValue = balanceNow.toString() ?? null
            setearnBalance(balValue)
        } else {
            setearnBalance(null)
        }
    }, [isSuccess, balanceNow])

    return(
        <>
            <div className="grid grid-cols-6 gap-4 mt-5 drop-shadow-md mb-5 mx-auto">
                <div className="col-start-2 col-span-4 container">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5">
                        
                        {/* Isinya */}
                        <div className="text-center">
                            <div className="text-lg sm:text-xl font-semibold text-green-400">Earning</div>
                            <p className="mt-2 sm:mt-3 text-2xl sm:text-2xl font-bold text-green-500">{isLoading ? 'Loading...' : earnBalance ?? 'Data unavailable'} AGRA</p>
                        </div>
                        <div className="text-center gap-5 pt-5">
                            <button type="button" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-3">
                                Claim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EarningBox