import { StyleSheet, Text, View,Image,TextInput, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView, FlatList,SectionList  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'

import { useState, useEffect} from 'react';
const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const colorList = "rgba(177, 222, 255, 1)";

const MainScreenOldUser = ({navigation}: {navigation: any}) =>
{
    return(
        <View style={{flex: 1}}>
            <SafeAreaView style={styles.navBar}>
            <TouchableOpacity>
            <Icon name='menu' style={styles.navBarIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navTitle}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
                    source={require('../../assets/avt.jpg')}
                    style={styles.avatar}
                    />
            </TouchableOpacity>
        </SafeAreaView>
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
            <View style={styles.mainRecommendBookContainer}>
                <View style={styles.headerRecommendZone}>
                    <Text style={styles.zoneTitle}>Recommend for you</Text>
                    <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>

                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                    
                    <TouchableOpacity style={styles.bookContainer} onPress={()=> navigation.navigate('BookDetails')}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>                                           
                    
                </ScrollView>
            </View>
            <View style={styles.mainRecommendBookContainer}>
                <View style={styles.headerRecommendZone}>
                    <Text style={styles.zoneTitle}>Recent books</Text>
                    <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>

                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                    
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.lastBookPoster}
                    />
                    <View style={styles.lastBookInfomation}>
                    <Text style={styles.bookTitle}>The sky above us</Text>
                    <Text style={styles.authorBook}>John Green</Text>
                    <View style={styles.viewsBookContainer}>
                        <View style={styles.chapterContainer}>
                        <Icon
                        name='list'/>
                        <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                        <Text style={styles.viewsBook}>2.5k views</Text>
                    </View>
                    </View>
                    
                    <View style={styles.starBookContainer}>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='star' style={styles.starIcon}/>
                    <AntDesign name='staro'  style={styles.starIcon}/>
                    <AntDesign name='staro'style={styles.starIcon}/>

                    </View>
                    </TouchableOpacity>                                           
                    
                </ScrollView>
            </View>
        </ScrollView>
        {/* Footer */}
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
        navBar:{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            justifyContent:'space-between',
            backgroundColor:'rgba(245, 245, 245, 1)',
            alignItems:'center',
            paddingTop: Platform.OS ==='ios'? 0:  StatusBar.currentHeight,
            
            borderWidth:0.2,
            elevation: 6,
            height:Platform.OS ==='ios'? 100:80,
        },
        navBarIcon:
        {
            fontSize:23,
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
        },
        lastBookContainer:
        {
            display:'flex',
            flexDirection:'row',
            width:'100%',
            height:220,
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
            height:180,
            width:140,
            marginBottom:15
        },
        lastBook:
        {
            width:'63.5%',
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
            width:'70%',
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
        mainRecommendBookContainer:
        {
            height:410
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
        bookContainer:
        {
            height:330,
            width:180,
            backgroundColor:'white',
            paddingTop:20,
            paddingBottom:10,
            paddingLeft:5,
            paddingRight:5,
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
            marginRight:30
        },
        viewsBookContainer:
        {
            display:'flex',
            width:'100%',
            justifyContent:'space-between',
            flexDirection:'row'
        },
        viewsBook:
        {
            color:colorLabel,
            fontSize:10
        },
        starBookContainer:
        {
            width:'100%',
            display:'flex',
            flexDirection:'row',
            paddingRight:'25%',
            marginTop:8
        },
        starIcon:
        {
            color:colorMark,
            marginRight:10,
            fontSize:15
        },
        //Footer
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
