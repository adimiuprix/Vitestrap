import { parseEther } from 'viem'
import { useContractWrite, erc20ABI } from 'wagmi'
import { ContractStaking } from '../constant/ContractStaking'

function ActionBox(){
    const { write: approveWrite } = useContractWrite({
        address: '0xCd43dC81ebbe592Be94C67AB8A09420ecB0fB6Aa',  // Address token nya
        abi: erc20ABI,
        functionName: "approve",
        args: [ '0x4c287d39d0faEc45E758a27cea57CE1BF272d6c4', (parseEther('100')) ],  // Izinkan alamat spender dan masukkan nilai
		
        //  Jika berhasil jalankan fungsi kedua yang bernama deposits
        onSuccess() {
			setTimeout( () => {
				stake?.()
			}, 7000 );
		},
    })

    // Jalankan fungsi deposits seperti biasanya
	const { write: stake } = useContractWrite( {
		address: '0x4c287d39d0faEc45E758a27cea57CE1BF272d6c4',
		abi: ContractStaking,
		functionName: "stake",
		 args: [ (parseEther('100')) ],  //  Masukkan argument nya
		onSuccess( data ) {
			console.log( data )
		},
	})
    
    return(
        <>
            <div className="text-center gap-5 pt-5">
                <button type="button" onClick={() => approveWrite?.()} className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 m-3">
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