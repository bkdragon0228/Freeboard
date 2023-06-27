import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useSetRecoilState , useRecoilValue} from 'recoil';
import { isOpenStateBySign } from '../../state/isOpenState'
import { tokenState } from '../../state/tokenState'
import { getAccessToken } from '../util/getAccessToken';

const withAuth = <T extends {}>(Component : React.FC<T>, option : boolean | null ) =>  (props : T) => {
    // null => 아무나 출입가능
    // true => 로그인한 유저만 출입 가능
    // false => 로그인한 유저는 출입 불가능
    const router = useRouter()
    const setIsOpenLogin = useSetRecoilState(isOpenStateBySign('login'))

    useEffect(() => {
        if(option === null) return

        void getAccessToken().then((accessToken) => {

            console.log('accesstoken', accessToken)
            if(option === true) {
                if(!accessToken) {
                    router.push('/')
                    alert('로그인 해주세요.')
                    setIsOpenLogin(true)
                    return
                }
            }

            if(option === false) {
                if(accessToken) {
                    alert('로그아웃 해주세요.')
                    router.push('/')
                    return
                }
            }
        })


    }, [])

    return (
        <Component {...props} />
    );
};

export default withAuth;
