import { createUseStyles, DefaultTheme } from 'react-jss'
import CSS from 'csstype'

interface StyleObject extends CSS.Properties {}

type StylePropsFunction<T> = (p: T) => StyleObject

export type Styles<T> = (t: DefaultTheme) => ({
  [name: string]: StylePropsFunction<T> | StyleObject
})

export default (styles: Styles<any>) => createUseStyles(styles)
