import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const Card = (props) => {
    const { cardData } = props;
    const {name}=props.cardData;
    console.log(props.cardData)
    return (
        <View style={styles.cardContainer}>
            <View style={{ width: "120px"}}>
                <Image
                    source={"png" in cardData.coatOfArms ? { uri: cardData.coatOfArms.png } : require('../../assets/splashImg.jpg')}
                    style={{ height: "100px", width: "100px" }}
                />
            </View>
            <View>
                <Text style={{overflow:"break-word"}}>{name.official}</Text>
                <Text >{name.official}</Text>
                <Text >{name.official}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    cardContainer:{ 
        flexDirection: "row", 
        justifyContent: "left",
        marginBottom: "5px", 
        backgroundColor: "lightgrey", 
        padding: "10px" 
    }
});

export default Card;