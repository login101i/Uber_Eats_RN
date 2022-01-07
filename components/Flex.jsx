import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.column ? "column" : "row")};

	justify-content: ${(props) => (props.space ? "space-between" : "center")};

	align-items: ${(props) => (props.align ? "center" : props.align)};
	padding: 0px 0px;
	width: ${(props) => (props.fullWidth ? "100%" : "auto")};
	align-self: ${(props) => (props.alignSelf ? "center" : "left")};
	background-color: ${(props) => (props.background ? props.background : "")};
	width: auto;
	border: ${(props) => (props.border ? "2px solid black" : "")};
	// flex: 1;
`;

const FlexRow = ({
	space,
	style,
	align,
	column = false,
	fullWidth,
	children,
	alignSelf,
	background,
	border
}) => {
	return (
		<Container
			style={style}
			space={space}
			align={align}
			column={column}
			fullWidth={fullWidth}
			alignSelf={alignSelf}
			background={background}
			border={border}
		>
			{children}
		</Container>
	);
};

export default FlexRow;
