/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react"
import "./searchBar.css"

interface SearchBarProps {
  filterFunction: (term: string) => void
  disabled: boolean
}

const SearchBar = ({ filterFunction, disabled }: SearchBarProps) => {

//useState
// const [searchInputState, setsearchInputState] = useState('')

//useRef
  const searchInputRef = useRef<HTMLInputElement>(null)

 useEffect(() => {
    !disabled && filterFunction('')
 } , [disabled])

//useState
//  useEffect(() => { 
//     filterFunction(searchInputState)
//  }, [searchInputState])

 console.log('renderiza searchBar')

 //useState
//  console.log(searchInputState)

 //useRef
 console.log(searchInputRef.current?.value)

  return (
    <div className="search_bar">
        <input 
            type="search" 
            placeholder="Pesquisar produtos"
            disabled={disabled}
            
            //useRef
            ref={searchInputRef}
            onChange={()=>{
                console.log(searchInputRef.current?.value)
                // Descomentando essa linha forçaremos o re-render mesmo com useRef,
                //  pois iremos atualizar o estado da listProducts do componente Home 
                //  gerando também o re-render do serachBar
                // filterFunction(searchInputRef.current.value)
            }}
            
            //useState
            // value={searchInputState}
            // onChange={(e)=>setsearchInputState(e.target.value)}
        
            />
        <button
            onClick={() => {
                //useRef
                filterFunction(searchInputRef.current?.value ?? '')

                //useState
                // filterFunction(searchInputState)

            }}
        > Pesquisar</button>
    </div>
  )
}

export default SearchBar