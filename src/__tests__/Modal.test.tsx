import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Modal from "../components/Modal";

test("should call onClose prop function when close button is clicked", () => {
	const mockClose = jest.fn();
	render(<Modal isOpen={true} onClose={mockClose} children="Test Content" />);

	const closeButton = screen.getByRole("button", { name: /Close/i });
	fireEvent.click(closeButton);

	expect(mockClose).toHaveBeenCalledTimes(1);
});

test("should apply fade-in class when isOpen is true", async () => {
	render(<Modal isOpen={true} onClose={() => {}} children="Test Content" />);
	await waitFor(() => {
		expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
	});
	const modalOverlay = screen.getByTestId("modal-overlay");
	expect(modalOverlay).toHaveClass("fade-in");
});

test("should not be visible when isOpen is false", async () => {
	render(<Modal isOpen={false} onClose={() => {}} children="Test Content" />);

	const modalOverlay = screen.queryByTestId("modal-overlay");

	expect(modalOverlay).not.toBeInTheDocument();
});
