import { useState, useEffect, useCallback } from "react";

function useLocalStorage(key, defaultVal) {
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        } catch (e) {
            val = defaultVal;
        }
        return val;
    })
    const getLocalStorage = useCallback(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])
    useEffect(() => {
        getLocalStorage();
    }, [getLocalStorage]);

    return [state, setState]
}

export default useLocalStorage