import React from "react";
import ReactDom from "react-dom";
import { FaWindowClose } from "react-icons/fa";

import styled from "styled-components/macro";
import { COLORS } from "../constants";
export default function Modal({ isOpen, header = "Modal Header", closeModal, children }) {
	if (!isOpen) return null;
	return ReactDom.createPortal(
		<Wrapper onClick={closeModal}>
			<ModalWrapper>
				<ModalHeader>
					{header}
					<CloseIcon onClick={closeModal}>
						<FaWindowClose color={COLORS.primary} />
					</CloseIcon>
				</ModalHeader>
				{children}
			</ModalWrapper>
		</Wrapper>,
		document.getElementById("portal")
	);
}

const Wrapper = styled.div`
	position: fixed;
	isolation: isolate;
	z-index: 1000;
	background: rgb(0, 0, 0, 0.6);
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

const ModalWrapper = styled.div`
	position: fixed;
	z-index: 1100;

	background: white;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	padding: 1.5rem 2rem;
`;

const ModalHeader = styled.h2`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;
const CloseIcon = styled.span`
	top: 0;
	right: 0;
	margin-left: 4rem;
	cursor: pointer;
`;
