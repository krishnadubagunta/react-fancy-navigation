import { ComponentPropsWithRef, ComponentType, MutableRefObject, ComponentProps } from "react";

export type AnimationType = 'none' | 'translate' | 'tabbed'
type MenuType = 'hamburger' | 'tabs'

type NavRoute = {
  name: string,
  path: string
}

interface LogoProps {
  logoPath: string
}

type ColorOptions = 'white' | 'black' | 'AliceBlue' | 'AntiqueWhite' | 'GhostWhite'

interface NavbarProps extends BaseNavbarProps {
  title: string
  logo?: LogoProps
  navRoutes?: NavRoute[],
  color?: ColorOptions | string,
}

export interface BaseNavbarProps extends ComponentProps {
  className?: string
  sticky?: boolean
  height?: number
  color?: ColorOptions | string
  onMenuClick?: EventHandlerNonNull
}

export interface ReactFancyNavigationProps extends NavbarProps, ComponentPropsWithRef {
  animate: AnimationType
  menuType: MenuType
  appRef: MutableRefObject<Element>
}

export type ReactFancyNavigationComponent = ComponentType<ReactFancyNavigationProps>
export type RFNAnimateOmitted = Omit<ReactFancyNavigationProps,'animate'>
