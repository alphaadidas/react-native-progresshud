'use strict';

import styles  from'./styles';
import LoadingIndicator  from './loader';
import PropTypes from 'prop-types';
import React from 'react';
import {
    View,
    Text,
    ActivityIndicatorIOS,
    StyleSheet
} from 'react-native';
export default class index extends React.Component {

    static propTypes = {
        text: PropTypes.string,
        showHUD: PropTypes.bool,
    };


    render() {
        if (this.props.showHUD) {
            return (
                <View style={styles.container}>
                    <LoadingIndicator text={this.props.text} showLoading={this.props.showLoading}/>
                </View>
            );
        } else {
            return null;
        }
    }
}