import React from 'react'
import {Link} from 'react-router'

const MenuIntem = ({ path, title, index }) => {

     const menuItem = `Exemplo 0${index + 1} - ${(title)}`;

  return (
    <div className="my-[5px] list-none list-inside font-bold transition-all duration-[2000ms]">
       <Link to={path}>
            <h3 className="w-full lg:mb-5! lg:text-3xl duration-5000 
                    hover:bg-primary-500 rounded-2xl hover:duration-1000">
                    {menuItem}
                </h3>
       </Link>
    </div>
  )
}

export default MenuIntem
