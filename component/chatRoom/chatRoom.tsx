import { StyleSheet, Text, View,Image,TextInput, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView, FlatList,SectionList,KeyboardAvoidingView  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import {MaterialCommunityIcons as MaterialCommunityIcons} from '@expo/vector-icons'
import {FontAwesome as FontAwesome} from '@expo/vector-icons'

import { useState, useEffect} from 'react';
const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const colorList = "rgba(177, 222, 255, 1)";
const colorNameGroup = "rgba(34, 83, 120, 1)";
const colorOtherUserMessage="rgba(177, 222, 255, 1)";
const colorUserMessage="rgba(103, 189, 254, 1)";

const ChatRoom = ({navigation}: {navigation: any}) =>
{
    return(
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
        <View style={{flex: 1,backgroundColor:'rgba(246, 251, 255, 1)'}}>
            <SafeAreaView style={styles.navBar}>
            <TouchableOpacity onPress={()=> navigation.navigate('ChatScreen')}>
            <AntDesign name='arrowleft' style={styles.navBarIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navTitle}>Sun and Moon</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
                    source={require('../../assets/avt-group.jpg')}
                    style={styles.otherUserAvatar}
                    />
            </TouchableOpacity>
        </SafeAreaView>
        <ScrollView>
        <View style={styles.mainScreenContainer}>
            <View style={styles.otherUserContainer}>
                <View style={styles.avatarContainer}>
                <Image
                source={require('../../assets/avt.jpg')}
                style={styles.otherUserAvatar}
                />
                </View>
                <View style={styles.otherUserMessageContainer}>
                    <View style={styles.messageTopContainer}>
                    <Text style={styles.message}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    <View style={styles.messageMidContainer}>
                    <Text style={styles.message}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</Text>
                    </View>
                    <View style={styles.messageBottomContainer}>
                    <Text style={styles.message}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</Text>

                    </View>
                </View>
            </View>
            <View style={styles.otherUserContainer}>
                <View style={styles.avatarContainer}>
                <Image
                source={require('../../assets/avt.jpg')}
                style={styles.otherUserAvatar}
                />
                </View>
                <View style={styles.otherUserMessageContainer}>
                    <View style={styles.messageContainer}>
                    <Text style={styles.message}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</Text>                    

                    </View>
                </View>
            </View>
            <View style={styles.UserContainer}>
                <View style={styles.avatarContainer}>
                <Image
                source={require('../../assets/avt.jpg')}
                style={styles.userAvatar}
                />
                </View>
                <View style={styles.otherUserMessageContainer}>
                    <View style={styles.messageContainer}>
                    <Text style={styles.message}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.otherUserContainer}>
                <View style={styles.avatarContainer}>
                <Image
                source={require('../../assets/avt.jpg')}
                style={styles.otherUserAvatar}
                />
                </View>
                <View style={styles.otherUserMessageContainer}>
                    <View style={styles.messageContainer}>
                    <Text style={styles.message}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</Text>                    

                    </View>
                </View>
            </View>
            <View style={styles.otherUserContainer}>
                <View style={styles.avatarContainer}>
                <Image
                source={require('../../assets/avt.jpg')}
                style={styles.otherUserAvatar}
                />
                </View>
                <View style={styles.otherUserMessageContainer}>
                    <View style={styles.messageContainer}>
                    <Text style={styles.message}>Lorem Ipsum is simply dummy text of the printing.</Text>                    

                    </View>
                </View>
            </View>
            <View style={styles.UserContainer}>
                <View style={styles.avatarContainer}>
                <Image
                source={require('../../assets/avt.jpg')}
                style={styles.userAvatar}
                />
                </View>
                <View style={styles.otherUserMessageContainer}>
                    <View style={styles.messageContainer}>
                    <Text style={styles.message}>Lorem Ipsum is simply.</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.onChatingMessageContainer}>
            <View style={styles.onChatingMessage}>
                <View style={styles.onchatMessageDot}></View>
                <View style={styles.onchatMessageDot}></View>
                <View style={styles.onchatMessageDot}></View>

            </View>
        </View>
        </ScrollView>
        {/* Footer */}
        <View style={styles.footer}>
                <TouchableOpacity>
                <FontAwesome name='image' style={styles.footerNavIcon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome name='microphone' style={styles.footerNavIcon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name='emoticon-excited-outline' style={styles.footerNavIcon}/>
                </TouchableOpacity>
                
            <View style={styles.footerNavMessageInputContainer}>
                <TextInput placeholder='Aa'></TextInput>
            </View>
            <TouchableOpacity>
                <Icon name='send' style={styles.footerNavIcon}/>
            </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create
(
    {
        navBar:{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            justifyContent:'space-between',
            backgroundColor:'rgba(246, 251, 255, 1)',
            alignItems:'center',
            paddingTop: Platform.OS ==='ios'? 0:  StatusBar.currentHeight,
            
            borderWidth:0.2,
            elevation: 6,
            height:Platform.OS ==='ios'? 100:80,
        },
        navBarIcon:
        {
            fontSize:23,
            marginLeft:20,
            color:colorTitle
        },
        navTitle:
        {
            color:colorTitle,
            fontSize:15
        },
        avtGroup:
        {
            height:40,
            width:40,
            borderRadius:20,
            marginRight:10
        },
        mainScreenContainer:
        {
            height:'100%',
            width:'100%',
            display:'flex',
            backgroundColor:'rgba(246, 251, 255, 1)',
            padding:20,
            flex:1,
            flexDirection:'column',
            paddingBottom:0
        },
        avatarContainer:
        {
            height:'100%'
        },
        otherUserAvatar:
        {
            height:35,
            width:35,
            borderRadius:20,
            marginRight:10
        },
        userAvatar:
        {
            height:35,
            width:35,
            borderRadius:20,
            marginLeft:10
        },
        otherUserContainer:
        {
            display:'flex',
            flexDirection:'row',
            width:'100%',
            alignItems:'center',
            marginBottom:23,
        },
        otherUserMessageContainer:
        {
            display:'flex',
            flexDirection:'column',
            width:'75%',
        },
        messageContainer:
        {
            backgroundColor:colorOtherUserMessage,
            borderRadius:15,
            display:'flex',
            padding:10,
        },
        message:{
            color:colorNameGroup,
            fontSize:15,
            textAlign:'justify',
        },
        messageTopContainer:
        {
            backgroundColor:colorOtherUserMessage,
            padding:10,
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            borderBottomRightRadius:15,
            marginBottom:3
        },
        messageMidContainer:
        {
            backgroundColor:colorOtherUserMessage,
            display:'flex',
            padding:10,
            borderTopRightRadius:15,
            borderBottomRightRadius:15,
            marginBottom:3

        },
        messageBottomContainer:
        {
            color:colorNameGroup,
            fontSize:15,
            textAlign:'justify',
            backgroundColor:colorOtherUserMessage,
            display:'flex',
            padding:10,
            borderTopRightRadius:15,
            borderBottomLeftRadius:15,
            borderBottomRightRadius:15
        },
        UserContainer:
        {
            display:'flex',
            flexDirection:'row-reverse',
            width:'100%',
            alignItems:'center',
            marginBottom:23,
            
        },
        onChatingMessageContainer:{
            display:'flex',
            marginBottom:15,
            width:'100%',
            paddingLeft:'15%'
        },
        onChatingMessage:
        {
            backgroundColor:colorBorder,
            width:38,
            display:'flex',
            justifyContent:'space-around',
            height:15,
            borderRadius:8,
            alignItems:'center',
            flexDirection:'row',
            paddingLeft:5,
            paddingRight:5
        },
        onchatMessageDot:
        {
            height:4,
            width:4,
            borderRadius:2,
            backgroundColor:colorLabel
        },
        //Footer
        footer:
        {
            display:'flex',
            flexDirection:'row',
            width:'100%',
            justifyContent:'space-around',
            backgroundColor:colorOtherUserMessage,
            alignItems:'center',
            height:65,
            padding:5
        },
        footerNavIcon:
        {
            fontSize:19,
            color:'white'
        },
        footerNavMessageInputContainer:
        {
            backgroundColor:'white',
            width:'64%',
            height:28,
            borderRadius:10,
            textAlign:'center',
            padding:5,
            fontSize:18
        },
    }
     
)
   

export default ChatRoom;
