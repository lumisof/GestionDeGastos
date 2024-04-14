import { formatCurrency } from "../utils"

type CantidadDisplayProps = {
    label?: string
    amount: number
}
const CantidadDisplay = ({label, amount}:CantidadDisplayProps) => {
  return (
    <p className='text-1xl text-violet-600 font-bold'>
        {label && `${label}: `}
        <span className='font-black text-gray-800'>{formatCurrency(amount)} </span>
    </p>
  )
}

export default CantidadDisplay