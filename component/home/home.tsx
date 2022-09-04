import { StyleSheet, Text, View,Image,TextInput, Button,  Platform, StatusBar,Pressable, TouchableWithoutFeedback,TouchableOpacity,ScrollView,SafeAreaView } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import { useState, useEffect} from 'react';
const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)"
const colorList = "rgba(177, 222, 255, 1)"
const MainScreenOldUser = ({navigation}: {navigation: any}) =>
{
    useEffect(()=>
    {
        navigation.setOptions({
            headerLeft:()=>
            (
                <TouchableOpacity>
                <Icon name="menu" size={25} color={colorTitle}/>
                </TouchableOpacity>
            ),
            headerTitle:()=>(
                <TouchableOpacity><Text style={styles.headerTitle}>Home</Text></TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity>
                <Image 
                    source={require('../../assets/avt.jpg')}
                    style={styles.avatar}
                    />
                </TouchableOpacity>
            ),
            headerStyle:{
                backgroundColor: 'rgba(246, 251, 255, 1)',
            },
            headerBackVisible:false,
            headerTitleAlign:'center'
        }
        )
    })
    return(
        <View style={{flex: 1}}>
        <ScrollView style={styles.mainScreenContainer}>
            <View style={styles.findBookZone}>
                <Text style={styles.zoneTitle}>Find Awesome Books!</Text>
                <View style={styles.seachZone}>
                <TouchableOpacity>
                <Icon name='search' size={20} color={colorLabel}/>
                </TouchableOpacity>
                <TextInput
                placeholder='Search'
                style={{fontStyle:'italic',width:'80%'}}
                />
                <TouchableOpacity>
                <Icon name='options-outline' size={22} color={colorLabel}/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.continueReadingZone}>
                <Text style={styles.zoneTitle}>Continue Reading</Text>
                <View style={styles.lastBookContainer}>
                    <Image 
                    source={require('../../assets/book-poster2.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBook}>
                        <Icon name='bookmark-sharp' style={styles.bookMarkIcon}/>
                        <View style={styles.lastBookInfomation}>
                        <Text style={styles.bookTitle}>The fault in our star</Text>
                        <Text style={styles.authorBook}>John Green</Text>
                        <View style={styles.chapterContainer}>
                        <Icon name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        </View>
                        <View style={styles.progressReadZone}>
                            <View style={styles.progressRead}></View>
                        </View>
                        <TouchableOpacity style={styles.lastBookButton}><Text style={styles.buttonLabel}>CONTINUE</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lisLastBookContainer}>
                    <View style={styles.listLastBook}>
                        <TouchableOpacity style={styles.listBook}></TouchableOpacity>
                        <TouchableOpacity style={styles.listBookActive}></TouchableOpacity>
                        <TouchableOpacity style={styles.listBook}></TouchableOpacity>
                        <TouchableOpacity style={styles.listBook}></TouchableOpacity>
                        <TouchableOpacity style={styles.listBook}></TouchableOpacity>
        
                    </View>
                </View>
            </View>
        </ScrollView>
        <SafeAreaView style={styles.footer}>
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='home-outline' style={styles.footerNavIconActive}/>
            <Text style={styles.footerNavTitleActive}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='pencil' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle} >Write</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='chatbox' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='library' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='notifications' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Notifications</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </View>
    )
}

const styles = StyleSheet.create
(
    {
        mainScreenContainer:
        {
            height:'100%',
            width:'100%',
            display:'flex',
            backgroundColor:'rgba(246, 251, 255, 1)',
            flex:1,
            padding:20
        },
        avatar:
        {
            height:35,
            width:35,
            borderRadius:20
        },
        headerTitle:
        {
            color:colorTitle,
            fontSize:20
        },
        findBookZone:
        {
            width:'100%',
            display:'flex',
            justifyContent:'space-around',
            height:100
        },
        zoneTitle:
        {
            color:colorTitle,
            fontSize:23,
            fontWeight:'700'
        },
        seachZone:
        {
            width:'100%',
            borderTopWidth:1.5,
            borderBottomWidth:1.5,
            borderRightWidth:1.5,
            borderLeftWidth:1.5,
            borderRadius:8,
            borderStyle:'solid',
            borderColor: colorBorder,
            height:45,
            display:'flex',
            justifyContent:'space-around',
            backgroundColor:'white',
            padding:10,
            flexDirection:'row'
        },
        continueReadingZone:
        {
            marginTop:20,
            display:'flex',
            flexDirection:'column',
            width:'100%',
            height:300,
            justifyContent:'space-around'
        },
        lastBookContainer:
        {
            display:'flex',
            flexDirection:'row',
            width:'100%',
            height:180,
            alignItems:'center'

        },
        lisLastBookContainer:
        {
           width:'100%',
           display:'flex',
           alignItems:'center',
        },
        lastBookPoster:
        {
            height:'100%',
            width:'31%',
        },
        lastBook:
        {
            width:'69%',
            padding:10,
            height:'92%',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            backgroundColor:'white',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            
            elevation: 6,
            
        },
        bookMarkIcon:
        {
            color:colorMark,
            position:'absolute',
            top:-3,
            right:0,
            marginRight:10,
            fontSize:30
        },
        lastBookInfomation:
        {
            marginTop:13,
            display:'flex',
            justifyContent:'space-around',
            height:80,
            width:'100%'
        },
        bookTitle:
        {
            fontSize:20,
            fontWeight:'500'
        },
        authorBook:
        {
            color:colorLabel
        },
        chapterContainer:
        {
            display:'flex',
            flexDirection:'row'
        },
        chapterBook:
        {
            fontSize:10
        },
        progressReadZone:
        {
            width:'95%',
            height:10,
            backgroundColor:colorBorder,
            margin:'auto',
            borderRadius:7,
            display:'flex'
        },
        progressRead:
        {
            width:'70%',
            backgroundColor:'rgba(34, 83, 120, 1)',
            height:'100%',
            borderRadius:7,
        },
        lastBookButton:
        {
            width:'83%',
            display:'flex',
            alignItems:'center',
            height:25,
            backgroundColor:colorTitle,
            borderRadius:11,
        },
        buttonLabel:
        {
            color:'white',
            fontSize:12,
            lineHeight:25,
            fontWeight:'600'
        },
        listLastBook:
        {
            height:10,
            width:80,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around'
        },
        listBook:
        {
            height:8,
            width:8,
            backgroundColor:colorList,
            borderRadius:4
        },
        listBookActive:
        {
            height:8,
            width:8,
            backgroundColor:colorTitle,
            borderRadius:4
        },

































        footer:
        {
            display:'flex',
            flexDirection:'row',
            width:'100%',
            justifyContent:'space-around',
            backgroundColor:'white',
            alignItems:'center',
            height:Platform.OS ==='ios'? 80: 60,
            padding:5,
            
        },
        footerNav:
        {
            display:'flex',
            width:'25%',
            alignItems:'center',
            height:Platform.OS ==='ios'? '100%': '85%',
            justifyContent:'space-around',
            paddingTop: Platform.OS ==='ios'? 5: 0

        },
        footerNavIcon:
        {
            fontSize:20,
            color:colorLabel
        },
        footerNavTitle:
        {
            fontSize:13,
            color:colorLabel
        },
        footerNavIconActive:
        {
            fontSize:20,
            color:colorTitle,
            textDecorationColor:colorTitle,
            textDecorationLine:'underline'
        },
        footerNavTitleActive:
        {
            fontSize:13,
            color:colorTitle,
            textDecorationColor:colorTitle,
            textDecorationLine:'underline'
        }
    }
     
)
   

export default MainScreenOldUser;
