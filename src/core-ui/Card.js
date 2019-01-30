// @flow

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

type Style = {
  buttonBackColor: string,
  cardBackColor: string,
  textColor: string,
};

type Props = {
  imageUrl: string,
  containerStyle?: Style,
  text: string,
  buttonText: string,
  onClick: () => Void,
};

export class Card extends Component<Props> {
  render() {
    const containerStyle = this.props.containerStyle;
    const {cardBackColor, textColor, buttonBackColor} = containerStyle ? containerStyle : {};

    return (
      <View style={[styles.container, {backgroundColor: cardBackColor ? cardBackColor : 'white'}]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: this.props.imageUrl}} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={{flex: 1, color: textColor ? textColor : 'black'}}>{this.props.text}</Text>
          <Button
            style={{
              flex: 1,
              backgroundColor: buttonBackColor ? buttonBackColor : 'white',
            }}
            title={this.props.buttonText}
            onPress={this.props.onClick}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: 'gray',
    borderWidth: 5,
    margin: 20,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
  },
  imageContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
