import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Button from '../../components/Button'
import Cut from '../../components/Cut'
const Recoverypass = () => {
    const navigation = useNavigation();
    const [isVissible, setIsVissible] = useState()
    
    return (
        <View style={styles.container}>

            <View style={{ marginLeft: 50 }}>
                <Image
                    source={require('../../assets/images/bubble1.png')}
                />
                <View style={styles.bob}>
                    <Image source={require('../../assets/images/bubble2.png')} />
                </View>





            </View>


            <View style={{
                width: 122, height: 122, borderRadius: 122,
                backgroundColor: "#FFFFFF", backgroundColor: "#ffff", alignItems: "center", justifyContent: "center",
                alignSelf: "center", transform: [{ translateY: -22 }]
            }}>
                <Image
                    source={require('../../assets/images/pro.png')} style={{ width: 106, height: 106, borderRadius: 106 }}
                />
            </View>
            <Text style={{ textAlign: "center", fontSize: 21, fontWeight: "bold", color: '#202020' }}>
                Password Recovery
            </Text>

            <Text style={{ textAlign: "center", marginTop: 20, fontSize: 19, fontWeight: "light" }}>
                How you would like to restore{'\n'}your password?
            </Text>

            <TouchableOpacity onPress={()=> setIsVissible(!isVissible)}  activeOpacity={0.6} style={{ width: 199, height: 40, backgroundColor: "#E5EBFC", marginTop: 35, alignSelf: "center", borderRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <View style={{ flex: 1, paddingLeft: 25 }}>
                    <Text style={{ color: "#004CFF", fontSize: 15, fontWeight: "bold", textAlign: "center" }}>
                        sms
                    </Text>
                </View>
                <TouchableOpacity onPress={()=> setIsVissible(!isVissible)} style={{ paddingRight: 15 }}>
                    {isVissible?(<Image source={require('../../assets/images/Check1.png')} />):(<Image source={require('../../assets/images/Check2.png')}/>)}
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsVissible(!isVissible)} activeOpacity={0.6} style={{ width: 199, height: 40, backgroundColor: "#F8CECE", marginTop: 15, alignSelf: "center", borderRadius: 20, alignItems: "center", flexDirection: "row" }}>

                <View style={{ flex: 1, paddingLeft: 25 }}>
                    <Text style={{ color: "#000000", fontSize: 15, fontWeight: "medium", textAlign: "center" }}>
                        Email
                    </Text>
                </View>

                <TouchableOpacity onPress={() => setIsVissible(!isVissible)} style={{ paddingRight: 15 }}>
                    {isVissible ? (<Image source={require('../../assets/images/Check2.png')} />) : (<Image source={require('../../assets/images/Check1.png')} />)}
                </TouchableOpacity>

            </TouchableOpacity>
<View style={{flex:1,justifyContent:"center"}}>
    <Button
    text={'Next'} onPresss={()=> navigation.navigate('Smscode')}
    />
    
<Cut onPress={()=>navigation.goBack('Password')}/>
</View>
        </View>
    )
}

export default Recoverypass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    bob: {
        position: "absolute",
        top: 0,
        right: 0,

    },
})