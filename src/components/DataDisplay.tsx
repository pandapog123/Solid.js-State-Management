import { Component } from "solid-js";
import { globalState } from "../state";

const DataDisplay: Component = () => {
  return <pre>{JSON.stringify(globalState, undefined, 4)}</pre>;
};

export default DataDisplay;
