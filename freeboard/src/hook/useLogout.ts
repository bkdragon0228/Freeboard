import { useRouter } from "next/router"
import { useSetRecoilState } from 'recoil'
import { tokenState } from '../../state/tokenState'

export default function useLogout () {
    const router = useRouter()
    const setAccessToken = useSetRecoilState(tokenState)
    return () => {
        // 로그아웃 api 연동해야함.
        setAccessToken(null)
        router.reload()
    }
}