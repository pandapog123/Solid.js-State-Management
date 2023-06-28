import { Component, Show } from "solid-js";
import {
  changeCurrentText,
  createRadioButton,
  dismissError,
  globalState,
  setError,
} from "../state";

const Form: Component = () => {
  let inputRef: HTMLInputElement | undefined;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (globalState[1].data?.showError) {
          dismissError();
        }

        if (!inputRef) {
          return;
        }

        if (inputRef.value == "") {
          setError("Input cannot be empty");

          return;
        }

        createRadioButton(inputRef.value);

        inputRef.value = "";
      }}
    >
      <input
        type="text"
        ref={inputRef}
        onInput={() => {
          if (inputRef) {
            changeCurrentText(inputRef.value);
          }
        }}
      />

      <button type="submit">Create New ListItem</button>

      <Show when={globalState[1].data?.showError}>
        <div>
          <span>{globalState[1].data?.error}</span>

          <button onClick={dismissError}>Dismiss Error</button>
        </div>
      </Show>
    </form>
  );
};

export default Form;
