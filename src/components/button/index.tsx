import './index.css'
import React from 'react'

type ButtonProps = {
  children: JSX.Element | string
  onClick?: React.MouseEventHandler
}

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}
