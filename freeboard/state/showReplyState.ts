import {atom, selectorFamily} from "recoil";

export const showReplyState = atom<Map<string, boolean>>({
    key : "showReplyState",
    default : new Map()
})

export const showReplyStateByKey = selectorFamily<boolean, string>({
    key : "showReplyStateByKey",
    get : (id) =>
          ({get}) => {
            const replyState = get(showReplyState);
            return replyState.get(id);
        },
    set : (id) =>
           ({set, get}, newValue) => {
                if(typeof newValue == "boolean") {
                    const newMap = new Map([...get(showReplyState)]);
                    newMap.set(id, newValue);
                    set(showReplyState, newMap);
                }
        },
})
