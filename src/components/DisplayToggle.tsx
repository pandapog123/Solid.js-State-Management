import { Component, For } from "solid-js";
import { globalState, toggleVision } from "../state";

const DisplayToggle: Component = () => {
  return (
    <ul
      style={{
        "list-style": "none",
      }}
    >
      <For each={globalState}>
        {(item, index) => {
          return (
            <li>
              <input
                type="checkbox"
                checked={item.visible}
                id={item.name}
                onChange={() => toggleVision(index())}
              />

              <label for={item.name}>Display {item.name}</label>
            </li>
          );
        }}
      </For>
    </ul>
  );
};

export default DisplayToggle;
