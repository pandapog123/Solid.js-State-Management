import { createStore } from "solid-js/store";

let [globalState, setGlobalState] = createStore([
  {
    name: "Data",
    visible: true,
  },
  {
    name: "Form",
    visible: true,
    data: {
      error: "",
      showError: false,
      currentText: "",
    },
  },
  {
    name: "Radio List",
    visible: true,
    data: {
      selectedButton: 0,
      labels: ["First Radio Button"],
    },
  },
]);

function toggleVision(index: number) {
  setGlobalState(index, "visible", !globalState[index].visible);
}

function changeCurrentText(text: string) {
  setGlobalState(1, "data", "currentText", text);
}

function createRadioButton(text: string) {
  setGlobalState(2, "data", "labels", (previous) => {
    if (!previous) {
      return [text];
    }

    return [...previous, text];
  });
}

function setError(error: string) {
  setGlobalState(1, "data", "error", error);
  setGlobalState(1, "data", "showError", true);
}

function dismissError() {
  setGlobalState(1, "data", "error", "");
  setGlobalState(1, "data", "showError", false);
}

function handleRadioButtonClick(index: number) {
  setGlobalState(2, "data", "selectedButton", index);
}

export {
  globalState,
  toggleVision,
  changeCurrentText,
  createRadioButton,
  setError,
  dismissError,
  handleRadioButtonClick,
};
