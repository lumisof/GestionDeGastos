import { categorias } from "../data/categorias";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { useState } from "react";
import { GastoSinId, Value } from "../types";
import ErrorMsg from "./ErrorMsg";
import usePresupuesto from "../hooks/usePresupuesto";


export default function FormGastos() {

    const [gasto, setGasto] = useState<GastoSinId>({
        gastoName: '',
        amount: 0,
        categoria: '',
        date: new Date()
    })

    const [error, setError] = useState('')
    const { dispatch, presupuestoSobrante} = usePresupuesto() //traigo dispatch porque voy a escribir en el state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => { //mismo type pero en diferentes eventos
        const { name, value } = e.target //HTLMselect no soporta valueAsNumber
        const isAmountField = ['amount'].includes(name)
        setGasto({
            ...gasto,
            [name]: isAmountField ? Number(value) : value //convertimos en nro solo el campo cantidad 
        })
    }

    const handleChangeDate = (value: Value) => {
        setGasto({
            ...gasto,
            date: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Limpia el error existente al iniciar el proceso de envío
        setError('');
        //validaciones:
        // q esten todos los campos completos:
        if (Object.values(gasto).includes('')) { //transforma objeto a arreglo, chequea que haya algo vacio
            setError('Todos los campos tienen que estar completos');
            return
        }
        //que no gaste mas de lo que tengo
        if (gasto.amount > presupuestoSobrante) {
            setError('Intenta gastar menos, presupuesto sobrepasado');
            return
        }


        //Agrega nuevo gasto:
        dispatch({ type: 'add-gasto', payload: { gasto } })

        //reiniciar el state
        setGasto({
            gastoName: '',
            amount: 0,
            categoria: '',
            date: new Date()
        })
    }

    return (
        <div className=' '>
        <form className="space-y-5 " onSubmit={handleSubmit}>
            <legend className="text-center text-1xl font-bold text-violet-600 py-2 w-full border-b-4 border-violet-500 ">
                Nuevo Gasto
            </legend>
            <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="gastoName"
                    className="text-xl">
                    Nombre Gasto
                </label>
                <input
                    type="text"
                    id="gastoName"
                    placeholder="Agrega nombre del gasto"
                    className="bg-slate-100 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="gastoName"
                    value={gasto.gastoName}
                    onChange={handleChange}
                >
                </input>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl">
                    Cantidad invertida
                </label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Agrega la cantidad del gasto"
                    className="bg-slate-100 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="amount"
                    value={gasto.amount}
                    onChange={handleChange}
                >
                </input>
            </div>
</div>
<div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="categoria"
                    className="text-xl">
                    Categoria
                </label>
                <select
                    id="categoria"
                    className="bg-slate-100 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="categoria"
                    value={gasto.categoria}
                    onChange={handleChange}>
                    <option value="">
                        Seleccionar categoria
                    </option>
                    {categorias.map(categorias => (
                        <option
                            key={categorias.id}
                            value={categorias.id}>
                            {categorias.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="fechaGasto"
                    className="text-xl">
                    Fecha de Gasto
                </label>
                <DatePicker
                    className="bg-slate-100 p-2 border-0"
                    onChange={handleChangeDate}
                    value={gasto.date}
                />
                </div>
               

            </div>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <input
                    type="submit"
                    className="bg-violet-500 shadow-lg hover:bg-violet-800 cursor-pointer w-full p-2 text-white font-bold rounded-lg"
                    value={'REGISTRAR GASTO'}
                >
                </input>
        </form>
        </div>
    )
}