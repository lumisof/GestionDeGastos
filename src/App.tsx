import FormPresupuesto from "./componentes/FormPresupuesto"
import FormGastos from "./componentes/FormGastos";
import PresupuestoTracker from "./componentes/PresupuestoTracker";
import usePresupuesto from "./hooks/usePresupuesto";
import { useEffect, useMemo } from "react";
import TablaGastos from "./componentes/TablaGastos";
import FiltroCategoria from "./componentes/FiltroCategoria";
import ReiniciarApp from "./componentes/ReiniciarApp";


function App() {
  const { state } = usePresupuesto()
  //console.log(state.presupuesto);
  useEffect(() => {
    localStorage.setItem('presupuesto', state.presupuesto.toString())
    localStorage.setItem('gastos', JSON.stringify(state.gastos))
  }, [state])
  const isValidPresupuesto = useMemo(() => state.presupuesto > 0, [state.presupuesto])

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center space-x-4 mt-5">
          {isValidPresupuesto ? (
            <ReiniciarApp />
          ) : <></>}
          <header className="flex items-center justify-center w-2/3 sm:w-[36rem] rounded-3xl bg-gray-600 p-2 ">
            <h1 className="uppercase text-center font-black text-white text-4xl">Gestor de gastos</h1>
          </header>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 mb-20 p-10">
        {isValidPresupuesto ?
          <FormGastos />
          :
          <FormPresupuesto />}
      </div>
      {isValidPresupuesto && (
        <main className="max-w-3xl mx-auto py-10 bg-white shadow-lg rounded-lg mt-10 p-10 mb-20">
          <legend className="text-center text-1xl font-bold text-violet-600 py-2 w-full border-b-4 border-violet-500 ">
            Panel de control
          </legend>
          <div className="flex flex-col md:flex-row  md:justify-around ">
            <PresupuestoTracker /> <FiltroCategoria />
          </div>
          <TablaGastos />
        </main>)
      }
    </>
  )
}

export default App
