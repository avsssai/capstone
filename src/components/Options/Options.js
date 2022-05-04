import React from "react";
import styled from "styled-components/macro";

// function Checkbox({ item }) {
// 	return (
// 		<Wrapper>
// 			<CheckBoxStyled type='radio' name={item} />
// 			<Label>{item}</Label>
// 		</Wrapper>
// 	);
// }

export default function Options({ items, header, handleChange, stateName, checkedName }) {
	// function handleChange(e) {
	// 	console.log(e.target.value);
	// }
	return (
		<Option>
			<SectionHeader>{header}</SectionHeader>
			<OptionList>
				{items.map((item) => (
					// <Checkbox item={item} key={item} name={item} />
					<div key={item}>
						<input
							value={item}
							name={stateName}
							type='radio'
							checked={item === checkedName}
							onChange={(e) => handleChange(e, stateName)}
						/>
						{item}
					</div>
				))}
			</OptionList>
		</Option>
	);
}

const Option = styled.fieldset`
	border: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const OptionList = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const Label = styled.label``;
const CheckBoxStyled = styled.input`
	margin-right: 0.5rem;
`;
const SectionHeader = styled.legend`
	font-weight: 600;
	font-size: 1.25rem;
`;
const Wrapper = styled.div``;
