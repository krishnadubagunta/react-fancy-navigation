import React from "react"
import useStyles from './styles'
import { BaseNavComponentType } from "./BaseNavComponentType"

const BaseNavbar: BaseNavComponentType = ({ height, sticky, color, children, ...props }) => {
  const { navbar } = useStyles({
    height,
    sticky,
    color
  })

  return (<div className={navbar} {...props}>
    {children}
  </div>)
}

export default BaseNavbar
