
import usePresupuesto from '../hooks/usePresupuesto'
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
const ReiniciarApp = () => {
    const { dispatch } = usePresupuesto()
    return (
        <button type='button'
            className='bg-violet-600 w-14 h-14 flex items-center justify-center p-2 text-white font-bold rounded-full shadow-lg'
            onClick={() => dispatch({ type: 'reset-app' })}
        >

            <SettingsBackupRestoreIcon />
        </button>
    )
}

export default ReiniciarApp