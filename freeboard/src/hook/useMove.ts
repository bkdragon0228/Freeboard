import { useRouter } from "next/router"

export default function useMove() {
    const router = useRouter()

    const moveToPath = (path : string) => {
        router.push(path)
    }

    return {
        router,
        moveToPath
    }
}