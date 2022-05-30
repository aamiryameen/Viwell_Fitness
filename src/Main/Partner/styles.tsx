import {ViewStyle, TextStyle, StyleSheet, ImageStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  contentContanier:ViewStyle;

}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems:'center',
    justifyContent:'center',
  },
  contentContanier: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
 
});
