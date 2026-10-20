import { useTheme } from '../../contexts/ThemeProvider';
import { IconLight } from '../Icons/IconLight/IconLight';
import { ToggleTheme } from '../lightswind/toggle-theme';
import IconDark from '../Icons/IconDark/IconDark';
import './theme_button.css';

interface ThemeButtonProps {
  width: number
  height: number
}

const ThemeButton = ({ width, height }: ThemeButtonProps) => {

 const { theme, toggleTheme } = useTheme();

  return (<>
    <button 
      onClick={() => toggleTheme()}
      className={`${theme === 'dark' ? 'dark' : 'light'} btn-theme`}
      >
          {theme === 'dark'
            ? <IconLight
              fill={'light'}
              width={width}
              height={height}
            />
            : <IconDark
              width={width}
              height={height}
            />
          }
        </button>
          <ToggleTheme

            duration={600}
            animationType="fade-in-out"
            className="dark:bg-red bg-blue-500"
        />
  </>)
}

export {ThemeButton};