import React from 'react';
import { AppRegistry } from 'react-native';
import { Header } from './src/components/header';
import { AlbumList } from './src/components/AlbumList';


export const App = () => (
    <React.Fragment>
        <Header headerText={'Albums'} />
        <AlbumList />
    </React.Fragment>
);

AppRegistry.registerComponent('reactnativebj', () => App);
