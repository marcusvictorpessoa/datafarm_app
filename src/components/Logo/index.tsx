import { Image, View } from "react-native"

export default function Logo({ logo_width, logo_height, logo_color, container_flex, container_width, container_height }: any): JSX.Element {

    return (
        <View style={{
            flex: container_flex,
            justifyContent: 'center',
            width: container_width,
            height: container_height,
        }}>
            <Image
                source={require('../../assets/logo-datafarm.png')}
                resizeMode="contain"
                style={{
                    width: logo_width,
                    height: logo_height,
                    tintColor: logo_color,
                }}
            />
        </View>
    );
}