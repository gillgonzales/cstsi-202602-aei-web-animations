import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router";
import App from "../App";

import Exemplo01SimpleParallax from "../pages/Exemplo01SimpleParallax";

 const pages = [
    {path:"exemplo-01-simple-parallax",  title: 'Exemplo SimpleParallax', el: <Exemplo01SimpleParallax/>},

]

export const AppRouter = ()=>(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                {pages.map(({path,el},i)=>{
                    return (
                        <Route
                            key={i}
                            path={path}
                            element={el}
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    );

    export {pages}