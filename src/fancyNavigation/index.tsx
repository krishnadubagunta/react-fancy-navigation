import React from 'react'
import { ReactFancyNavigationProps } from './types'

const ReactFancyNavigation = (props: ReactFancyNavigationProps): JSX.Element => {
  
  return <div>
    <header>Pre Header</header>
    <pre dangerouslySetInnerHTML={ { __html: JSON.stringify(props, undefined, 2) }} />
  </div>
}

export default ReactFancyNavigation
