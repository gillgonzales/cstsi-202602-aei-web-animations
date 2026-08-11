import React, { useEffect, useState } from 'react'
import { Container, ContainerExamples, GlobalStyles, Skeleton } from './Exemplo09Skeleton.styled'
import ImageBoat from '/assets/img/image.jpg?url'
import SkeletonCSS from './SkeletonCSS';

const Exemplo09Skeleton = () => {

  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  const [LoadedData, setLoadedData] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setLoadedData({ title: 'Exemplo Skeleton!', image: ImageBoat });
    }, 5000); 
    return () => clearTimeout(timer);
  });

  return (
    <>
      <GlobalStyles />
      <ContainerExamples className="nes-container with-title" >
        <span className="title">Exemplo 9</span>
        <Container>
          {!isLoaded
            ? <SkeletonLayoutCSS3/>
            : <ContentLayout
                title={LoadedData.title}
                image={LoadedData.image}
              />}
        </Container>
      </ContainerExamples>
      <div>
        <a href="/">
          <button type="button" title="Voltar ao início!" className="nes-btn is-error btn">Voltar</button>
        </a>
      </div>
    </>
  )
}

const ContentLayout = ({title,image}) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <img src={image} alt="barcos" width="200" height="200" />
      </div>
    </>
  )
}

const SkeletonLayout = () => {
  return (
    <>
      <Skeleton>
        <h1>Com Styled-Components</h1>
      </Skeleton>
      <Skeleton>
        <div></div>
      </Skeleton>
    </>
  )
}

const SkeletonLayoutCSS3 = () => {
  return (
    <>
      <SkeletonCSS>
        <h1>Com CSS</h1>
      </SkeletonCSS>
      <SkeletonCSS>
        <div></div>
      </SkeletonCSS>
    </>
  )
}

export default Exemplo09Skeleton