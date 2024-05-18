import React from 'react';
import { StyleSheet, Platform, View, Text } from "react-native";

type Props = {
    update: string,
    date: Date,
}

export default function HomePageNotification({update, date}: Props){
    return (
        <View>
            <Text style={[{fontSize:14}]}><Text style={[{color:'#F75252', fontWeight:500}]}>UPDATE</Text> {date.toLocaleDateString('en-US')} {update} </Text>
        </View>
    )
}