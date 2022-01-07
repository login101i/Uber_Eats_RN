import React, { useState } from "react";
import styled from "styled-components/native";

import { SafeAreaView, TouchableOpacity } from "react-native";
import { Text, Flex } from "../../../../components";

const CustomOpacity = styled.TouchableOpacity`
	background-color: ${(props) =>
		props.background ? props.background : "white"};
	padding: 6px 16px;
	border-radius: 30px;
	margin: 10px 0px;
`;

const HeaderButton = ({ title, background, color, onClick }) => {
	return (
		<CustomOpacity onPress={onClick} background={background}>
			<Text bold color={color}>
				{title}
			</Text>
		</CustomOpacity>
	);
};

const HeaderTabs = ({ activTab, setActivTab }) => {
	return (
		<Flex align>
			<HeaderButton
				title="Delivery"
				background={activTab === "Delivery" ? "black" : "white"}
				color={activTab === "Delivery" ? "white" : "black"}
				onClick={() => setActivTab("Delivery")}
			/>
			<HeaderButton
				title="Pickup"
				background={activTab === "Pickup" ? "black" : "white"}
				color={activTab === "Pickup" ? "white" : "black"}
				onClick={() => setActivTab("Pickup")}
			/>
		</Flex>
	);
};

export default HeaderTabs;
