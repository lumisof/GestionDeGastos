import { useMemo } from 'react';
import usePresupuesto from '../hooks/usePresupuesto';
import GastoDetalle from './GastoDetalle';


export default function TablaGastos() {
    const {state} = usePresupuesto(); // Si tus gastos están en el contexto
    const filtrarPorCategoria = state.categoriaActual ? 
    state.gastos.filter(gasto => gasto.categoria === state.categoriaActual) : state.gastos
    const isEmpty = useMemo(() => filtrarPorCategoria.length === 0, [filtrarPorCategoria]) //hook useMemo para q solo se ejecute cuando cambien los gastos
    
    return (
        <div className='mt-10'>
            {isEmpty ? <p> • No hay gastos registrados todavia</p> : (
                <>
                <p className='text-gray-600 text-2xl font-bold my-5'>Listado de Gastos</p>
                {filtrarPorCategoria.map( gasto => (
                    <GastoDetalle
                    key={gasto.id}
                    gasto={gasto}
                    />
                )) }
                </>
            )}
        
        </div>
    )
}