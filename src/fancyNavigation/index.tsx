import React, { ExoticComponent } from 'react'
import { ReactFancyNavigationProps } from './types'
import LoadableTranslateComponent from './AnimationClass/TranslationClass'
import { TranslationNavigationProps } from './AnimationClass/TranslationClass/types'


type RFNAnimateOmitted = Omit<ReactFancyNavigationProps,'animate'>

const ComponentToRender = ({ animate, ...props }: ReactFancyNavigationProps): ExoticComponent<RFNAnimateOmitted> => {
  switch(animate) {
    case 'translate':
      return <LoadableTranslateComponent {...props as TranslationNavigationProps } />
    default:
      return <div typeof=''></div>
  }
}


const ReactFancyNavigation = (props: ReactFancyNavigationProps): ExoticComponent<RFNAnimateOmitted> => <ComponentToRender {...props} />

export default ReactFancyNavigation
