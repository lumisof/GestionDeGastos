//Context API (estado global) - para evitar pasar via props state o dispatch: useContext
import { useContext } from 'react' 
import { PresupuestoContext } from '../PresupuestoContext'

//hook para usar el useContext con el presupuestoContext dentro sin tener que llamarlo en todos lados, --> importo usePresupuesto directamente en los componentes y hago 2x1
const usePresupuesto = () => {
    const context = useContext(PresupuestoContext)
    //nos asegura tener un context, sino dar error:
    if (!context) {
        throw new Error('usePresupuesto debe usarse por medio de un PresupuestoProvider (envolviendo en el main)')
    }
    return context
}

export default usePresupuesto