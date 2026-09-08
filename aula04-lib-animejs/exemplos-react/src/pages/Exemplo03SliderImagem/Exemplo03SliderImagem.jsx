import React, { useEffect, useRef, useState } from 'react'
import { ContainerExamples } from '../../styles/ContainerExamples.styeld'
import { Slider, SliderContainer, SliderElement, SliderItem, SliderList } from './Exemplo03SliderImagem.styled'
import { animate, createScope, utils } from 'animejs'

const Exemplo03SliderImagem = ({ totalSlides }) => {

    const [activeItemIndex, setActiveItemIndex] = useState(2)

    const ArrayTotalSlides = Array.from({ length: totalSlides });
    // console.log(ArrayTotalSlides)

    const root = useRef(null)
    const scope = useRef(null)

    const slideAnimationOptions = useRef({
        opacity: [0, 1],
        scale: ['0.5', '1'],
        filter: ['blur(50px)', 'blur(0px)'],
        delay: 100,
        duration: 1000,
        autoplay: true,
        //ease: 'linear',
        ease: "outElastic(1,.3)",
    })

    const nextSlide = () => {
        scope.current.methods.nextSlide()
    }

    const prevSlide = () => {
        if (activeItemIndex > 0)
            setActiveItemIndex(activeItemIndex - 1)
    }

    useEffect(() => {
        scope.current = createScope({ root }).add(scope => {

            scope.add('animaSlide', () => {
                animate(
                    utils.$(`li:nth-child(${activeItemIndex + 1}) img`),
                    slideAnimationOptions.current
                )
            })

            scope.add('nextSlide', () => {
                if (activeItemIndex < totalSlides - 1)
                    setActiveItemIndex(activeItemIndex + 1)
            })

        })
        scope.current.methods.animaSlide()
    }, [activeItemIndex])

    return (
        <>
            <title>CSTSI-LPAW Aula 04: Biblioteca AnimeJS</title>
            <h2 className="nes-text is-primary">
                Slider de Imagens com
                <a href="https://animejs.com/documentation/" target="_blank"> AnimeJS</a>
            </h2>
            <ContainerExamples>
                <div className="nes-container with-title">
                    <span className="title">Exemplo 3.1</span>
                    <SliderContainer>
                        <div className="slider-prev">
                            <button
                                type="button"
                                className="nes-btn is-primary"
                                onClick={prevSlide}
                                style={{ visibility: activeItemIndex > 0 ? 'visible' : 'hidden' }}
                            >&lArr;</button>
                        </div>
                        <Slider ref={root}>
                            <SliderList>
                                {ArrayTotalSlides.map((_, indexSlide) => (
                                    <SliderItem key={indexSlide + 1} $isActive={activeItemIndex === indexSlide}>
                                        <SliderElement >
                                            <img src={`/assets/img/wallpapers/wallpaper0${indexSlide + 1}.jpg`} alt={`Slider ${indexSlide + 1}`} />
                                        </SliderElement>
                                    </SliderItem>
                                ))
                                }
                            </SliderList>
                        </Slider>
                        <div className="slider-next">
                            <button
                                type="button"
                                className="nes-btn  is-primary"
                                onClick={nextSlide}
                                style={{ visibility: activeItemIndex < totalSlides - 1 ? 'visible' : 'hidden' }}
                            > &rArr;
                            </button>
                        </div>
                    </SliderContainer>
                </div>
                <div>
                    <a href="/">
                        <button type="button" title="Voltar ao início!" className="nes-btn is-error btn">Voltar</button>
                    </a>
                </div>
            </ContainerExamples>
        </>
    )
}

export default Exemplo03SliderImagem