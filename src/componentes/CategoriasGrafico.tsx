

import usePresupuesto from '../hooks/usePresupuesto'
import { Nested } from '@alptugidin/react-circular-progress-bar'
import "react-circular-progressbar/dist/styles.css"
import { categorias } from '../data/categorias'
import { useEffect } from 'react'


const CategoriasGrafico = () => {
    const { state, dispatch } = usePresupuesto()

    useEffect(() => {
        // llamar acción que recalcula los porcentajes
        dispatch({ type: 'porcentajes-por-categoria', payload: { gastos: state.gastos, presupuesto: state.presupuesto } });
    }, [state.gastos, state.presupuesto, dispatch]);
    // Usar los porcentajes pre-calculados en el estado para mostrar en el gráfico
    const circles = categorias.map(categoria => {
        const porcentaje = state.porcentajesPorCategoria[categoria.id] || 0;
        return {
            text: categoria.name,
            value: porcentaje,
            color: categoria.color || '#08c8e1'
        };
    });

    console.log(circles);

    return (
        <div className=' mt-10'>
            <div className='flex flex-col justify-center items-center'>
                <p>
                    Categorias consumidas
                </p>
            </div>
            <div className='m-4'>
                <Nested
                    circles={circles}
                    sx={{
                        bgColor: '#cbd5e1'
                    }}
                />
            </div>
        </div>
    )
}

export default CategoriasGrafico