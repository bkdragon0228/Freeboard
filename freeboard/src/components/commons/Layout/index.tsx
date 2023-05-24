import React, { PropsWithChildren } from 'react'
import LayoutHeader from './Header'
import LayoutNavigation from './Navigation'

export default function Layout(props : PropsWithChildren<{}>) {
  return (
    <>
        <LayoutHeader />
        <LayoutNavigation />
        <div>
            {props.children}
        </div>
    </>
  )
}
