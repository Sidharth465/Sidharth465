import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }} >
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>

                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#041E42" }}>Login In to Your Account  </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 5
                    }} >
                        <MaterialIcons style={{ marginLeft: 8, color: "grey" }} name="email" size={24} color="black" />
                        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ color: "grey", marginVertical: 10, width: 300, fontSize: email ? 18 : 18 }} placeholder='Enter Your Email' />
                    </View>

                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 5
                    }} >
                        <MaterialIcons style={{ marginLeft: 8, color: "grey" }} name="lock" size={24} color="black" />
                        <TextInput value={Password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={{ color: "grey", marginVertical: 10, width: 300 ,fontSize:Password?18:18}} placeholder='Enter Your Password ' />
                    </View>

                </View>
                <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: 500 }}> Forget Password</Text>
                </View>
                <View style={{ marginTop: 80 }} />
                <Pressable style={{ width: 200, backgroundColor: "#FEBE10", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 18, fontWeight: "bold" }}>Login</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate("Register")} style={{ marginTop: 15 }} >
                    <Text style={{ textAlign: "center", color: "grey", fontSize: 16 }}>Don't have an Account?<Text style={{color:"#007FFF"}}> Sign Up</Text></Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})