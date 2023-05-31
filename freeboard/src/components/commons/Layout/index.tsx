import React, { PropsWithChildren } from 'react'

import { useSetRecoilState , useRecoilState} from 'recoil'
import { isOpenStateBySign } from '../../../../state/isOpenState'

import LayoutHeader from './Header'
import LayoutNavigation from './Navigation'
import RegisterModal from '../modal/registerModal'



export default function Layout(props : PropsWithChildren<{}>) {
  const [isOpenLogin, setIsOpenLogin] = useRecoilState(isOpenStateBySign('login'))
  const [isOpenRigster, setIsOpenRegister] = useRecoilState(isOpenStateBySign('register'))
  console.log(isOpenRigster)
  return (
    <>
        <LayoutHeader />
        <LayoutNavigation />
        <div>
            {props.children}
        </div>
        <RegisterModal isOpen={isOpenRigster} setIsOpen={setIsOpenRegister} setIsOpenLogin={setIsOpenLogin}/>
    </>
  )
}
