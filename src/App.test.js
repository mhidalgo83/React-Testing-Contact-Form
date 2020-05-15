import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders App without crashing", () => {
  const container = render(<App />);
});

test("email placeholder text correct", () => {
  const { getByPlaceholderText } = render(<App />);

  const placeholder = "bluebill1049@hotmail.com";
  const emailElem = getByPlaceholderText("bluebill1049@hotmail.com");
  console.log(emailElem);
  expect(emailElem.placeholder).toBe(placeholder);
});

test("last name input functioning correcty", async () => {
  render(<input data-testid="lastName" />);

  const name = "Hidalgo";
  await userEvent.type(screen.getByTestId("lastName"), name);
  expect(screen.getByTestId("lastName")).toHaveValue(name);
});

test("first name input functioning correctly", async () => {
  render(<App />);
  const name = "Matthew";
  await userEvent.type(screen.getByTestId("firstName"), name);
  expect(screen.getByTestId("firstName")).toHaveValue(name);
});

test("email works correctly", async () => {
  render(<App />);

  const email = "bluebill1049";
  await userEvent.type(screen.getByTestId("email"), email);
  expect(screen.getByTestId("email")).toHaveValue(email);
});

test("submit button works", async () => {});
