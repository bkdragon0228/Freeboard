import { useRouter } from "next/router"
import { gql, useMutation } from "@apollo/client"
import { IMutation } from "../commons/types/generated/types"

const LOGOUT_USER = gql`
    mutation {
        logoutUser
    }
`

export default function useLogout () {
    const router = useRouter()
    const [ logoutUser ] = useMutation<Pick<IMutation, 'logoutUser'>>(LOGOUT_USER)

    return () => {
        logoutUser()
        router.reload()
    }
}