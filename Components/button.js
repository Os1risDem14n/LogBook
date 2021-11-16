import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const RzButton = (props) => {
    return (
        <TouchableOpacity 
        style={styles.button} 
        onPress={props.handlePress}>

        <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: 300,
        backgroundColor: "#1F51FF",
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
    },
    text: {
        fontSize: 30,
        color: "white",
        fontWeight: "normal",
    },
})

export default RzButton