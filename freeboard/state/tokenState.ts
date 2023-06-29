import { atom, selector, selectorFamily } from "recoil";
import { getAccessToken } from "../src/util/getAccessToken";

export const tokenState = atom<string>({
    key : 'tokenState',
    default : null
})

export const restoreAccessTokenLoadble = selector({
    key : 'restoreAccessTokenLoadble',
    get : async () => {
        const newAccessToken = await getAccessToken();
        return newAccessToken
    }
})

export const restoreAccessTokenSelector = selector({
    key : 'restoreAccessTokenSelector',
    get : async () => {
        const newAccessToken = await getAccessToken();
        return newAccessToken
    },
    set : ({set}, newValue) => {
        if(typeof newValue === 'string') {
            set(tokenState, newValue)
        }
    }
})