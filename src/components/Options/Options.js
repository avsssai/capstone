import React from "react";
import styled from "styled-components/macro";
function Checkbox({ item }) {
	return (
		<Wrapper>
			<CheckBoxStyled type='checkbox' name={item} />
			<Label>{item}</Label>
		</Wrapper>
	);
}

export default function Options({ items }) {
	return (
		<Option>
			{items.map((item) => (
				<Checkbox item={item} />
			))}
		</Option>
	);
}

const Option = styled.fieldset`
	border: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Label = styled.label``;
const CheckBoxStyled = styled.input`
	margin-right: 0.5rem;
`;

const Wrapper = styled.div``;
