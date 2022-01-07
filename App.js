import React from "react";
import { ThemeProvider } from "styled-components";

import { StyleSheet, Text, View } from "react-native";
import { SafeArea } from "./components";
import theme from "./infrastructure/theme";

import RootNavigation from "./navigation";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<SafeArea>
				<RootNavigation />
			</SafeArea>
		</ThemeProvider>
	);
}
