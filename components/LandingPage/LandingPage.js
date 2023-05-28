import React from 'react';
import { View, Text, Button } from 'react-native';
import Card from './Card';
import { TextInput } from 'react-native-web';

const LandingPage = (props) => {
    const {data,setData}=props;
    return (
        <View style={{width:"96%",marginHorizontal:"6px"}}>
            <View style={{justifyContent: 'center', flexDirection:"row", alignItems: 'center' , paddingVertical:"5px"}}>
                <TextInput placeholder="Enter country name.." style={{flex:1}}/>
                <Button title='Search' style={{}}/>
            </View>
            <View style={{marginBottom:"5px"}}>
                {data.length>0 && data.map((countryInfo,i)=><Card key={i} cardData={countryInfo}/>)}
            </View>
        </View>

    );
};



export default LandingPage;