import { StyleSheet, Text, View,Image,SafeAreaView,TextInput, Button,  Platform, StatusBar,Pressable, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons'
import { useState } from 'react';

const colorLabel  = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorTitle = "rgba(35, 161, 255, 1)"

const Register = ({navigation}: {navigation: any})=>
{
    const [viewPassword,setViewPassword] = useState(false)
    return(
        <SafeAreaView style={styles.signContainer}>
            <Image 
            source={require('../../assets/logo-pika.png')} 
            style={styles.logo}/>
            <Text style={styles.welcomeText}>Wellcome to Pikabook!</Text>
            <View style={styles.inputContainer}>
                <View>
                <TextInput 
                placeholder='Email'
                textContentType='emailAddress'
                style={styles.labelInput}
                />
                </View>
               <View style={styles.lineSign}></View>
                <View>
                <TextInput
                placeholder='Password' 
                textContentType='password'
                secureTextEntry={!viewPassword}
                style={styles.labelInput}
                />
                <Icon 
                name={viewPassword ===true ? 'eye' :'eye-off'} 
                onPress={()=>setViewPassword(!viewPassword)}
                style = {styles.lableInputIcon}
                >
                </Icon>
                </View>
            </View>
            <View style={styles.orContainer}>
                <View style={styles.lineOr}></View>
                <Text style={styles.orText}>OR</Text>
            </View>
            <View style={styles.signSocialAccContainer}>
                <TouchableOpacity style={styles.signButtonAcc}>
                <Image 
                source={require('../../assets/apple-logo.png')} 
                style={styles.socialLogo}/>
                    <Text style={styles.labelSocial}>Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signButtonAcc}>
                    <Image 
                    source={require('../../assets/fb-logo.png')} 
                    style={styles.socialLogo}/>
                    <Text style={styles.labelSocial}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signButtonAcc}>
                    <Image 
                    source={require('../../assets/google-logo.png')} 
                    style={styles.socialLogo}/>
                    <Text style={styles.labelSocial}>Google</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonSign} onPress={()=> navigation.navigate('SplashScreen')}>
            <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <View style={styles.separateZone}>
                <View style={styles.lastTextContainer}>
                <Text style={styles.lastText}>By clicking "Create account" you agree to the </Text>
                </View>
                <View style={styles.termContainer}>
                <TouchableOpacity>
                <Text style={styles.lastTextLink}>Terms</Text>
                </TouchableOpacity>
                <Text style={styles.lastText}> and </Text>
                <TouchableOpacity>
                <Text style={styles.lastTextLink}>Privacy Policy</Text>
                </TouchableOpacity>
                </View>
               
                </View>
               
                <View style={styles.lastTextContainer}>
                <Text style={styles.lastText}>Already have an account? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.lastTextLink}>
                     Sign in
                </Text>
                    </TouchableOpacity>
                </View>
               
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        signContainer:
        {
            height:'100%',
            width:'100%',
            display:'flex',
            alignItems:'center',
            paddingTop: Platform.OS ==='ios'? 0: StatusBar.currentHeight,
            justifyContent:'space-around',       
            backgroundColor:'rgba(246, 251, 255, 1)',
            textAlign:'center'
        },
        logo:
        {
            height:'25%',
            width:'25%'
        },
        welcomeText:
        {
            color: colorTitle,
            fontSize:35,
            fontWeight:'700',
            width:'83%',
            textAlign:'center'
        },
        inputContainer:
        {
            width:300,
            borderTopWidth:1.5,
            borderBottomWidth:1.5,
            borderRightWidth:1.5,
            borderLeftWidth:1.5,
            borderRadius:8,
            borderStyle:'solid',
            borderColor: colorBorder,
            height:80,
            display:'flex',
            justifyContent:'space-around',
            backgroundColor:'white'

        },
        labelInput:
        {
            color:colorLabel,
            marginLeft:10,
            marginRight:10,
            fontSize:13,
            fontWeight:'700',
            width:'85%'
            
        },
        lableInputIcon:
        {
            color:colorLabel,
            marginLeft:10,
            marginRight:10,
            fontSize:13,
            fontWeight:'700',
            zIndex:2,
            position:'absolute',
            right:0,
            height:'100%',
            width:16
        },
        lineSign:
        {
           
            height:1.5,
            width:'100%',
            backgroundColor:colorBorder
        },
        orContainer:
        {
            width:'80%',
            alignItems:'center',
            backgroundColor:'rgba(103, 189, 254, 1)'
        },
        lineOr:
        {
            height:1.8,
            width:'100%',
            backgroundColor:colorBorder
        },

        orText:
        {
            width: 50,
            textAlign:'center',
            zIndex:3,
            fontWeight:'700',
            position:'absolute',
            fontSize:16,
            top:-11,
            backgroundColor:'rgba(246, 251, 255, 1)',
            color:'#a9a9a9'

        },
        socialLogo:
        {
            height:25,
            width:25
        },
        signSocialAccContainer:
        {
            display:'flex',
            flexDirection:'row',
            width:300,
            justifyContent:'space-between',
            height:36
        },
        signButtonAcc:
        {
            borderTopWidth:1.5,
            borderBottomWidth:1.5,
            borderRightWidth:1.5,
            borderLeftWidth:1.5,
            borderRadius:8,
            borderStyle:'solid',
            borderColor:colorBorder,
            width:92,
            alignItems:'center',
            height:46,
            padding:2,
            backgroundColor:'white'
        },
        labelSocial:{
            marginTop:2,
            fontSize:11,
            color:colorLabel
        },
        iconAcc:
        {
            fontSize:17
        },
        buttonSign:
        {
            borderRadius:7,
            width:250,
            backgroundColor:'rgba(103, 189, 254, 1)',
            color:'white',
            height:39,
            display:'flex',
            alignItems:'center',
            marginBottom:0,
            
        },
        buttonText:{
            color:'white',
            fontSize:16,
            lineHeight:39,
            fontWeight:'700'
        },
        footer:
        {
            bottom:40,
            display:'flex',
            alignItems:'center'
        },
        lastTextContainer:
        {
            display:'flex',
            flexDirection:'row',
            width:'100%'
        },
        lastText:
        {
            fontSize:17,
            fontWeight:'500'
            
        },
        lastTextLink:
        {
            fontSize:17,
            color:colorTitle,
            fontWeight:'500' 
        },
        separateZone:
        {
            display:'flex',
            flexDirection:'column',
            width:360,
            flexWrap:'wrap',
            alignItems:'center',
            marginBottom:10

        },
        termContainer:
        {
            display:'flex',
            flexDirection:'row'
        }
    }
)



export default Register;