import React, { Suspense } from 'react'
import { ReactFancyNavigationProps, ReactFancyNavigationComponent } from './types'
import LoadableTranslationComponent from './AnimationClass/TranslationClass'
import { includes, join } from 'lodash-es'
import { SupportedAnimations } from '../constants'
import BaseNavbar from './BaseNavbar'

const ComponentToRender: any = ({ animate, ...props }: ReactFancyNavigationProps) => {
  if(animate) {
    return <LoadableTranslationComponent {...props} />
  }
  else {
    return <LoadableTranslationComponent {...props} />
  }
}


const ReactFancyNavigation: ReactFancyNavigationComponent = ({ animate, ...props}: ReactFancyNavigationProps) => {
  const animateIsInSupportedProps = includes(SupportedAnimations, animate)
  if(!animateIsInSupportedProps) console.warn(`Animate prop value ${animate} is not supported, please choose among ${join(SupportedAnimations, ', ')}`)

  return (<Suspense fallback={<BaseNavbar />}>
    <ComponentToRender animate={animate} {...props} />
  </Suspense>)
}

export default ReactFancyNavigation
