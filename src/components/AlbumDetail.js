import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card } from './Card';
import { CardSection } from './CardSection';

export const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist, image } = album;
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
