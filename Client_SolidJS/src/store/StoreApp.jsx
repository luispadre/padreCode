
import { createSignal, createContext, onMount, onCleanup, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const AppContext = createContext();
export default function (props) {

    const [cube, setCube] = createSignal();

    const [state, setState] = createStore(),
        store = [
            state,
            {
                cube, setCube
            }
        ]
    return (
        <AppContext.Provider value={store}>
            {props.children}
        </AppContext.Provider>
    )
}


export function useStoreApp() {
    return useContext(AppContext);
}
