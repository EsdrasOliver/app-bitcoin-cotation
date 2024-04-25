import React, { Fragment } from "react"
import { ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native"

import styles from "./styles"
import QuotationsItems from "./QuotationsItem"

export default function QuotationsList(props) {

    const daysQuery = props.filterDay
    
    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(7)}
                >
                    <Text style={styles.textButtonQuery}>7d</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(15)}
                >
                    <Text style={styles.textButtonQuery}>15d</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(30)}
                >
                    <Text style={styles.textButtonQuery}>30d</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(90)}
                >
                    <Text style={styles.textButtonQuery}>3m</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(180)}
                >
                    <Text style={styles.textButtonQuery}>6m</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <FlatList
                    scrollEnabled={false} 
                    data={props.listTransactions} 
                    renderItem={({item}) => {
                        return <QuotationsItems valor={item.valor} data={item.data} />
                    }}
                />
            </ScrollView>
        </Fragment>
    )
}