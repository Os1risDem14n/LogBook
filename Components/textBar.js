import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

const RzTextBar = (props) => {
    return (
        <Text style={styles.textBar}>{props.textBar}</Text>
    )
}

const styles = StyleSheet.create({
    textBar:{
        textAlign: 'center',
        fontSize:15,
        fontStyle: 'italic',
        color: "#1F51FF",
        marginTop:10,
        marginBottom:10
    }
})

export default RzTextBar