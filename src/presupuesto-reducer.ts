//presupuestos
//gastos --> editarlos o eliminarlos
//reiniciar la app
//filtrar por categoria

import { GastoSinId, Gasto, Categoria } from "./types"
import { v4 as uuidv4 } from 'uuid'

export type PresupuestoActions =
    { type: 'add-presupuesto', payload: { presupuesto: number } } |
    { type: 'add-gasto', payload: { gasto: GastoSinId } } | //el id lo generamos aca en el reducer: crearGasto()
    { type: 'remove-gasto', payload: { id: Gasto['id'] } } |
    { type: 'reset-app' } | //no toma ningun paiload porque solo resetea a 0 y []
    { type: 'add-filtro-categoria', payload: { id: Categoria['id'] } }|
    { type: 'porcentajes-por-categoria', payload: { id: Categoria['id'] } }


export type PresupuestoState = {
    presupuesto: number //state local
    gastos: Gasto[]
    categoriaActual: Categoria['id']
    porcentajesPorCategoria: { [categoriaId: string]: number };
}

const initialPresupuesto = (): number => {
    const localStoragePresupuesto = localStorage.getItem('presupuesto')
    return localStoragePresupuesto ? +localStoragePresupuesto : 0
}
const initialGastos = (): Gasto[] => {
    const localStorageGastos = localStorage.getItem('gastos')
    return localStorageGastos ? JSON.parse(localStorageGastos) : []
}
export const initialState: PresupuestoState = {
    presupuesto: initialPresupuesto(),
    gastos: initialGastos(),
    categoriaActual: '',
    porcentajesPorCategoria: {}
}

// que funciones vamos a tener

const crearGasto = (gastoSinId: GastoSinId): Gasto => { //para que le asigne un id a cada gasto una vez que haya pasado su validacion
    return {
        ...gastoSinId,
        id: uuidv4()
    }
}
interface TotalesPorCategoria {
    [categoriaId: string]: number;
}

interface PorcentajesPorCategoria {
    [categoriaId: string]: number;
}
const calcularPorcentajes = (gastos: Gasto[], presupuesto: number): PorcentajesPorCategoria => {
    console.log('probando calcular porcentajes')
    const totalPorCategoria: TotalesPorCategoria = gastos.reduce((acumulador: TotalesPorCategoria, gasto) => {
        const { categoria, amount } = gasto;
        acumulador[categoria] = (acumulador[categoria] || 0) + amount;
        return acumulador;
    }, {});

    const porcentajes: PorcentajesPorCategoria = {};
    for (const categoriaId in totalPorCategoria) {
        porcentajes[categoriaId] = (totalPorCategoria[categoriaId] / presupuesto) * 100;
    }
    return porcentajes;
};

export const presupuestoReducer = (
    state: PresupuestoState = initialState,
    action: PresupuestoActions
) => {
    if (action.type === 'add-presupuesto') {
        return {
            ...state,
            presupuesto: action.payload.presupuesto,
            porcentajesPorCategoria: calcularPorcentajes(state.gastos, action.payload.presupuesto)
        }
    }
    if (action.type === 'add-gasto') {
        const gasto = crearGasto(action.payload.gasto)
        return {
            ...state,
            gastos: [...state.gastos, gasto], //trae lo q esta y agrega nuevo
            porcentajesPorCategoria: calcularPorcentajes(state.gastos, state.presupuesto)
        }
    }
    if (action.type === 'remove-gasto') {
        return {
            ...state,
            gastos: [...state.gastos.filter(gasto => gasto.id !== action.payload.id)], //trae todo menos ese id
            porcentajesPorCategoria: calcularPorcentajes(state.gastos, state.presupuesto)
        }
    }
    if (action.type === 'reset-app') {
        return {
            presupuesto: 0,
            gastos: [],
            porcentajesPorCategoria: {}
        }
    }
    if (action.type === 'add-filtro-categoria') {
        return {
            ...state,
            categoriaActual: action.payload.id
        }
    }
    if (action.type === 'porcentajes-por-categoria') {
        return {
            ...state,
            porcentajesPorCategoria: calcularPorcentajes(state.gastos, state.presupuesto)
        }
    }
    return state
}