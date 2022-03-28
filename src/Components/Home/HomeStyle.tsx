import styled from "styled-components";

export const HomeContainer = styled.div`
	background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
	min-height: 100vh;
	padding: 40px;
	text-align: center;
	img {
		width: 128px;
		height: 128px;
		vertical-align: middle;
		object-fit: contain;
	}
`;

export const Button = styled.p`
	width: 100%;
	font-size: 32px;
	font-weight: bold;
	color: white;
	background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
	&:hover {
		cursor: pointer;
	}
	height: 44px;
	margin: 2px 0;
	border: 1px solid #83838329;
	padding: 2px;
	border-radius: 5px;
`;

export const ListContainer = styled.div`
	margin: 6px 0;
`;

export const InnerContainer = styled.div`
	margin: 0 auto;
	max-width: 600px;
	text-align: center;
`;

export const AddSection = styled.div`
	input {
		text-align: center;
		width: 560px;
		border-radius: 5px;
		outline: none;
		border: 1px solid #8383836a;
		height: 40px;
		display: block;
		text-align: left;
		padding: 0 22px;
		font-weight: bold;
		font-size: 20px;
	}
`;
