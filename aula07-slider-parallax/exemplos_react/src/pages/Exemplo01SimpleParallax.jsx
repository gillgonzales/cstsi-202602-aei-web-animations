import React from 'react'

const Exemplo01SimpleParallax = () => {
    return (
        <>
            <h2 className="nes-text is-primary">
                Exemplo de Animação com
                <a href="#" target="_blank">SimpleParallax</a>
            </h2>
            <div className="nes-container with-title  w-3/4 h-300">
                <span className="title">Exemplo 1:</span>
                <div className="sp1 flex flex-col h-full justify-start gap-5 items-center w-full">
                    <img className="w-3/4 opacity-50" src="/assets/img/ifsul80anos.jpeg" />
                    <img className="w-full " src="/assets/img/logo_tsi.png" />
                    <img className="w-3/4" src="/assets/img/ifsul80anosBig.jpeg" />
                    <img className="w-3/4" src="/assets/img/logo_tsi.png" />
                </div>
            </div>
            <div className="nes-container with-title  w-3/4 h-300">
                <span className="title">Exemplo 2:</span>
                <div className="sp2 h-full  w-full overflow-hidden absolute">
                    <img className="w-3/4 absolute top-10" src="/assets/img/ifsul80anos.jpeg" />
                    <img className="w-1/2 absolute top-70 left-30" src="/assets/img/logo_tsi.png" />
                    <img className="w-11/12 absolute top-100" src="/assets/img/ifsul80anosBig.jpeg" />
                    <img className="w-3/4 absolute top-180" src="/assets/img/logo_tsi.png" />
                </div>
            </div>
            <div>
                <a href="/">
                    <button type="button" title='Voltar ao início!' className="nes-btn is-error btn">Voltar</button>
                </a>
            </div>
        </>
    )
}

export default Exemplo01SimpleParallax
