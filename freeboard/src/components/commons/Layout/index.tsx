import React, { PropsWithChildren } from 'react'

import { useSetRecoilState , useRecoilState} from 'recoil'
import { isOpenStateBySign } from '../../../../state/isOpenState'

import LayoutHeader from './Header'
import LayoutNavigation from './Navigation'
import RegisterModal from '../modal/registerModal'
import LoginModal from '../modal/loginModal'



export default function Layout(props : PropsWithChildren<{}>) {
  const [isOpenLogin, setIsOpenLogin] = useRecoilState(isOpenStateBySign('login'))
  const [isOpenRigster, setIsOpenRegister] = useRecoilState(isOpenStateBySign('register'))
  return (
    <>
        <LayoutHeader />
        <LayoutNavigation />
        <div>
            {props.children}
        </div>
        <RegisterModal isOpen={isOpenRigster} setIsOpen={setIsOpenRegister} setIsOpenLogin={setIsOpenLogin}/>
        <LoginModal isOpen={isOpenLogin} setIsOpen={(setIsOpenLogin)} setIsOpenRegister={(setIsOpenRegister)}/>
    </>
  )
}
