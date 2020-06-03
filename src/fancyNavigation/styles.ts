import makeStyles, { Styles } from "../hooks/makeStyles"
import { ReactFancyNavigationProps } from "./types"
import { px } from "../utils/styles"
import { isNil } from "lodash-es"

export type NavStyles = Styles<ReactFancyNavigationProps>

const styles: NavStyles = {
  navbar: ({ sticky, height, color }) => ({
    height: isNil(height) ? px(50) : px(height),
    width: '100vw',
    backgroundColor: color ? color : 'AliceBlue',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: sticky ? 'sticky' : 'absolute',
    top: 0
  }),
  title: ({ logo }) => ({
    marginLeft: isNil(logo) ? px(16) : 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
  })
}

export default makeStyles(styles)
