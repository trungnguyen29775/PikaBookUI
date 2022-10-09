import { StyleSheet, Text, View,Image,TextInput, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView, FlatList,SectionList  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import {MaterialCommunityIcons as MaterialCommunityIcons} from '@expo/vector-icons'
import { useState, useEffect} from 'react';
import { padding } from 'polished';

const fontSizeDate = 10
const fontSizeNotificationTitle = 13;

const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorDate = "rgba(151, 151, 151, 1)";
const colorNotificationText = "rgba(34, 83, 120, 1)";

const Notifications = ({navigation}: {navigation: any}) =>
{
    const notificatioData = 
    [
        {
            poster: require('../../assets/book-poster3.jpg'),
            date:'07.09.2022',
            title:'The author has updated chapter 13 for ',
            bookTitle:'My Daily Life'
        },
        {
            poster: require('../../assets/book-poster3.jpg'),
            date:'07.09.2022',
            title:'The author has updated chapter 13 for ',
            bookTitle:'My Daily Life'
        },
        {
            poster: require('../../assets/book-poster3.jpg'),
            date:'07.09.2022',
            title:'The author has updated chapter 13 for ',
            bookTitle:'My Daily Life'
        },
        {
            poster: require('../../assets/book-poster3.jpg'),
            date:'07.09.2022',
            title:'The author has updated chapter 13 for ',
            bookTitle:'My Daily Life'
        },
        {
            poster: require('../../assets/book-poster.jpg'),
            date:'07.09.2022',
            title:'The author has updated chapter 13 for ',
            bookTitle:'My Daily Life'
        },
        {
            poster: require('../../assets/book-poster.jpg'),
            date:'07.09.2022',
            title:'The author has updated chapter 13 for ',
            bookTitle:'My Daily Life'
        },
        {
            poster: require('../../assets/book-poster.jpg'),
            date:'07.09.2022',
            title:'The author has updated chapter 13 for ',
            bookTitle:'My Daily Life'
        },
    ]
    return(
        <View style={{flex: 1}}>
            <SafeAreaView style={styles.navBar}>
            <TouchableOpacity>
            <Icon name='menu' style={styles.navBarIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navTitle}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
                    source={require('../../assets/avt.jpg')}
                    style={styles.avatar}
                    />
            </TouchableOpacity>
        </SafeAreaView>
        <ScrollView style={styles.mainScreenContainer}>
            
            {
                notificatioData.map((data,index)=>(
                <View style={styles.notificationContainer} key={index}>
                <Image
                source={data.poster}
                style={styles.notificationPoster}/>
                <View style={styles.notificationContentContainer}>
                    <Text style={styles.dateNotificationContainer}>{data.date}</Text>
                    <View style={styles.titleNotificationContainer}>
                        <Text style={styles.titleNotification}>{data.title}
                        <Text style={styles.titleNotificationHighlight}> "{data.bookTitle}" </Text>
                        book!
                         </Text>
                    </View>
                </View>
            </View>
                ))
            }
            
        </ScrollView>
        {/* Footer */}
        <SafeAreaView style={styles.footer}>
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('MainScreenOldUser')}>
            <Icon name='home-outline' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('WriteScreen')}>
            <Icon name='pencil' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle} >Write</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('ChatScreen')}>
            <Icon name='chatbox' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('LibraryScreen')}>
            <Icon name='library' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('Notifications')}>
            <Icon name='notifications' style={styles.footerNavIconActive}/>
            <Text style={styles.footerNavTitleActive}>Notifications</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </View>
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
            fontSize:15,
            fontWeight:'600'
        },
        avatar:
        {
            height:35,
            width:35,
            borderRadius:20,
            marginRight:20
        },
        mainScreenContainer:
        {
            height:'100%',
            width:'100%',
            display:'flex',
            backgroundColor:'rgba(246, 251, 255, 1)',
            flex:1,
            flexDirection:'column'
        },
        notificationContainer:
        {
            display:'flex',
            flexDirection:'row',
            width:'100%',
            borderBottomWidth:2,
            borderBottomColor:'rgba(34, 83, 120, 0.35)',
            padding:20,
            paddingTop:30,
            height:175,
            justifyContent:'space-between',
            alignItems:'center'
        },
        notificationPoster:
        {
            height:113.4,
            width:88.128,
            marginRight:10
        },
        notificationContentContainer:
        {
            display:'flex',
            flexDirection:'column',
            width:'73%',
            height:'100%',
            paddingTop:5
        },
        dateNotificationContainer:
        {
            width:'100%',
            fontSize:fontSizeDate,
            color: colorDate,
            fontWeight:'600',
            fontStyle:'italic'
        },
        titleNotificationContainer:
        {
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            
        },
        titleNotification:
        {
            color: colorNotificationText,
            fontSize:fontSizeNotificationTitle,
            fontWeight:'600',
            display:'flex',
            flexWrap:'wrap'
        },
        titleNotificationHighlightContainer:
        {
        
        },
        titleNotificationHighlight:
        {
            fontSize:fontSizeNotificationTitle,
            color:colorTitle,
            fontWeight:'500',
        },

        //Footer
        footer:
        {
            display:'flex',
            flexDirection:'row',
            width:'100%',
            justifyContent:'space-around',
            backgroundColor:'rgba(246, 251, 255, 1)',
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
   

export default Notifications;
