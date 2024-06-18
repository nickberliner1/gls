import React, { useState } from "react";
import Modal from "./components/Modal";

const App: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<button onClick={openModal}>Open Modal</button>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<h2>Modal Content</h2>
				<p>This is a modal. Click the button to close it.</p>

				{/* Un-comment these lines to see scrollable content */}

				{/* <p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p>
				<p>This is a modal. Click the button to close it.</p> */}
			</Modal>
		</div>
	);
};

export default App;
