import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View, ScrollView, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import firebase from "../../../firebase";
import MenuItems from "../../screens/DetailsScreen/components/MenuItems";

import { Text, Flex, SafeArea } from "../../../components";

import { useSelector } from "react-redux";

const Container = styled.View`
	display: flex;
	align-items: center;
`;

const Button = styled.TouchableOpacity`
	background-color: black;
	width: 260px;
	height: 50px;
	border-radius: 20px;
	position: relative;
	bottom: 80px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	z-index: 999;
`;

const OrderCompleted = ({ navigation }) => {
	const [lastOrder, setLastOrder] = useState({
		items: [
			{
				title: "Bologna",
				description: "With butter lettuce, tomato and sauce bechamel",
				price: "$13.50",
				image:
					"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
			}
		]
	});

	const { items, restaurantName } = useSelector(
		(state) => state.cart.selectedItems
	);
	console.log(items);

	const total = items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);
	console.log(total);

	const totalUSD = total.toLocaleString("en", {
		style: "currency",
		currency: "USD"
	});
	console.log(totalUSD);

	useEffect(() => {
		const db = firebase.firestore();
		const unsubscribe = db
			.collection("orders")
			.orderBy("createdAt", "desc")
			.limit(1)
			.onSnapshot((snapshot) => {
				snapshot.docs.map((doc) => {
					setLastOrder(doc.data());
				});
			});

		return () => unsubscribe();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			{/* green checkmark */}
			<View
				style={{
					margin: 15,
					alignItems: "center",
					height: "100%"
				}}
			>
				{/* <LottieView
					style={{ height: 22, alignSelf: "center", marginBottom: "30px"}}
					source={require("../../../assets/animations/check-mark.json")}
					autoPlay
					speed={0.5}
					loop={false}
				/> */}
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					Your order at {restaurantName} has been placed for {totalUSD}
				</Text>
				<ScrollView>
					<MenuItems
						foods={lastOrder.items}
						hideCheckbox={true}
						marginLeft={10}
					/>
					{/* <LottieView
						style={{ height: 200, alignSelf: "center" }}
						source={require("../../../assets/animations/cooking.json")}
						autoPlay
						speed={0.5}
					/> */}
				</ScrollView>
				<Button onPress={() => navigation.navigate("home")}>
					<Text bold color="white">Go to Home Page</Text>
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default OrderCompleted;
