import EStyleSheet from "react-native-extended-stylesheet";
import Colors from "../../utils/Colors";

export const animatedSplashStyles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    animatedSplashContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        zIndex: 10
    },
    animatedSplashImage: {
        width: '45%',
        height: '20%'
    },
    emptySplashImage: {
        width: '100%',
        height: '100%'
    }
});