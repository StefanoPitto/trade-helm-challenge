import styled from "styled-components";

export const ItemContainer = styled.span`
	width: 560px;
	border-radius: 5px;
	border: 1px solid #8383836a;
	margin-top: 6px;
	padding: 6px 22px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 0px 20px 2px rgba(77, 77, 77, 0.521);
	font-weight: bold;
`;

export const RemoveButton = styled.span`
	color: #df0000;
	margin: 6px 12px;
	font-weight: bold;
	&:hover {
		cursor: pointer;
	}
`;
