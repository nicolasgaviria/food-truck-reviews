import "@testing-library/jest-dom";
import mockAxios from "jest-mock-axios";

afterEach(() => {
  mockAxios.reset();
});
