import { StyleSheet, View, useWindowDimensions, ScrollView,SafeAreaView,TouchableOpacity,Image,Text,Platform,StatusBar,TouchableWithoutFeedback,Animated, } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { sample } from '../../const/test';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import {FontAwesome as FontAwesome} from '@expo/vector-icons'
import {Feather as Feather} from '@expo/vector-icons'
import {MaterialCommunityIcons as MaterialCommunityIcons} from '@expo/vector-icons'
import { useState,useRef } from 'react';

const source = sample
const fontSizeAuthor = 16;
const fontSizeBookTitle = 25;
const fontSizeChapter = 13;
const fontSizeText = 15;

const colorLabel = "rgba(151, 151, 151, 1)";
const colorTitle  = "rgba(35, 161, 255, 1)";
const colorBackground = "rgba(224, 241, 255, 1)"
const colorText = "rgba(78, 78, 78, 1)"


const ReaderContainer= ({navigation}: {navigation: any})=>{
    const { width } = useWindowDimensions();
    const [showBar, setShowBar] = useState(true)

    const heightNav = useRef(new Animated.Value(Platform.OS === 'ios' ? 100 : 80)).current
    function hideNavBar()
    {
        
        Animated.timing(heightNav,{
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    function showNavBar()
    {
        
        Animated.timing(heightNav,{
            toValue: Platform.OS === 'ios' ? 100 : 80,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    const heightFoot = useRef(new Animated.Value(Platform.OS === 'ios' ? 70 : 60)).current
    function hideFootBar()
    {
        
        Animated.timing(heightFoot,{
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    function showFootBar()
    {
        
        Animated.timing(heightFoot,{
            toValue: Platform.OS === 'ios' ? 70 : 60,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    function handleShowBar()
    {
        if(showBar)
        {
            setShowBar(!showBar)
            hideNavBar()
            hideFootBar()
        }
        else
        {
            setShowBar(!showBar)
            showNavBar() 
            showFootBar()
        }
    }



    return (
        <View style={{flex:1}}>

           
            {/* nav bar */}
            <View style={{height:'100%', width:'100%'}}>
            <Animated.View style={[styles.navBar,{height:heightNav}]}>
                <TouchableOpacity onPress={()=> navigation.navigate('BookDetails')}>
                    <AntDesign name='arrowleft' style={styles.navBarIcon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navTitle}>Chapter 1</Text>
                </TouchableOpacity>
                <Icon name='menu' style={styles.navBarIcon}/>
            </Animated.View>

            <ScrollView
            style={styles.scrollContainer}
            >
            <TouchableOpacity
            activeOpacity={1}
            style={styles.mainScreenContainer}
            onPress={handleShowBar}
            >
                <Text style={styles.text}>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sagittis felis. Sed elementum consectetur erat, sit amet elementum est tincidunt ac. Nunc quis pulvinar eros. In interdum congue eros vel sodales. Nunc tempor laoreet quam sed pretium. In pellentesque arcu ligula, eu rutrum arcu tempor vel. In a sapien vitae urna accumsan congue. Quisque ultricies odio eu velit egestas dapibus. Vivamus rhoncus mi id massa sodales pharetra.

Phasellus est ligula, rutrum pellentesque placerat vulputate, feugiat vitae ligula. Curabitur eget sapien viverra nisi pharetra porta eu non diam. Nunc hendrerit justo sed metus aliquet eleifend. Nunc volutpat nibh sed tortor porta elementum. Donec interdum placerat lacus at interdum. Aliquam efficitur nibh vitae orci vestibulum, in volutpat mi pulvinar. Phasellus egestas mollis neque eu egestas. Phasellus congue est ac neque placerat, quis laoreet metus rhoncus. Duis dapibus ante ligula, in tincidunt magna euismod id. Nunc ante metus, feugiat non libero quis, semper vehicula eros. Nam velit ex, congue sit amet tristique non, porta eu mi. Nam fermentum massa ligula, ut tempor purus lacinia in. Donec ut aliquet enim, nec commodo justo. Aliquam sit amet mauris nec mauris dapibus tempor. Mauris dapibus leo ut elit sagittis blandit.

Phasellus a efficitur mi, vel tristique augue. Ut consectetur convallis sapien, id pellentesque lectus sollicitudin scelerisque. Phasellus a elit imperdiet, posuere ligula a, malesuada lectus. Nullam maximus felis mauris, at facilisis ex dictum eleifend. In hac habitasse platea dictumst. Pellentesque vel justo ut justo eleifend tincidunt. Sed finibus risus ipsum, vel fringilla arcu cursus sed.

Donec sollicitudin nibh lectus, nec faucibus massa bibendum ut. Suspendisse ornare dapibus nibh, ac condimentum turpis. Phasellus non orci luctus, vulputate nisi non, dapibus felis. Phasellus at nunc tortor. Integer sit amet massa orci. Nullam laoreet condimentum tellus ut mollis. Morbi finibus magna ac risus congue egestas. Quisque a ultrices risus. Vestibulum risus magna, sodales et turpis a, bibendum malesuada nisi.

Nulla in est ultrices velit lacinia tempus eget nec nibh. Phasellus ac mollis nunc. Curabitur vitae pellentesque enim. Vestibulum quis urna eget libero imperdiet facilisis ut vel urna. Nunc sit amet elit id dolor facilisis aliquet. Morbi turpis nisi, fermentum tempor est et, elementum congue lorem. Nam mattis tincidunt posuere. Vestibulum id eros nec justo lacinia tincidunt.`}
                </Text>
            </TouchableOpacity>
            </ScrollView>
           

            {/* Footer */}
        <Animated.View style={[styles.footer,{height:heightFoot}]}>
            <TouchableOpacity style={styles.footerNav}>
            <Feather name='star' style={styles.footerNavIcon    }/>
            <Text style={styles.footerNavTitle}>Vote</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.footerNav}>
            <MaterialCommunityIcons name='message-text-outline' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle} >Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerNav}>
            <AntDesign name='sharealt' style={styles.footerNavIcon}/>
            <Text style={styles.footerNavTitle}>Share</Text>
            </TouchableOpacity>
        </Animated.View>
            </View>
           
        </View>

        // <View style={reader.container}>
        //     <ScrollView>
        //         <RenderHtml
        //             contentWidth={width}
        //             source={source}
        //         />
        //     </ScrollView>
        // </View>
    );
}

const reader = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {

    },
});

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
            paddingTop: Platform.OS ==='ios'? 30:  StatusBar.currentHeight,
           
            borderWidth:0.2,
            elevation: 6,
        },
        navBarIcon:
        {
            fontSize:25,
            color:colorTitle,
            paddingLeft:20,
            paddingRight:20
        },
        navTitle:
        {
            color:colorTitle,
            fontSize:15,
            fontWeight:'600'

        },
        scrollContainer:
        {
            height:'100%',
            width:'100%',
            display:'flex',
            backgroundColor:colorBackground,
            flex:1,

        },
        mainScreenContainer:
        {
            height:'100%',
            width:'100%',
            display:'flex',
            backgroundColor:colorBackground,
            padding:20,
            flex:1,
            
        },
        text:
        {
            color:colorText,
            textAlign:'justify',
            fontSize:fontSizeText,
            fontWeight:'500',
            paddingBottom:40
        },
        menuContainer:
        {
            flex:1,
            position:'absolute',
            backgroundColor:'black',

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
             paddingBottom: Platform.OS ==='ios'? 10: 0,
         },
         footerNav:
         {
             display:'flex',
             alignItems:'center',
             height:Platform.OS ==='ios'? '100%': '85%',
             justifyContent:'space-around',
            paddingTop:Platform.OS ==='ios'? 5: 0
         },
         footerNavIcon:
         {
             fontSize:23,
             color:colorTitle,
         },
         footerNavTitle:
         {
             fontSize:13,
             color:colorTitle,
             fontWeight:'500',
         },
    }
);

export default ReaderContainer