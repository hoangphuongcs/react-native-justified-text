import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
    name: 'JustifiedText',
    propTypes: {
        text: PropTypes.string,
        ...View.propTypes // include the default view properties
    },
};

module.exports = requireNativeComponent('JustifiedText', iface);