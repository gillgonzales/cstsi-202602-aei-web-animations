
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {pages} from './router/AppRouter'
import MenuItem from './components/MenuItem/MenuItem'

function App() {

  return (
     <>
      <div className="w-3/4 flex flex-col justify-center items-center opacity-100 lg:w-1/2">
        <h1>CSTSI - AEI
          <a target="_blank" href="#">&nbsp;Aula 05</a>
        </h1>
        <ul className="z-20 w-full px-0 m-0 p-0">
          {pages.map(({ path, title }, index) => (
            <MenuItem
              key={index}
              path={path}
              title={title}
              index={index}
            />
          ))}
        </ul>
        <div className="absolute z-10  w-3/4 pt-50">
            <Link to={'https://tailwindcss.com/docs/installation/using-vite'} target="_blank">
              <img className="animate-pulse" src={heroImg} />
            </Link>
        </div>
        <LogosContainer className="z-30 animate-[spin_3000ms_ease_0ms]">
          <div className="animate-scalereact">
            <img  src={reactLogo} alt="react" 
              className="logo animate-[spin_2s_linear_1000ms_infinite_alternate]"/>
          </div>
          <img src={viteLogo} alt="vite" 
            className="logo vite-logo animate-flip" />
        </LogosContainer>
      </div>
    </>
  )
}

export default App
