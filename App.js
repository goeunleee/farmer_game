import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!우하하하하</Text>
			<Button>버튼</Button>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
