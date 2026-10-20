import React from 'react'
import SVGatorAnimation from "/assets/svgs/animated/svg_gator_CSS_animation.svg?url"
import SVGatorAnimationV2 from "./SVGator/svg_gator_animation_v2.svg?url"
import SVGatorAnimationV3 from "./SVGator/svg_gator_animation_hide_tail.svg?url"
import "../../styles/tailwind.css"


const SVGatorCSSOnlyForReactJS = () => {
  return (<>
     <object className='animate-flip bg-primary-500' data={SVGatorAnimationV3} width="300" height="300"></object> 
  </>)
}

export {SVGatorCSSOnlyForReactJS}
