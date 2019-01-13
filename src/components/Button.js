import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onClick }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onClick} style={buttonStyle} >
            <Text style={textStyle}>Click me!!!</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
};
