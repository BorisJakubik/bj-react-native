import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import { Card } from './Card';
import { CardSection } from './CardSection';
import Button from './Button';

export const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const {
        headerContentStyle,
        thumbnailStyles,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle,
    } = styles;
    console.log(album);
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyles} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onClick={() => Linking.openURL(url)}>
                    Buy now!!
                </Button>    
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyles: {
        width: 50,
        height: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
};
