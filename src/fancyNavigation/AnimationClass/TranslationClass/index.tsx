
import React, { lazy, LazyExoticComponent, Suspense } from 'react'
import { TranslationComponentType } from './types'
import BaseNavbar from '../../BaseNavbar'

const LazyComponent: LazyExoticComponent<any> = lazy(() => import('./component'))

const LoadableComponent: TranslationComponentType = (props) => <Suspense fallback={<BaseNavbar />}>
  <LazyComponent {...props} />
</Suspense>

export default LoadableComponent
