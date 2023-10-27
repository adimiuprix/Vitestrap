import { useEffect, useState } from 'react'
import { useContractRead, useAccount } from 'wagmi'
import { formatUnits } from 'viem'
import { ContractStaking } from '../constant/ContractStaking'
import ActionBox from '../components/ActionBox'

function BalanceBox() {
    const { address } = useAccount()

    const [Balance, setBalance] = useState(null)

    const { isLoading, isSuccess, data } = useContractRead({
        address: "0x4c287d39d0faec45e758a27cea57ce1bf272d6c4",
        abi: ContractStaking,
        functionName: "stakedBalance",
        args: [ address ],
        watch: true,
    })

    useEffect(() => {
        if (isSuccess && data) {
            const BalanceValue = formatUnits(data.toString(), 18) ?? null
            setBalance(BalanceValue)
        } else {
            setBalance(null)
        }
    }, [isSuccess, data])

    return (
        <div className="grid grid-cols-6 gap-4 mt-5 drop-shadow-md mb-5 mx-auto">
            <div className="col-start-2 col-span-4 container">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5">
                    <div className="text-center">
                        <div className="text-lg sm:text-xl font-semibold text-green-400">Balance</div>
                        <p className="mt-2 sm:mt-3 text-2xl sm:text-2xl font-bold text-green-500">{isLoading ? 'Loading...' : Balance ?? '0'} AGRA</p>
                    </div>
                    <ActionBox />
                </div>
            </div>
        </div>
    )
}

export default BalanceBox