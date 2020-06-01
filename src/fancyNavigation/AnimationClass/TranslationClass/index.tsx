import React, { lazy, ExoticComponent } from 'react'
import { TranslationNavigationProps } from './types'
import LazyLoad from '../../LazyLoad'

const LoadableTranslationComponent = (props: TranslationNavigationProps): ExoticComponent<TranslationNavigationProps> => <LazyLoad 
      component={lazy(() => import('./component'))}
      {...props} 
    />

export default LoadableTranslationComponent
