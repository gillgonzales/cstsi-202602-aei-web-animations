import iconDark from '../../../assets/moon-svgrepo-com.svg'
import './icon_dark.css'

interface IconDarkProps {
  width: number
  height: number
}

const IconDark = ({ width, height }: IconDarkProps) => {
  return (
    <img
        width={width}
        height={height}
        alt="Icone de lua"
        className='icon-dark'
        src={iconDark}
      />
  )
}

export default IconDark