import { StyleSheet, Text, View,Image,TextInput, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import {MaterialCommunityIcons as MaterialCommunityIcons} from '@expo/vector-icons'

const fontSizeHeaderTitle = 18;
const fontSizeZoneTitle = 24;
const fontSizeTitleIcon = 13;
const fontSizeSeeAll = 12;
const fontSizeNameGroup = 15;
const fontSizeGroupCheckIcon = 13;
const fontSizeTextStatus = 13;
const fontSizeJoinGroupButtonText = 9;


const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const colorNameGroup = "rgba(34, 83, 120, 1)"
const ChatScreen = ({navigation}: {navigation: any}) =>
{
    return(
        
        <View style={{flex: 1}}>
            {/* nav bar */}
            <SafeAreaView style={styles.navBar}>
            <TouchableOpacity>
            <Icon name='menu' style={styles.navBarIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navTitle}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
                    source={require('../../assets/avt.jpg')}
                    style={styles.avatar}
                    />
            </TouchableOpacity>
        </SafeAreaView>
        {/* Content */}
        <ScrollView style={styles.mainScreenContainer}>
        {/* Find book */}
        <View style={styles.findZone}>
                <Text style={styles.zoneTitle}>Find Your Bookmates!</Text>
                <View style={styles.seachZone}>
                <TouchableOpacity>
                <Icon name='search' size={20} color={colorLabel}/>
                </TouchableOpacity>
                <TextInput
                placeholder='Search your community by filters'
                style={{fontStyle:'italic',width:'80%'}}
                />
                <TouchableOpacity>
                <Icon name='options-outline' size={22} color={colorLabel}/>
                </TouchableOpacity>
                </View>
            </View>

        {/* Pika matching */}
        <View style={styles.matchingContainer}>
            <View style={styles.headerMatchContainer}>
                <Text style={styles.headerTitle}>Pika Match</Text>
                <TouchableOpacity>
                <AntDesign name='questioncircle' style={styles.titleIcon}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonLabel}>Auto Matching</Text></TouchableOpacity>
        </View>

            {/* Group */}
        <View style={styles.groupsZoneContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Your groups</Text>
                <TouchableOpacity><Text style={styles.seeAll}>See Alls</Text></TouchableOpacity>
            </View>
            <View style={styles.userGroupContainer}>
                <TouchableOpacity style={styles.groupsContainer} onPress={()=> navigation.navigate('ChatRoom')}>
                    <Image
                    source={require('../../assets/avt-group.jpg')}
                    style={styles.avtGroup}
                    />
                        <View style={styles.nameAndStatusGroupContainer}>
                        <View style={styles.headerMatchContainer}>
                        <Text style={styles.nameOfGroup}>Sun and Moon</Text>
                        <MaterialCommunityIcons name='check-decagram' style={styles.nameGroupCheckIcon}/>
                        </View>
                        <Text style={styles.textStatusGroup}>Sunny just sent the emotion</Text>
                        </View>
                 
                </TouchableOpacity>
                <TouchableOpacity style={styles.groupsContainer}>
                    <Image
                    source={require('../../assets/avt-group2.jpg')}
                    style={styles.avtGroup}
                    />
                   <View style={styles.nameAndStatusGroupContainer}>
                        <View style={styles.headerMatchContainer}>
                        <Text style={styles.nameOfGroup}>Badtrip</Text>
                        <MaterialCommunityIcons name='check-decagram' style={styles.nameGroupCheckIcon}/>
                        </View>
                        <Text style={styles.textStatusGroup}>You just sent the sticker</Text>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupsContainer}>
                    
                </TouchableOpacity>
            </View>
            
            
        </View>

        {/* Other groups */}
        <View style={styles.groupsZoneContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Other</Text>
                <TouchableOpacity><Text style={styles.seeAll}>See Alls</Text></TouchableOpacity>
            </View>
            
            <View style={styles.userGroupContainer}>
                <TouchableOpacity style={styles.groupsContainer}>
                    <Image
                    source={require('../../assets/avt-group.jpg')}
                    style={styles.avtGroup}
                    />
                        <View style={styles.nameAndStatusGroupContainer}>
                        <View style={styles.headerMatchContainer}>
                        <Text style={styles.nameOfGroup}>The big city groups</Text>
                        <MaterialCommunityIcons name='check-decagram' style={styles.nameGroupCheckIcon}/>
                        </View>
                        <TouchableOpacity style={styles.joinGroupContainer}><Text style={styles.joinGroupText}>Join group</Text></TouchableOpacity>
                        </View>
                 
                </TouchableOpacity>
                <TouchableOpacity style={styles.groupsContainer}>
                    <Image
                    source={require('../../assets/avt-group2.jpg')}
                    style={styles.avtGroup}
                    />
                   <View style={styles.nameAndStatusGroupContainer}>
                        <View style={styles.headerMatchContainer}>
                        <Text style={styles.nameOfGroup}>BL(Hu nu)</Text>
                        <MaterialCommunityIcons name='check-decagram' style={styles.nameGroupCheckIcon}/>
                        </View>
                        <TouchableOpacity style={styles.joinGroupContainer}><Text style={styles.joinGroupText}>Join group</Text></TouchableOpacity>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.groupsContainer}>
                    
                </TouchableOpacity>
            </View>
            
            
        </View>
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
            <Icon name='chatbox' style={styles.footerNavIconActive}/>
            <Text style={styles.footerNavTitleActive}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('LibraryScreen')}>
            <Icon name='library' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav} onPress={()=> navigation.navigate('Notifications')}>
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
            padding:20,
            flex:1
        },
        headerTitle:
        {
            color:colorTitle,
            fontSize:fontSizeHeaderTitle,
            textDecorationLine:'underline',
            fontWeight:'700',
            
        },
        findZone:
        {
            width:'100%',
            display:'flex',
            justifyContent:'space-around',
            height:100
        },
        zoneTitle:
        {
            color:colorTitle,
            fontSize:fontSizeZoneTitle,
            fontWeight:'700',
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
        matchingContainer:{
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            height:110,
            marginBottom:20
        },
        headerMatchContainer:
        {
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            width:'100%'
        },
        titleIcon:{
            color:colorMark,
            marginLeft:5,
            fontSize:fontSizeTitleIcon,
            
        },
        button:
        {
            borderRadius:7,
            width:'100%',
            backgroundColor:'rgba(103, 189, 254, 1)',
            color:'white',
            height:55,
            display:'flex',
            alignItems:'center',
            
        },
        buttonLabel:
        {
            color:'white',
            fontSize:18,
            lineHeight:55,
            fontWeight:'600'
        },
        groupsZoneContainer:
        {
            display:'flex',
            width:'100%',
            alignItems:'center',
            paddingBottom:20
        },
        headerContainer:
        {
            display:'flex',
            width:'100%',
            justifyContent:'space-between',
            flexDirection:'row'
        },
        seeAll:
        {
            color:colorTitle,
            fontSize:fontSizeSeeAll,
            fontWeight:'600'
        },
        userGroupContainer:
        {
            width:'100%',
            height:250,
            backgroundColor:'white',
            borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,
            
            elevation: 2,
            marginTop:15,
            marginBottom:10
        },
        groupsContainer:
        {
            display:'flex',
            width:'100%',
            borderBottomWidth:1.5,
            borderBottomColor:"rgba(224, 241, 255, 1)",
            flexDirection:'row',
            flex:1,
            alignItems:'center',
            paddingRight:13,
            paddingLeft:13

        },
        avtGroup:
        {
            height:40,
            width:40,
            borderRadius:20,
            marginRight:10
        },
        nameAndStatusGroupContainer:
        {
            display:'flex',
            flexDirection:'column',
            height:'50%',
            width:'80%',
        },
        nameOfGroup:
        {
            color:colorNameGroup,
            fontSize:fontSizeNameGroup,
            fontWeight:'700',
            marginBottom:5
        },
        nameGroupCheckIcon:
        {
            marginBottom:5,
            color:colorMark,
            marginLeft:5,
            fontSize:fontSizeGroupCheckIcon,
        },

        textStatusGroup:
        {
            fontSize:fontSizeTextStatus,
            color:colorLabel,
            fontStyle:'italic',
            width:'100%'
        },
        joinGroupContainer:
        {
            height:18,
            width:80,
            backgroundColor:'rgba(103, 189, 254, 1)',
            display:'flex',
            alignItems:'center',
            borderRadius:10
            
        },
        joinGroupText:
        {
            color:'white',
            fontSize:fontSizeJoinGroupButtonText,
            lineHeight:18
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
   

export default ChatScreen;
