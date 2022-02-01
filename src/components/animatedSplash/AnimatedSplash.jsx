import React from 'react';
import {Image, View} from "react-native";
import {animatedSplashStyles} from "./AnimatedSplash.styles";

const AnimatedSplash = () => {
    return (
        <View style={animatedSplashStyles.container}>
            <View style={animatedSplashStyles.animatedSplashContainer}>
                <Image
                    style={animatedSplashStyles.animatedSplashImage}
                    resizeMode={'contain'}
                    source={require('../../../assets/loading-animation.gif')}
                />
            </View>
            <Image
                style={animatedSplashStyles.emptySplashImage}
                resizeMode={'contain'}
                source={require('../../../assets/empty-splash.png')}
            />
        </View>
    )
};

export default AnimatedSplash;