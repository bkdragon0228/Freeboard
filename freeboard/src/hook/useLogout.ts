import { useRouter } from "next/router"

export default function useLogout () {
    const router = useRouter()

    return () => {
        localStorage.removeItem('accessToken')
        router.reload()
    }
}