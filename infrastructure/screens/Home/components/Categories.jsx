import React from "react";
import styled from "styled-components/native";

import { Text, Flex } from "../../../../components";

import { ScrollView, Image } from "react-native";

const CustomScrollView = styled.ScrollView`
	background-color: white;
	margin-top: 10px;
`;

const CustomImage = styled.Image`
	width: 50px;
	height: 50px;
	resize-mode: contain;
`;

const ImageContainer = styled.View`
	margin: 5px 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const categories = [
	{
		image: require("../../../../assets/images/shopping-bag.png"),
		text: "Pick-up"
	},
	{
		image: require("../../../../assets/images/soft-drink.png"),
		text: "Soft Drinks"
	},
	{
		image: require("../../../../assets/images/bread.png"),
		text: "Bakery Items"
	},
	{
		image: require("../../../../assets/images/fast-food.png"),
		text: "Fast Foods"
	},
	{
		image: require("../../../../assets/images/deals.png"),
		text: "Deals"
	},
	{
		image: require("../../../../assets/images/coffee.png"),
		text: "Coffee & Tea"
	},
	{
		image: require("../../../../assets/images/desserts.png"),
		text: "Desserts"
	}
];

const Categories = () => {
	return (
		<CustomScrollView horizontal showsHorizontalScrollIndicator={false}>
			{categories.map((category, index) => (
				<ImageContainer key={index}>
					<CustomImage source={category.image} />
					<Text bold>{category.text}</Text>
				</ImageContainer>
			))}
		</CustomScrollView>
	);
};

export default Categories;
