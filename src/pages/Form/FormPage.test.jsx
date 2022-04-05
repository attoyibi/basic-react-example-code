import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormPage from "./FormPage";

describe("FormPage Text", () => {
  test("text Formulir", () => {
    render(<FormPage />);
    expect(screen.getByText(/Formulir Buku Baru Test/i)).toBeInTheDocument();
  });
  test("text label", () => {
    render(<FormPage />);
    expect(screen.getByText(/Judul/i)).toBeInTheDocument();
    expect(screen.getByText(/Pengarang/i)).toBeInTheDocument();
  });
});

describe("Event Handler FormPage", () => {
  test("Form Judul", () => {
    render(<FormPage />);
    fireEvent.input(screen.getByRole("textbox", { name: /judul/i }), {
      target: { value: "Buku Hebat" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /pengarang/i }), {
      target: { value: "Kampus Merdeka" },
    });
    expect(screen.getByText(/Buku Hebat/i)).toBeInTheDocument();
  });
});
