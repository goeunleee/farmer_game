import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import FarmerIcon from "./component/farmer.svg";
import FarmerGame from "./component/game";

export default function App() {
	return (
		<View style={styles.container}>
			<FarmerIcon width={100} height={100} />
			<Text>농부 게임</Text>
			<Text>화면위의 당근을 손으로 쓸어보세요</Text>
			{/* <Button>버튼</Button> */}
			{/* 웹뷰에서는안보임 */}
			{/* <StatusBar style="auto" /> */}
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
		marginTop: 10,
	},
});
