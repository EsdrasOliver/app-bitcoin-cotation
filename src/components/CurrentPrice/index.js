import { Text, View } from "react-native";
import styles from "./styles"

export default function CurrentPrice(props) {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ {props.last}</Text>
            <Text style={styles.textPrice}>ultima cotacao</Text>
        </View>
    )
}