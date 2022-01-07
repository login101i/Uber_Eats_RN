import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";

import { Text, Flex } from "../../../../components";
import { useSelector } from "react-redux";
import { Divider } from "react-native-elements";
import firebase from "../../../../firebase";
import LottieView from "lottie-react-native";

import Modal from "@mui/material/Modal";

const TotalContainer = styled.View`
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

const CheckoutContainer = styled.View`
	position: absolute;
	bottom: 0%;
	left: 0%;
	width: 100%;
	background-color: #222;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	background-color: white;
`;

const OrederedItemsContainer = styled.View`
	width: 250px;
	min-height: 400px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const OrderedItem = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	width: 100%;
	border-bottom-color: black;
	border-bottom-width: 2px;
`;
const ButtonContainer = styled.TouchableOpacity`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const ButtonCheckout = styled(TotalContainer)`
	width: 300px;
	cursor: pointer;
	color: white;
`;

const LoadingContainer = styled.View`
	background-color: black;
	position: absolute;
	opacity: 0.6;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

const ViewCart = ({ navigation, restaurantName }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	console.log(modalVisible);
	const { items } = useSelector((state) => state.cart.selectedItems);
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

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const addOrderToFirebase = () => {
		setLoading(true);
		const db = firebase.firestore();
		db.collection("orders")
			.add({
				items: items,
				restaurantName: restaurantName,
				createdAt: firebase.firestore.FieldValue.serverTimestamp()
			})
			.then(() => {
				setTimeout(() => {
					setLoading(false);
					navigation.navigate("OrderCompleted");
				}, 2500);
			});
	};

	const checkoutModalContent = () => {
		return (
			<CheckoutContainer>
				<OrederedItemsContainer>
					<Text>Hello from checkout content</Text>
					{items.map((item, index) => (
						<React.Fragment key={index}>
							<OrderedItem key={index}>
								<Text>{item.title}</Text>
								<Text>{item.price}</Text>
							</OrderedItem>
							<Divider width={2} />
						</React.Fragment>
					))}
				</OrederedItemsContainer>
				<TouchableOpacity
					onPress={() => {
						addOrderToFirebase();
						setModalVisible(false);
						console.log("dodaje do firebase");
					}}
				>
					<ButtonCheckout>
						<Text color="white" title="Go to Cart"></Text>
						<Flex align>
							<Text>Total</Text>
							<Text>{totalUSD}</Text>
						</Flex>
					</ButtonCheckout>
				</TouchableOpacity>
			</CheckoutContainer>
		);
	};

	return (
		<>
			<Modal
				keepMounted
				open={modalVisible}
				onClose={handleClose}
				aria-labelledby="keep-mounted-modal-title"
				aria-describedby="keep-mounted-modal-description"
			>
				{checkoutModalContent()}
			</Modal>
			<ButtonContainer>
				{total ? (
					<TouchableOpacity onPress={() => setModalVisible(true)}>
						<TotalContainer>
							<Text uppercase bold>
								Total
							</Text>
							<Text uppercase bold>
								{totalUSD}
							</Text>
						</TotalContainer>
					</TouchableOpacity>
				) : (
					<></>
				)}
			</ButtonContainer>
			{loading ? (
				<LoadingContainer>
					<Text bold title="Processing...."/>
					{/* <LottieView
						style={{ height: 200 }}
						source={require("../../../../assets/animations/scanner.json")}
						autoPlay
						speed={3}
					/> */}
				</LoadingContainer>
			) : (
				<></>
			)}
		</>
	);
};

export default ViewCart;
