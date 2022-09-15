import { StyleSheet, Text, View,Image,TextInput, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView, FlatList,SectionList  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import { useState, useEffect} from 'react';
const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const colorList = "rgba(177, 222, 255, 1)";
const colorBackgroundBook = "rgba(224, 241, 255, 1)"
const colorText = "rgba(78, 78, 78, 1)";
const BookDetails = ({navigation}: {navigation: any}) =>
{
    return(
        <View style={{flex:1}}>
            <SafeAreaView style={styles.navBar}>
                <TouchableOpacity onPress={()=> navigation.navigate('MainScreenOldUser')}>
                    <AntDesign name='arrowleft' style={styles.navBarBack}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navTitle}>BookDetails</Text>
                </TouchableOpacity>
                <Icon name='bookmark' style={styles.navMark}/>
            </SafeAreaView>
            <ScrollView>
            <View style={styles.mainScreenContainer}>
                <View style={styles.bookContainer}>
                    <Image
                    source={require('../../assets/book-poster3.jpg')}
                    style={styles.bookPoster}
                    />
                    <View style={styles.bookInfoContainer}>
                       <Text style={styles.bookTitle}>
                            The sky above us
                        </Text>
                        <Text style={styles.authorBook}>John Green</Text>
                        <View style={styles.chapterContainer}>
                            <Icon name='list' style={styles.chapterBookIcon}/>
                            <Text style={styles.chapterBook}>25 chapters</Text>
                        </View>
                    </View>
                    <View style={styles.bookInteraction}>
                        <TouchableOpacity style={styles.interactionContainer}>
                        <Icon name='checkmark-circle' style={styles.interactionIcon}/>
                        <Text style={styles.iconTitle}>Added</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.interactionContainer}>
                        <AntDesign name='star' style={styles.iconStar}/>
                        <Text style={styles.iconTitle}>Voted</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.interactionContainer}>
                        <AntDesign name='sharealt' style={styles.interactionIcon}/>
                        <Text style={styles.iconTitle}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.headerTitle}>Description:</Text>
                    <View style={styles.descriptionTextContainer}>
                        <Text style={styles.descriptionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non dui placerat elit porttitor placerat et non dolor. Sed mauris odio, feugiat tempor sem efficitur, rutrum lectus. Proin dolor mauris, blandit vel augue id, pharetra tincidunt tortor. Ut urna dolor, posuere imperdiet enim vel, iaculis commodo lacus. Donec dolor dui, rutrum in lectus quis, condimentum volutpat massa. Fusce vehicula vel felis vel sollicitudin. Vestibulum mattis fermentum ultrices. Integer a sem a nulla vestibulum suscipit iaculis quis dolor. Etiam fermentum ante eu erat suscipit, non vehicula mi laoreet. Fusce euismod dignissim elit eget congue. Nulla tristique turpis at tortor molestie, porta tristique arcu consectetur. Praesent et lacus felis.
                        Phasellus iaculis eu arcu ac placerat. Praesent cursus lectus quis libero dictum, vel commodo nisl ornare. 
                        Duis porta eu tortor et fermentum. Sed pretium malesuada leo, ut facilisis ipsum auctor ac.
                        </Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            <SafeAreaView style={styles.footer}>
            
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
            height:Platform.OS ==='ios'? 100:80
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
        navMark:
        {
            fontSize:25,
            color:colorMark,
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
        bookContainer:{
            backgroundColor:colorBackgroundBook,
            display:'flex',
            alignItems:'center',
            padding:20,
            borderRadius:10,
            width:'100%',
            height:520,
            justifyContent:'space-around'
        },
        bookPoster:{
            height:300,
            width:234.3,
            borderRadius:10
        },
        bookInfoContainer:{
            display:'flex',
            alignItems:'center',
            height:80,
            justifyContent:'space-around'
        },
        bookTitle:
        {
            fontSize:25,
            fontWeight:'600'
        },
        authorBook:
        {
            color:colorLabel,
            fontSize:16,
            fontWeight:'600'
        },
        chapterContainer:
        {
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
        },
        chapterBook:
        {
            fontSize:13,
            marginLeft:2
        },
        chapterBookIcon:{
            fontSize:15
        },
        bookInteraction:{
            width:'70%',
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'space-around'
        },
        interactionContainer:
        {
            display:'flex',
            alignItems:'center',
            width:'30%'
        },
        interactionIcon:
        {
            fontSize:28,
            color:colorTitle
        },
        iconStar:{
            color:colorMark,
            fontSize:28
        },
        iconTitle:
        {
            color:colorTitle,
            fontSize:13
        },
        descriptionContainer:
        {
            width:'100%'
        },
        headerTitle:
        {
            color:colorTitle,
            fontSize:20,
            textDecorationLine:'underline',
            fontWeight:'600'
        },
        descriptionTextContainer:
        {
            width:'100%',
            marginTop:5,
        },
        descriptionText:{
            fontSize:18,
            color:colorText,
            textAlign:'justify'
        },
        footer:{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            justifyContent:'space-around',
            backgroundColor:'rgba(246, 251, 255, 1)',
            alignItems:'center',
            height:80,
            padding:5,
              
        },
        footerBackgroundImage:{
            height:'100%',
            width:'100%'
        },

    }
);

export default BookDetails;