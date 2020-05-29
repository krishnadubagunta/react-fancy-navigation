export type AnimationType = 'none' | 'translate' | 'tabbed'
type MenuType = 'hamburger' | 'tabs'

interface NavRoute {
  name: string
  path: string
}

interface NavbarProps {
  title: string | JSX.Element
  logo?: JSX.Element
  navRoutes: JSX.Element[] | NavRoute[]
  className: string
  sticky?: boolean
}

export interface ReactFancyNavigationProps extends NavbarProps {
  animate: AnimationType
  menuType: MenuType
  children: JSX.Element
}
