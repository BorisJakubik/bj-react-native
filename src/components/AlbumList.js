import React from 'react';
import { ScrollView, Text } from 'react-native';
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
        if (albums.length !== 0) {
            return (
                <ScrollView>
                {
                    albums.map(item =>
                        <AlbumDetail key={item.title} album={item} />
                    )
                }
                </ScrollView>
            );
        }
        return (
            <ScrollView>
                <Text>Loading!</Text>
            </ScrollView>
        );
    }
}

