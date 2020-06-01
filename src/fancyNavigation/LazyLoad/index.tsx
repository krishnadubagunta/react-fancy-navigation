import React, {Suspense, ReactElement} from 'react'

type Spreadable<T> = {
  readonly [P in keyof T]: T[P]
}

export interface LazyLoadProps<T> extends Spreadable<T> {
  component: JSX.Element
}

const LazyLoad = ({ component: FetchedComponent, ...rest }: LazyLoadProps<T>): JSX.Element => (<Suspense fallback={<div></div>}>
    <FetchedComponent {...rest} />
  </Suspense>
)

export default LazyLoad
