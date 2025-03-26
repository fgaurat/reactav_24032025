import { useTheme } from './ThemeContext'

function ThemeComponent() {
    const {theme,toggleTheme} = useTheme()
    
    return (
        <>
            <h2>
                ThemeComponent 
                theme : {theme}
                <button onClick={()=>toggleTheme()}>Toggle</button>
            </h2>
        </>
    )
}

export default ThemeComponent