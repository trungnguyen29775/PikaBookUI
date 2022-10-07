import { StyleSheet, View, useWindowDimensions, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { sample } from '../../const/test';

const source = sample

const ReaderContainer= ({navigation}: {navigation: any})=>{
    const { width } = useWindowDimensions();
    return (
        <View style={reader.container}>
            <ScrollView>
                <RenderHtml
                    contentWidth={width}
                    source={source}
                />
            </ScrollView>
        </View>
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
export default ReaderContainer