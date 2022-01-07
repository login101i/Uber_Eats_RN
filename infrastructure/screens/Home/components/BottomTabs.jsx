import React from "react";
import styled from "styled-components/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { SafeAreaView, TouchableOpacity } from "react-native";
import { Text, Flex } from "../../../../components";

const Container = styled.View`
	height: 75px;
	width: 100%;
`;
const Icon = ({ icon, text }) => {
	return (
		<Flex column align>
			<TouchableOpacity>
				<FontAwesome5
					name={icon}
					size={25}
					style={{
						marginBottom: 3,
						alignSelf: "center"
					}}
					color="orange"
				/>
				<Text bold>{text}</Text>
			</TouchableOpacity>
		</Flex>
	);
};

const BottomTabs = () => {
	return (
		<Container>
			<Flex space>
				<Icon icon="home" text="Home" />
				<Icon icon="search" text="Browse" />
				<Icon icon="shopping-bag" text="Grocery" />
				<Icon icon="receipt" text="Orders" />
				<Icon icon="user" text="Account" />
			</Flex>
		</Container>
	);
};

export default BottomTabs;
