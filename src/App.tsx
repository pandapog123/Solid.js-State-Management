import { Show, type Component } from "solid-js";
import DisplayToggle from "./components/DisplayToggle";
import { globalState } from "./state";
import DataDisplay from "./components/DataDisplay";
import RadioButtons from "./components/RadioButtons";
import Form from "./components/Form";

const App: Component = () => {
  return (
    <>
      <DisplayToggle />
      <hr />

      <Show when={globalState[0].visible}>
        <DataDisplay />
        <hr />
      </Show>
      <Show when={globalState[1].visible}>
        <Form />
        <hr />
      </Show>
      <Show when={globalState[2].visible}>
        <RadioButtons />
      </Show>
    </>
  );
};

export default App;
