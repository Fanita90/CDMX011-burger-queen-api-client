/* eslint-disable no-undef */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { CardDone } from "../components/waiter/CardDone";
import { Data } from "./DataMock";

afterEach(cleanup);

test("renders content", () => {
  const mockOrder = Data.orders;

  const mockDataFilter = mockOrder.filter((p) => p.status == "entregado");
  jest.mock();
  //const mockOrderFinish = jest.fn();
  const component = render(
    <CardDone product={mockDataFilter} orderFinish={mockOrder} />
  );

  jest.useFakeTimers();

  //component.debug()
  component.getAllByText("Marco");
  component.getAllByText("1 Hamburguesa simple");
  component.getAllByText("entregado");
});

test("clicking the buttons", async() => {
  const mockOrder = Data.orders;

  const mockDataFilter = mockOrder.filter((p) => p.status == "entregado");
  jest.mock();
  const mockOrderFinish = jest.fn();

  const component = render(
    <CardDone product={mockDataFilter} orderFinish={mockOrderFinish} />
  );
  
  const button = component.getByText("Almacenar comanda");
  fireEvent.click(button);

    await waitFor(() => expect(mockOrderFinish).toBeCalledTimes(1));
});
//describe("test window location's reload function", () => {
//  const original = window.location;

//  const refreshPage = () => {
//    window.location.reload(true);
//  };

//  beforeAll(() => {
//    Object.defineProperty(window, "location", {
//      configurable: true,
//      value: { reload: jest.fn() },
//    });
//  });

//  afterAll(() => {
//    Object.defineProperty(window, "location", {
//      configurable: true,
//      value: original,
//    });
//  });

//  it("mocks reload function", () => {
//    expect(jest.isMockFunction(window.location.reload)).toBe(true);
//  });

//  it("calls reload function", () => {
//    refreshPage(); // as defined above..
//    expect(window.location.reload).toHaveBeenCalled();
//  });
//});
