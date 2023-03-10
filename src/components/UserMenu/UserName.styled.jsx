import styled from "styled-components";

export const LogOut = styled.div`
	display: flex;
	align-items: center;
`;

export const LogText = styled.p`
	margin-right: 20px;
	font-size: 16px;
	font-weight: 600;
	span {
		font-size: 19px;
		color: orange;
		margin-left: 10px;
	
	}

`;

export const LogButtton = styled.button`
cursor: pointer;
	display: flex;
	align-items: center;
	padding: 3px 15px;
	font-size: 16px;
	font-weight: 500;
	border: none;
	border-radius: 10px;
	transition: color 250ms linear, background-color 250ms linear;
	&:hover{
		background-color: black;
		color: white;
	}

`