import { StyleSheet, Text, View,Image,TextInput, StatusBar,  Platform,TouchableOpacity,ScrollView,SafeAreaView, FlatList,SectionList,KeyboardAvoidingView  } from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons'
import {AntDesign as AntDesign} from '@expo/vector-icons'
import {MaterialCommunityIcons as MaterialCommunityIcons} from '@expo/vector-icons'
import{FontAwesome5 as FontAwesome5} from '@expo/vector-icons'
import{Octicons as Octicons} from '@expo/vector-icons'
import{Entypo as Entypo} from '@expo/vector-icons'
import{Feather as Feather} from '@expo/vector-icons'
import { useState, useEffect} from 'react';
import { padding } from 'polished';


const colorTitle  = "rgba(35, 161, 255, 1)";
const colorLabel = "rgba(151, 151, 151, 1)";
const colorBorder = "rgba(200, 200, 200, 1)";
const colorMark = "rgba(251, 188, 5, 1)";
const colorList = "rgba(177, 222, 255, 1)";
const colorNameGroup = "rgba(34, 83, 120, 1)"
const colorCoverBlank = "rgba(34, 83, 120, 0.35)"


function CountWord(word:String)
{
    let count = word.split(" ");
    return count.length-1;
}


const CreateNewBook = ({navigation}: {navigation: any}) =>
{
    const [wordCount,setWordCount] = useState(0)
    
    return(
        <View style={{flex: 1}}>
            <SafeAreaView style={styles.navBar}>
            <TouchableOpacity onPress={()=> navigation.navigate('WriteScreen')}>
                    <AntDesign name='arrowleft' style={styles.navBarBack}/>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navTitle}>Create new book</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('WriteScreen')}>
            <Feather name='x' style={styles.navBarBack} />
            </TouchableOpacity>
        </SafeAreaView>
        {/* Main content */}
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
        <ScrollView style={styles.mainScreenContainer}>
        <View style={styles.createBookContainer}>
            <TouchableOpacity style={styles.coverOfBook}>
                <AntDesign name='plus' style={styles.plusIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('CreateNewBook')}>
                <Text style={styles.createText}>Choose the cover</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <Text style={styles.headerTitle}>
                    Book title:
                </Text>
                <TextInput style={styles.inputTitleZone} 
                    multiline={true} 
                    >

                </TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headerTitle}>Book description:</Text>
                <View style={styles.inputDescriptionZone}>
                    <TextInput style={styles.inputContent} 
                    multiline={true} 
                    onChangeText={newText => setWordCount(CountWord(newText))}
                    autoCorrect={false}
                    textAlignVertical={'top'}
                    >

                    </TextInput>
                    <View style={styles.wordCountContainer}>
                    <Text 
                    style={{ 
                    fontStyle:'italic',
                    fontSize:13,
                    marginTop:10,
                    color: wordCount>200?'red':colorLabel}}>
                        {wordCount}/200 words
                    </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.buttonLabel}>Create</Text>
            </TouchableOpacity>
            </View>
            </View>
           
        </ScrollView>
        </KeyboardAvoidingView>
        {/* Footer */}
        <SafeAreaView style={styles.footer}>
            <TouchableOpacity style={styles.footerNav}>
            <Icon name='home-outline' style={styles.footerNavIconActive}/>
            <Text style={styles.footerNavTitleActive}>Home</Text>
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
            marginLeft:20,
            marginRight:20
        },
        navTitle:
        {
            color:colorTitle,
            fontSize:15,
            fontWeight:'600'
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
        createBookContainer:
        {
            height:'100%',
            width:'100%',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            padding:20
        },
        coverOfBook:
        {
            backgroundColor:colorCoverBlank,
            display:'flex',
            alignItems:'center',
            height:180,
            width:140,
        },
        plusIcon:
        {
            lineHeight:180,
            fontSize:25,
            color:'white'
        },
        createText:
        {
            color: colorNameGroup,
            fontSize:15,
            marginTop:10
        },
        inputContainer:
        {
            display:'flex',
            flexDirection:'column',
            width:'100%',
            marginTop:20
        },
        headerTitle:
        {
            fontSize:16,
            color:colorNameGroup,
            marginBottom:5,
            fontWeight:'700'
        },
        inputTitleZone:
        {
            width:'100%',
      
            borderWidth:1.5,
            borderRadius:10,
            borderColor:colorNameGroup,
            paddingTop:8,
            paddingBottom:8,
            paddingLeft:10,
            paddingRight:10,
            textAlign:'justify',
            color:colorTitle,
            fontSize:18,
            fontWeight:'600'
        },
        inputDescriptionZone:
        {
            width:'100%',
            height:300,
            borderWidth:1.5,
            borderRadius:10,
            borderColor:colorNameGroup,
            paddingTop:10,
            paddingBottom:5,
            paddingLeft:10,
            paddingRight:10,
        },
        inputContent:
        {
            color:colorTitle,
            fontSize:16,
            fontWeight:'500',
            height:'90%',
            width:'100%',
            
        },
        wordCountContainer:
        {
            display:'flex',
            alignItems:'flex-end',
            height:'10%',
            width:'100%'
        },
        buttonContainer:
        {
            width:'100%',
            display:'flex',
            alignItems:'center',
            paddingBottom:20
        },
        createButton:
        {
            width:110,
            display:'flex',
            alignItems:'center',
            height:45,
            backgroundColor:colorTitle,
            borderRadius:10,
            marginTop:20
        },
        buttonLabel:
        {
            lineHeight:45,
            color:'white',
            fontSize:16,
            fontWeight:'600'
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
   

export default CreateNewBook;
