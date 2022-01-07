import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
	font-size: 16px;
	font-size: ${(props) => props.size}px;
	margin-top: ${(props) => props.marginTop}px;

	font-family: Roboto, sans-serif;
	text-align left;
	color: ${(props) => (props.color ? props.color : props.theme.colors.textColor)};
	display: flex;

	font-weight: ${(props) => (props.bold ? "600" : "500")};
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding:2px;

	border-bottom: ${(props) => props.borderBottom && "1px solid lightGrey"};
	padding: ${(props) => props.borderBottom && "8px"};
	border-width:100%;


	white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
	text-transform: :first-letter{
  text-transform: capitalize;
  white-space: pre-wrap; 
   word-wrap: break-word;
  
   flex-wrap:wrap;
}
		// margin-right:10px;

		
	&:hover {
		color: ${(props) => props.hovered && "var(--linkColor)"};
		cursor:pointer;
	
	}

		
	
`;

const SubTitle = styled.div`
	font-size: 13px;
	color: darkGrey;
	display: flex;
	flex-wrap: wrap;
	white-space: wrap;
`;

const Text = ({
	title,
	size,
	marginTop = 0,
	bold = false,
	children,
	subTitle = "",
	color,
	borderBottom,
	hovered,
	onClick,
	wrap
}) => {
	return (
		<TextContainer
			size={title ? 22 : size}
			marginTop={marginTop}
			bold={bold}
			color={color}
			borderBottom={borderBottom}
			hovered={hovered}
			onClick={onClick}
			wrap={wrap}
		>
			{title} {children}
			{subTitle && <SubTitle>{subTitle}</SubTitle>}
		</TextContainer>
	);
};

export default Text;
