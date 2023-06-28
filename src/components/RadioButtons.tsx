import { Component, For } from "solid-js";
import { globalState, handleRadioButtonClick } from "../state";

const RadioButtons: Component = () => {
  return (
    <ul
      style={{
        "list-style": "none",
      }}
    >
      <For each={globalState[2].data?.labels}>
        {(item, index) => {
          return (
            <li>
              <input
                type="radio"
                name={item}
                id={index().toString()}
                value={index()}
                checked={index() == globalState[2].data?.selectedButton}
                onChange={() => {
                  handleRadioButtonClick(index());
                }}
              />

              <label for={index().toString()}>{item}</label>
            </li>
          );
        }}
      </For>
    </ul>
  );
};

export default RadioButtons;
