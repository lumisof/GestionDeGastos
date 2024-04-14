import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { presupuestoReducer, initialState, PresupuestoActions, PresupuestoState } from "./presupuesto-reducer"

//CONTEXT --> acciond e tener el estado global | lo que lo genera
export type PresupuestoContextProps = {
    //los datos que maneja el provider:
    state: PresupuestoState,
    dispatch: Dispatch<PresupuestoActions> ,//generic
    totalGastos:number,
    presupuestoSobrante: number 

}

//PROVIDER --> los datos q va a tener ese context | lo que contiene los datos
type PresupuestoProviderProps = {
    children: ReactNode
}

export const PresupuestoContext = createContext<PresupuestoContextProps>({} as PresupuestoContextProps) //<generic>(as )

//provider --> de donde vienen los datos, acceso al REDUCER y sus funciones: state y dispatch
//para eso 1ro necesitamos crear el context
export const PresupuestoProvider = ({children}:PresupuestoProviderProps) => {
    const [state, dispatch] = useReducer(presupuestoReducer, initialState)
    //calcular lo gastado:
    const totalGastos:number = useMemo(() => state.gastos.reduce((total:number, gasto:{ amount: number }) => gasto.amount + total ,0), [state.gastos])
    const presupuestoSobrante:number = state.presupuesto - totalGastos
    
    return( //conectar las 2 funciones:
        <PresupuestoContext.Provider 
        value={{
        state, 
        dispatch,
        totalGastos,
        presupuestoSobrante
   
        }} > 
            {children}
        </PresupuestoContext.Provider>
    )
}
// objeto value --> agrego lo q voy a querer consumir en los componentes
//children: componentees dentro de un componente padre que no sabemos como se llama pero hacemos referencia con children
//hasta q no pasemos este context envolviendo la app de react no va a servir --> en main.tsx