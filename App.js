import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import FarmerGame from "./component/game";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>farmer game!</Text>
			{/* <Button>버튼</Button> */}
			{/* 웹뷰에서는안보임 */}
			<StatusBar style="auto" />
			{/* 웹뷰에서는안보임 */}
			<FarmerGame />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
	},
});
