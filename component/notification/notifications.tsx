import { StyleSheet, Text, View,Image,TextInput, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView, FlatList,SectionList  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import {MaterialCommunityIcons as MaterialCommunityIcons} from '@expo/vector-icons'
import { useState, useEffect} from 'react';
import { padding } from 'polished';

const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const colorList = "rgba(177, 222, 255, 1)";
const colorNameGroup = "rgba(34, 83, 120, 1)"
const Notifications = ({navigation}: {navigation: any}) =>
{
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
            <View style={styles.notificationContainer}>
                <Image
                source={require('../../assets/book-poster3.jpg')}
                style={styles.notificationPoster}/>
                <View style={styles.notificationContentContainer}>
                    <Text>07.09.2022</Text>
                    <Text>The author has updated chapter 13 for </Text>
                </View>
            </View>
            <View style={styles.notificationContainer}>
                <Image
                source={require('../../assets/book-poster3.jpg')}
                style={styles.notificationPoster}/>
                <View style={styles.notificationContentContainer}>
                    <Text>07.09.2022</Text>
                    <Text>The author has updated chapter 13 for </Text>
                </View>
            </View>
            <View style={styles.notificationContainer}>
                <Image
                source={require('../../assets/book-poster3.jpg')}
                style={styles.notificationPoster}/>
                <View style={styles.notificationContentContainer}>
                    <Text>07.09.2022</Text>
                    <Text>The author has updated chapter 13 for </Text>
                </View>
            </View>

        </ScrollView>
        {/* Footer */}
        <SafeAreaView style={styles.footer}>
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('MainScreenOldUser')}>
            <Icon name='home-outline' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='pencil' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle} >Write</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='chatbox' style={styles.footerNavIconActive}/>
            <Text style={styles.footerNavTitleActive}>Chat</Text>
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
            padding:30,
            paddingBottom:20,
            height:200
        },
        notificationPoster:
        {
            height:140,
            width:108.8,
            marginBottom:15
        },
        notificationContentContainer:
        {
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
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
   

export default Notifications;