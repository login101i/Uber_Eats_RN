import React from "react";
import styled from "styled-components/native";
import About from "./components/About";
import MenuItems from "./components/MenuItems";
import ViewCart from "./components/ViewCart";
import { Divider } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Text, Flex } from "../../../components";

const image =
	"https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";

const description = 'Thai price "•  + price : ';

const Container = styled.View`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const GoBackContainer = styled.View`
	width: 40px;
	height: 40px;
	position: absolute;
	top: 20px;
	left: 20px;
`;

const foods = [
	{
		title: "Lasagna",
		description: "With butter lettuce. and some other stuff",
		price: "$13.50",
		image:
			"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
	},
	{
		title: "Tandoori Chicken",
		description:
			"Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
		price: "$19.20",
		image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg"
	},
	{
		title: "Chilaquiles",
		description:
			"Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
		price: "$14.50",
		image:
			"https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg"
	},
	{
		title: "Chicken Caesar Salad",
		description:
			"One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
		price: "$21.50",
		image:
			"https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da"
	},
	{
		title: "Lasagna",
		description: "With butter lettuce, tomato and sauce bechamel",
		price: "$13.50",
		image:
			"https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg"
	}
];

const GoBackIcon = ({ navigation }) => {
	return (
		<GoBackContainer>
			<TouchableOpacity onPress={() => navigation.navigate("Home")}>
				<MaterialCommunityIcons name="heart-outline" size={25} color="white" />
			</TouchableOpacity>
		</GoBackContainer>
	);
};

const DetailsScreen = ({ route, navigation }) => {
	return (
		<>
			<About image={image} title="ONe Note" route={route} />
			<Divider width={2} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<MenuItems foods={foods} restaurantName={route.params.name} checkBox/>
			</ScrollView>

			<ViewCart navigation={navigation} restaurantName={route.params.name} />
			<GoBackIcon navigation={navigation} />
		</>
	);
};

export default DetailsScreen;
