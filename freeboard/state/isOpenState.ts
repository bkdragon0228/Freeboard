import {atom, selectorFamily} from 'recoil'

export const isOpenState = atom<Map<'register' | 'login', boolean>>({
    key : 'isOpenState',
    default : new Map([
        ['register', false],
        ['login', false]
    ])
})

export const isOpenStateBySign = selectorFamily<boolean,'register' | 'login'>({
    key : 'isOpenStateBySign',
    get : (loginOrRegister) => ({get}) => {
        const isOpenMap = get(isOpenState);
        const trueOrFalse = isOpenMap.get(loginOrRegister);
        return trueOrFalse;
    },
    set : (loginOrRegister) => ({get, set}, newValue) => {
        if(typeof newValue == 'boolean') {
            const newState = new Map([...get(isOpenState)])
            newState.set(loginOrRegister, newValue);
            set(isOpenState, newState);
        }
    }
})