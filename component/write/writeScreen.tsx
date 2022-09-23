import { StyleSheet, Text, View,Image,TextInput, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView, FlatList,SectionList  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import {MaterialCommunityIcons as MaterialCommunityIcons} from '@expo/vector-icons'
import{FontAwesome5 as FontAwesome5} from '@expo/vector-icons'
import{Octicons as Octicons} from '@expo/vector-icons'
import{Entypo as Entypo} from '@expo/vector-icons'
import { useState, useEffect} from 'react';
import { padding } from 'polished';

const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const colorList = "rgba(177, 222, 255, 1)";
const colorNameGroup = "rgba(34, 83, 120, 1)"
const colorCoverBlank = "rgba(34, 83, 120, 0.35)"
const WriteScreen = ({navigation}: {navigation: any}) =>
{
    return(
        <View style={{flex: 1}}>
            <SafeAreaView style={styles.navBar}>
            <TouchableOpacity onPress={()=> navigation.navigate('MainScreenOldUser')}>
                    <AntDesign name='arrowleft' style={styles.navBarBack}/>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navTitle}>Write</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
                    source={require('../../assets/avt.jpg')}
                    style={styles.avatar}
                    />
            </TouchableOpacity>
        </SafeAreaView>
        <ScrollView style={styles.mainScreenContainer}>
            <View style={styles.userBookContainer}>
                <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Your book</Text>
                </View>
            <TouchableOpacity style={styles.coverOfBook}>
                <Image source={require('../../assets/book-poster3.jpg')} style={styles.bookPoster}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.bookTitle}>The sky above us</Text>
            </TouchableOpacity>
            <View style={styles.removeEditContainer}>
                <TouchableOpacity style={styles.actionContainer}>
                    <MaterialCommunityIcons style={styles.actionRemoveIcon} name='eraser'/>
                    <Text style={styles.actionRemoveLabel}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionContainer}>
                    <Octicons name='pencil' style={styles.actionEditIcon}/>
                    <Text style={styles.actionEditLabel}>Edit</Text>
                </TouchableOpacity>
            </View>
            </View>
            <TouchableOpacity style={styles.createBookContainer} onPress={()=> navigation.navigate('CreateNewBook')}>
                <Text style={styles.headerTitle}>Create new book</Text>
                <Entypo name='plus' style={styles.headerTitle}/>
            </TouchableOpacity>
        </ScrollView>
        {/* Footer */}
        <SafeAreaView style={styles.footer}>
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('MainScreenOldUser')}>
            <Icon name='home-outline' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='pencil' style={styles.footerNavIconActive}/>
            <Text style={styles.footerNavTitleActive}>Write</Text>
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
        navBarBack:
        {
            fontSize:25,
            color:colorTitle,
            marginLeft:20
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
            flexDirection:'column',
        },
        userBookContainer:
        {
            width:'100%',
            display:'flex',
            alignItems:'center',
            padding:20,
            paddingTop:15,
            borderBottomWidth:1,
            borderBottomColor:colorCoverBlank
        },
        headerContainer:
        {
            width:'100%',
            marginBottom:5

        },
        headerTitle:
        {
            color:colorNameGroup,
            fontSize:16,
            fontWeight:'700',
            marginRight:3
        },
        coverOfBook:
        {
            display:'flex',
            alignItems:'center',
            height:180,
            width:140,
        },
        bookPoster:
        {
            height:'100%',
            width:'100%'
        },
        bookTitle:
        {
            color:colorTitle,
            fontSize:15,
            marginTop:10
        },
        removeEditContainer:
        {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:100,
            marginTop:10
        },
        actionContainer:
        {
            display:'flex',
            alignItems:'center'
        },
        actionRemoveIcon:
        {
            fontSize:19,
            color:'rgba(235, 67, 53, 1)',
            textDecorationLine:'underline'
        },
        actionRemoveLabel:
        {
            fontSize:12,
            color:'rgba(235, 67, 53, 1)',
        },
        actionEditIcon:
        {
            fontSize:19,
            color: colorTitle,
            textDecorationLine:'underline'
        },
        actionEditLabel:
        {
            fontSize:12,
            color:colorTitle,
        },
        createBookContainer:
        {
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            margin:20,
            marginTop:15,
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
   

export default WriteScreen;
