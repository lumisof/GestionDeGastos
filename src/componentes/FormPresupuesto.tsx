import { useMemo, useState } from "react";
import usePresupuesto from "../hooks/usePresupuesto"

const FormPresupuesto = () => {

    const [presupuesto, setPresupuesto] = useState(0)
    const {dispatch} = usePresupuesto()

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.valueAsNumber);
        setPresupuesto(e.target.valueAsNumber)
    }
/* 
//ver como hacer para que desaparezca el cero en focus
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === '0') {
            setPresupuesto(Number('')); 
        }
    };
    */

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setPresupuesto(0); 
        }
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log("Agregar presupuesto");
        dispatch({type: 'add-presupuesto', payload:{presupuesto}})
    }

    const esValido = useMemo(() => {
        return isNaN(presupuesto) || presupuesto <= 0
    }, [presupuesto])

    return (
        
        <form className="space-y-5 mx-auto w-full md:w-2/3 " onSubmit={handleSubmit}>
        <img src="onboarding2.svg" className="w-full ">
        </img>
            <div className="flex flex-col space-y-5">

                <label htmlFor="presupuesto" className="text-2xl text-gray-700 font-bold text-center">
                    Presupuesto inicial:
                </label>
            </div>
            <input
            id="presupuesto"
            type= "number"
            className="w-full bg-white border border-gray-200 p-2"
            placeholder="Ingresa tu presupuesto"
            name="presupuesto"
            value={presupuesto} //inicia en 0
            onChange={handleChange}
            //onFocus={handleFocus}
            onBlur={handleBlur}
            />
            <input
            type="submit"
            value="INGRESAR"
            className="bg-purple-600 hover:bg-purple-700 rounded-lg cursor-pointer w-full p-2 text-white font-black disabled:opacity-35"
            disabled={esValido}
            />
        </form>
    )
}

export default FormPresupuesto