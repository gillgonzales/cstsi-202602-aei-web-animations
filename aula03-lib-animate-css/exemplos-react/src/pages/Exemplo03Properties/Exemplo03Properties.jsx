import React, { useState } from 'react'
import { Container, LogoAnimateCssFadeIn, LogoJs, LogoVite, Main } from './Exemplo03Properties.styled'

const Exemplo03Properties = () => {

  const [animateState, setAnimateState] = useState('animate__fadeIn')

  return (
    <Main>
      <Container>
        {/* animate__delay-2s (--animate-delay)  */}
        <LogoJs className="animate__animated animate__lightSpeedInRight animate__delay-2s"/> 
        <LogoVite className="animate__animated animate__bounce"/>
        <LogoAnimateCssFadeIn 
            onMouseEnter={()=>setAnimateState('animate__fadeOut')}
            onMouseLeave={()=>setAnimateState('animate__fadeIn')}
            className={"animate__animated "+animateState}/>
      </Container>
    </Main>
  )
}

export default Exemplo03Properties
