
import React from 'react';
import { useEffect, useState } from 'react';
import Animated, { useSharedValue } from "react-native-reanimated"
import { StyleSheet } from 'react-native';


function GoblinSprites({ image }) {

    console.log('GoblinSprites', image)

    const [ready, setReady] = useState(false);

    const counter = useSharedValue(0)
    // const spriteMap = false

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            counter.value = (counter.value + 1) % 3
        }, 100)
        console.log("counter", counter.value)
        return () => clearInterval(interval);
    }, []);

    return (
        <Animated.View style={{
            backgroundColor: 'white',
            width: 100,
            height: 100,
        }}>
            <Animated.Image
                source={require('@/assets/images/goblin_big.png')}
                style={animatedStyles.img}
            />
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    container: { height: 450, width: 350, borderWidth: 3, borderColor: 'gray' }
})

const animatedStyles = StyleSheet.create({
    img:  {
                    backgroundSize: "480px 730px",
                    backgroundRepeat: "no-repeat",
                    backgroundClip: "content-box",
                    backgroundPosition: "0px 0px",
                    width: 160,
                    height: 180,
                    borderRadius: 0,
    }
})

export default GoblinSprites;