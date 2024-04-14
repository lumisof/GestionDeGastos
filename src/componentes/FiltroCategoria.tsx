
import { categorias } from '../data/categorias'
import usePresupuesto from '../hooks/usePresupuesto'
import CategoriasGrafico from './CategoriasGrafico'

const FiltroCategoria = () => {
    const {dispatch}= usePresupuesto()
const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type:'add-filtro-categoria', payload:{id: e.target.value} })
}
    return (
        <div className=''>
            <CategoriasGrafico/>
            <form>
            <label className='text-gray-600 text-1xl font-bold my-6 '>Filtrar por categoria</label>
                <div className='flex flex-col md:flex-row md:items-center gap-5'>
                    
                    <select
                    className='bg-slate-100 p-3 mt-3 flex-1 rounded'
                    id='categoria' 
                    onChange={handleChange}
                    >
                        <option value=""> Todas las categorias</option>
                        {categorias.map(categoria => (
                            <option 
                            key={categoria.id}
                            value={categoria.id}
                            >{categoria.name} </option>
                        ))}
                    </select>
                </div>
            </form>
            
        </div>
    )
}

export default FiltroCategoria