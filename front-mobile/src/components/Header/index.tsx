import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');

  }
  return (
    < TouchableWithoutFeedback onPress={handleOnPress} >
      <View style={styles.header}>
        <Text style={styles.textLogo1}>Notícias</Text>
        <Text style={styles.textLogo2}>em primeira mão</Text>
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create(
  {
    header: {
      paddingTop: 50,
      height: 90,
      backgroundColor: '#448286',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    textLogo1: {
      fontWeight: 'bold',
      fontSize: 25,
      fontFamily: "Play_700Bold",
      color: '#00D4FF',
      marginLeft: 25,
      marginRight: 10,
    },
    textLogo2: {
      fontWeight: 'bold',
      fontFamily: "Play_700Bold",
      fontSize: 23,
      color: '#FFF'
    },
    tinyLogo: {
      width: 25,
      height: 25,
    },
  }
)
;
export default Header;