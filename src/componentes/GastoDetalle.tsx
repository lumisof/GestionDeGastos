import { useMemo } from 'react'
import { categorias } from '../data/categorias'
import { Gasto } from '../types'
import { formatDate } from '../utils'
import CantidadDisplay from './CantidadDisplay'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import usePresupuesto from '../hooks/usePresupuesto'

type GastoDetalleProps = {
    gasto: Gasto
}
const GastoDetalle = ({ gasto }: GastoDetalleProps) => {

    const categoriaInfo = useMemo(() => categorias.filter(cat => cat.id === gasto.categoria)[0], [gasto]) //me traigo la info de categoria x id
    const { dispatch } = usePresupuesto()
    return (
        <div className='bg-white shadow-lg p-5 w-full border-b border-gray-200 flex gap-5 items-center'>

            <div>
                <img
                    src={`/icono_${categoriaInfo.icon}.svg`}
                    alt='icono categoria gasto'
                    className='w-20'
                />
            </div>
            <div className='flex-1 space-y-2'>
                <p className='text-sm font-bold text-slate-500'>{categoriaInfo.name} </p>
                <p>{gasto.gastoName} </p>
                <p className='text-slate-600 text-sm'>{formatDate(gasto.date!.toString())} </p> {/* ! garantiza q va a existir ese valor */}
            </div>
            <CantidadDisplay
                amount={gasto.amount}
            />
            <DeleteForeverOutlinedIcon
                className="text-red-500 cursor-pointer"
                onClick={() => dispatch({ type: 'remove-gasto', payload: { id: gasto.id } })}
            />
        </div>
    )
}

export default GastoDetalle