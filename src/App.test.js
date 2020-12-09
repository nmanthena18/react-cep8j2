import React from "react";
import { mount, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });
let wrapper;
const mockStore = configureMockStore()({
  startDate: "",
  endDate: "",
  item: []
});
const setup = function(initialFruitState, componentProps) {
  const updateState = jest.fn();
  React.useState = jest.fn(() => [initialFruitState, updateState]);
  wrapper = mount(
    <Provider store={mockStore}>
      <App {...componentProps} />
    </Provider>
  );
  return wrapper;
};

describe("test fruit state", () => {
  test("setup", () => {
    const wp = setup(new Date(), {});
  });
});
