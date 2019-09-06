import { StyleSheet } from 'react-native';
var styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden'
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    hidden: {
        height: 0,
        flex: 0
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    loadingProgressBar: {
        height: 20
    },
    errorText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 2
    },
    errorTextTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10
    },
    webView: {
        backgroundColor: '#ffffff'
    }
});
export default styles;
