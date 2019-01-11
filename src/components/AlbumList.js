import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { AlbumDetail } from './AlbumDetail';

export class AlbumList extends React.PureComponent {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) =>
            this.setState(() => ({ albums: response.data }))
        );
    }

    render() {
        const { albums } = this.state;
        console.log(this.state);
        if (albums.length !== 0) {
            return albums.map(item => <AlbumDetail key={item.title} album={item} />);
        }
        return (
            <View>
                <Text>Loading!</Text>
            </View>
        );
    }
}

