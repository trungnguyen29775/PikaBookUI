import { StyleSheet, Text, View,Image,TextInput,Dimensions, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import { useState } from 'react';
const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const {width} = Dimensions.get('window');
const colorPagingText = "rgba(177, 222, 255, 1)";
const colorPagingTextActive = "rgba(35, 161, 255, 1)";
const LibraryScreen = ({navigation}: {navigation: any}) =>
{
    const [active,setActive] = useState(0)
    const change = ({nativeEvent}:{nativeEvent:any})=>
    {
        const slide = Math.ceil((nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width))
        if(slide!==active)
            setActive(slide)
    }

    const userData = 
    {
        avt: require('../../assets/avt.jpg')
    }

    const continueReadingBookData =
    [
        {
            title:'The fault of us',
            author:'Red Bull',
            chapters:25,
            uri: require('../../assets/book-poster2.jpg'),
            process:'70%'
        },
        {
            title:'The sky above us',
            author:'John Green',
            chapters:30,
            uri: require('../../assets/book-poster3.jpg'),
            process:'30%'
        },
        {
            title:'The Kite',
            author:'Johnanthan',
            chapters:45,
            uri: require('../../assets/book-poster.jpg'),
            process:'75%'
        },
    ]
    return(
        // nav bar
        <View style={{flex: 1}}>
            <SafeAreaView style={styles.navBar}>
            <TouchableOpacity>
            <AntDesign name='arrowleft' style={styles.navBarBack}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navTitle}>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
                    source={require('../../assets/avt.jpg')}
                    style={styles.avatar}
                    />
            </TouchableOpacity>
        </SafeAreaView>
        <ScrollView style={styles.mainScreenContainer}>

            {/* Continue Reading */}

            <View style={styles.continueReadingZone}>
                <Text style={styles.zoneTitle}>Continue Reading</Text>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={change}
                >

                    {
                        continueReadingBookData.map((item,index)=>
                        (
                            <View style={styles.lastBookContainer} key={index}>
                                 <Image 
                            
                                source={item.uri}
                                style={styles.lastBookPoster}
                                />
                    {/* Book Infomation (Name, author, chapter, progress reading) */}
                            <View style={styles.lastBook}>
                            <Icon name='bookmark-sharp' style={styles.bookMarkIcon}/>
                            <View style={styles.lastBookInfomation}>
                            <Text style={styles.bookTitle}>{item.title}</Text>
                            <Text style={styles.authorBook}>{item.author}</Text>
                            <View style={styles.chapterContainer}>
                            <Icon name='list'/>
                            <Text style={styles.chapterBook}>{item.chapters} chapters</Text>
                            </View>
                            </View>
                            <View style={styles.progressReadZone}>
                            <View style={[styles.progressRead,{width:item.process}]}></View>
                            </View>
                            <TouchableOpacity style={styles.lastBookButton}><Text style={styles.buttonLabel}>CONTINUE</Text></TouchableOpacity>
                            </View>
                            </View>
                        )
                        )
                    }
                </ScrollView>

                {/* slide list of book */}
                <View style={styles.pagination}>
                    {
                        continueReadingBookData.map((i,k)=>
                        (
                            <Text key={k} style={k==active?styles.paginationTextActive: styles.paginationText}>⬤</Text>
                        ))
                    }
                </View>
            </View>

            {/* Recommend Book  */}
            <View>
                {/* Header */}
                <View style={styles.headerRecommendZone}>
                    <Text style={styles.zoneTitle}>Your Offline book</Text>
                    <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>

                    </TouchableOpacity>
                </View>
                {/* list book offline */}
                <View style={styles.offlineBookContainer}>
                    
                    <TouchableOpacity style={styles.bookContainer} onPress={()=> navigation.navigate('BookDetails')}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.libraryBookInfomation}>
                    <Text style={styles.bookTitleLibrary}>The sky above us</Text>
                    <Text style={styles.authorBookLibrary}>John Green</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.bookContainer} onPress={()=> navigation.navigate('BookDetails')}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.libraryBookInfomation}>
                    <Text style={styles.bookTitleLibrary}>The sky above us</Text>
                    <Text style={styles.authorBookLibrary}>John Green</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Online book */}
            <View>
                <View style={styles.headerRecommendZone}>
                    <Text style={styles.zoneTitle}>Your Online book</Text>
                    <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.offlineBookContainer}>
                    
                    <TouchableOpacity style={styles.bookContainer} onPress={()=> navigation.navigate('BookDetails')}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.libraryBookInfomation}>
                    <Text style={styles.bookTitleLibrary}>The sky above us</Text>
                    <Text style={styles.authorBookLibrary}>John Green</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.bookContainer} onPress={()=> navigation.navigate('BookDetails')}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.libraryBookInfomation}>
                    <Text style={styles.bookTitleLibrary}>The sky above us</Text>
                    <Text style={styles.authorBookLibrary}>John Green</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer} onPress={()=> navigation.navigate('BookDetails')}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.libraryBookInfomation}>
                    <Text style={styles.bookTitleLibrary}>The sky above us</Text>
                    <Text style={styles.authorBookLibrary}>John Green</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.bookContainer} onPress={()=> navigation.navigate('BookDetails')}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.libraryBookInfomation}>
                    <Text style={styles.bookTitleLibrary}>The sky above us</Text>
                    <Text style={styles.authorBookLibrary}>John Green</Text>
                    </View>
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
            <Icon name='chatbox' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='library' style={styles.footerNavIconActive}/>
            <Text style={styles.footerNavTitleActive}>Library</Text>
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
        navBarBack:
        {
            fontSize:25,
            color:colorTitle,
            marginLeft:20
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
            fontSize:17
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
            fontSize:24,
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
            marginTop:15,
            display:'flex',
            flexDirection:'column',
            width:'100%',
            height:270,
            marginBottom:10
        },
        lastBookContainer:
        {
            display:'flex',
            flexDirection:'row',
            width:width-40,
            height:220,
            marginTop:20,
            alignItems:'center'
        },
        lastBookPoster:
        {
            height:180,
            width:140,
            marginBottom:15
        },
        lastBook:
        {
            width: width-140-40,
            padding:8,
            height:166,
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
            marginBottom:14
        },
        bookMarkIcon:
        {
            color:colorMark,
            position:'absolute',
            top:-3,
            right:0,
            marginRight:10,
            fontSize:25
        },
        lastBookInfomation:
        {
            display:'flex',
            justifyContent:'space-around',
            height:70,
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
            backgroundColor:'rgba(34, 83, 120, 1)',
            height:'100%',
            borderTopLeftRadius:7,
            borderBottomLeftRadius:7
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
        headerRecommendZone:
        {
            display:'flex',
            width:'100%',
            justifyContent:'space-between',
            flexDirection:'row',
            marginBottom:20,
            alignItems:'center'
        },
        seeAll:
        {
            color:colorTitle,
            fontSize:12,
            fontWeight:'600'
        },
        offlineBookContainer:
        {
            width:'100%',
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-around',
            paddingBottom:20
        },
        bookContainer:
        {
            width:160,
            backgroundColor:'white',
            padding:15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2.62,
            
            elevation: 2,
            display:'flex',
            alignItems:'center',
            borderRadius:10,
            marginBottom:16
        },
        bookTitleLibrary:{
            fontSize:16,
            fontWeight:'500'
        },
        authorBookLibrary:
        {
            color:colorLabel,
            fontSize:13,
            fontWeight:'500'
        },
        libraryBookInfomation:
        {
            display:'flex',
            width:'100%',
            
        },
        
        pagination:
        {
            height:10,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            position:'absolute',
            bottom:0,
            right:'50%'
        },
        paginationText:
        {
            color:colorPagingText,
            fontSize:6,
            marginRight:3
        },
        paginationTextActive:
        {
            color:colorPagingTextActive,
            fontSize:6,
            marginRight:3
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
   

export default LibraryScreen;
