import React, { useRef } from "react";
import { View, Animated, PanResponder, StyleSheet, Dimensions } from "react-native";
import Carrot from "./carrot";
import SoilBg from "./asset/soil.svg";

const FarmerGame = () => {
	const screenWidth = Dimensions.get("window").width;
	const screenHeight = Dimensions.get("window").height;
	const margin = 0;
	const itemsPerRow = 6;
	const vegiSize = screenWidth / itemsPerRow;
	const numOfVegi = 30;

	// Position and opacity management
	const positions = useRef(Array.from({ length: numOfVegi }, () => new Animated.Value(0))).current;
	const opacities = useRef(Array.from({ length: numOfVegi }, () => new Animated.Value(1))).current;

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: (e, { moveX: x, moveY: y }) => {
				positions.forEach((position, index) => {
					const row = Math.floor(index / itemsPerRow);
					const col = index % itemsPerRow;
					const circleX = col * vegiSize;
					const circleY = row * vegiSize + vegiSize * 4; // 여기에 보정을 추가

					// 터치 위치와 당근 위치가 일치하는지 확인
					if (x > circleX && x < circleX + vegiSize && y > circleY && y < circleY + vegiSize) {
						Animated.parallel([
							Animated.timing(position, { toValue: -100, duration: 700, useNativeDriver: false }),
							Animated.timing(opacities[index], { toValue: 0, duration: 700, useNativeDriver: false }),
						]).start();
					}
				});
			},
		})
	).current;

	return (
		<View style={styles.container} {...panResponder.panHandlers}>
			<SoilBg width={screenWidth} height={screenHeight + vegiSize} style={styles.soilBg} />
			{positions.map((position, index) => (
				<Animated.View
					key={index}
					style={{
						transform: [{ translateY: position }],
						opacity: opacities[index],
						top: Math.floor(index / itemsPerRow) * vegiSize + vegiSize * 1.5, // 첫 줄을 아래로 내리기 위한 보정
						left: (index % itemsPerRow) * vegiSize,
						position: "absolute",
						width: vegiSize,
						height: vegiSize,
					}}
				>
					<Carrot vegiSize={vegiSize} />
				</Animated.View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 30,
		flex: 1,
		position: "relative",
		width: "100%",
		height: "100%",
	},
	soilBg: {
		position: "absolute",
		top: 0,
		left: 0,
	},
});

export default FarmerGame;
