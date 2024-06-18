import React, { useState, useEffect } from "react";
import "./Modal.css";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		if (isOpen) {
			setIsVisible(true);
		} else {
			timeout = setTimeout(() => setIsVisible(false), 300);
		}

		return () => clearTimeout(timeout);
	}, [isOpen]);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={`modal-overlay ${isOpen ? "fade-in" : "fade-out"}`}
			data-testid="modal-overlay"
		>
			<div className="modal-content">
				<div className="modal-header">
					<button onClick={onClose} className="close-button">
						Close
					</button>
				</div>
				<div className="modal-body">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
