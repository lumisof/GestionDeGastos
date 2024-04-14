

import usePresupuesto from '../hooks/usePresupuesto'
import CantidadDisplay from './CantidadDisplay'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

//mostrar: 
//cuanto definimos
//cuanto gastamos
//cuanto nos queda

const PresupuestoTracker = () => {
    const { state, totalGastos, presupuestoSobrante } = usePresupuesto()
    const porcentajeGraficoGastos = +((totalGastos / state.presupuesto) * 100).toFixed(2) //2 decimales como mucho


    return (
        <div className='flex flex-col items-center justify-center gap-10 m-5 p-5'>
            <div className='w-3/4  '>
                <CircularProgressbar
                    value={porcentajeGraficoGastos} //cuanto es lo que queres graficar 
                    styles={buildStyles({
                        pathColor: porcentajeGraficoGastos >= 90 ? '#dc2626' : '#509a4d', //como value
                        trailColor: '#CBD5E1', //como sobrante
                        textSize: 6,
                        textColor: porcentajeGraficoGastos >= 90 ? '#dc2626' : '#509a4d'
                    })}
                    text={`${porcentajeGraficoGastos}% Gastado `}
                />
            </div>
            <div className='flex flex-col m-5 gap-2 '>
                <CantidadDisplay
                    label=" Presupuesto"
                    amount={state.presupuesto}
                />
                <CantidadDisplay
                    label=" Disponible"
                    amount={presupuestoSobrante}
                />
                <CantidadDisplay
                    label="Gastado"
                    amount={totalGastos}
                />
            </div>
        </div>
    )
}

export default PresupuestoTracker