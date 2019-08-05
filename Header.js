import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{ props.headertext }</Text>
      </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FF8800',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    paddingTop: 50

  },
  textStyle: {
    fontsize: 40,

    fontColor: 'white'
  }
};

export default Header;
