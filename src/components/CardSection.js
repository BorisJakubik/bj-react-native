import React from 'react';
import { View } from 'react-native';

export const CardSection = ({ children }) => {
    return (
        <View style={styles.constainerStyle}>
            {children}
        </View>
    );
};

const styles = {
    constainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
};
