import React from 'react'
import BaseNavbar from "../../BaseNavbar";
import { TranslationComponentType } from './types'
import animejs from "animejs"

const TranslationComponent: TranslationComponentType = ({ appRef, children, ...props}) => {
  // const thisComponent: MutableRefObject<TranslationComponentType | null> = useRef(null)
  const handleMenuClick: EventHandlerNonNull = ({ preventDefault, currentTarget }) => {
    preventDefault()
    const currentTranslatableTarget = currentTarget as Element
    
    animejs({
      targets: [currentTranslatableTarget.id, appRef.current.id],
      skewX: 100
    })
  }

  return (<BaseNavbar {...props} onMenuClick={handleMenuClick}>
    {
      children
    }
  </BaseNavbar>
  )
}

export default TranslationComponent
