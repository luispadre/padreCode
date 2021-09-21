import { createSignal, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";

export function useNetwork() {
  const [fields, setFields] = createStore();

  const handleOnline = (e) => {
    console.log(e);
    console.log("online");
    setFields({
      online: true,
      since: new Date().toString(),
    });
  };
  const handleOffline = (e) => {
    console.log("e");
    console.log("offline");

    setFields({
      online: false,
      since: new Date().toString(),
    });
  };
  onMount(() => {
    navigator.onLine?handleOnline():handleOffline()
    onCleanup(() => {
        navigator.onLine?handleOnline():handleOffline()
    });
  });
  return fields;
}
