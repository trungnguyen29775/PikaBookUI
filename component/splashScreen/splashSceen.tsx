import { StyleSheet, Text, View,Image,Dimensions, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView, FlatList,SectionList,Animated  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { rgba } from 'polished'
import { useState, useEffect,useRef} from 'react';
import { transform } from '@babel/core';
const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const colorList = "rgba(177, 222, 255, 1)";
const colorBackgroundBook = "rgba(224, 241, 255, 1)"
const colorText = "rgba(78, 78, 78, 1)";
const colorPagingText = "rgba(177, 222, 255, 1)";
const colorPagingTextActive = "rgba(35, 161, 255, 1)";
const {width} = Dimensions.get("window")
const SplashScreen = ({navigation}: {navigation: any}) =>
{
    const images = [
        {
            uri: require("../../assets/mineCraft.png"),
        },
        {
            uri: require("../../assets/mineCraft.png"),
        },
        {
            uri: require("../../assets/mineCraft.png"),
        },
        {
            uri: require("../../assets/mineCraft.png"),
        },
        {
            uri: require("../../assets/mineCraft.png"),
        },
        {
            uri: require("../../assets/mineCraft.png"),
        },
    ]

    const [active,setActive] = useState(0)

    const change = ({nativeEvent}:{nativeEvent:any})=>
    {
        console.log(nativeEvent.contentOffset.x /width)
        const slide = Math.ceil((nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width))
        if(slide!==active)
            setActive(slide)
        
    }
    
    // const scaleState = useRef(new Animated.Value(1)).current;

    // const scaleUp = ()=>
    // {
    //     Animated.timing(scaleState, {
    //         toValue: 1,
    //         duration: 1000,
    //         useNativeDriver: true
    //     }).start();
      
    // };

    // const scaleDown = ()=>
    // {
    //     Animated.timing(scaleState, {
    //         toValue: 0.8,
    //         duration: 1000,
    //         useNativeDriver: true
    //     }).start();
      
    // };
   
    return(
        <SafeAreaView style={styles.mainContentContainer}>
            <View  style={styles.scrollContainer} >
                <Animated.ScrollView 
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={change}
                scrollEventThrottle={16}
                
                >
                    {
                        images.map((image,index)=>(
                          
                            <Animated.Image
                            key={index}
                            source={image.uri}
                            style={styles.splashScreenImageActive}
                            />
                        ))
                    }

                </Animated.ScrollView>
                <View style={styles.pagination}>
                    {
                        images.map((i,k)=>
                        (
                            <Text key={k} style={k==active?styles.paginationTextActive: styles.paginationText}>⬤</Text>
                        ))
                    }
                </View>
            </View>
            <View>
                <Text></Text>
                <Text>
                    Nows, let's choose the type of books that you love to join with Pikabook!
                </Text>
            </View>
            <TouchableOpacity>
                <Text>
                    Get started!
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create
(
    {
        mainContentContainer:
        {
            display:'flex',
            height:'100%',
            width:'100%',
            alignItems:'center',
        },
        scrollContainer:
        {
            marginTop:70,
            height:550,
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around'
        },
        splashScreenImage:
        { 
            height:410,
            width:218,
            borderRadius:10,
            marginRight:10,
            transform: [{scale: 0.8}]

        },
        splashScreenImageActive:
        { 
            height:410,
            width:218,
            borderRadius:10,
            marginRight:10,
            marginLeft:10,
            transform: [{scale: 1}]
        },
        pagination:
        {
           display:'flex',
           flexDirection:'row',

        },
        paginationText:
        {
            color:colorPagingText,
            fontSize:8,
            marginRight:3
        },
        paginationTextActive:
        {
            color:colorPagingTextActive,
            fontSize:8,
            marginRight:3
        }
    }
);

export default SplashScreen;