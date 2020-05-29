import makeStyles, { Styles } from "../hooks/makeStyles"
import { ReactFancyNavigationProps } from "./types"
import { px } from "../utils/styles"
import { isNil } from "lodash-es"

const styles: Styles<ReactFancyNavigationProps> = (_theme) => ({
  navbar: ({ sticky }) => ({
    height: px(50),
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    position: sticky ? 'sticky' : 'absolute',
    top: 0
  }),
  title: ({ logo }) => ({
    marginLeft: isNil(logo) ? px(16) : 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
  })
})

export default makeStyles(styles)
