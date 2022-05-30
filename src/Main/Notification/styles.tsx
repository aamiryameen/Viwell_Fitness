import {ViewStyle, TextStyle, StyleSheet,} from 'react-native';
import { FontWeights } from 'src/theme';

interface Style {
  container: ViewStyle;
  HeaderContainer: ViewStyle;
  Header_Text: TextStyle;
  ListContainer: ViewStyle;
  imageContainer: ViewStyle;
  infoContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  timeContainer: ViewStyle;
  Time: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  HeaderContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    height: 80,
    paddingTop: 20,
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Header_Text: {
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },
  ListContainer: {
    width: '95%',
    height: 80,
    backgroundColor: '#242731',
    alignSelf: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    width: '60%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontFamily: "SF Pro Display",
    fontWeight: '700'
  },
  description: {
    fontSize: 14,
    color: '#828282',
    fontFamily: "ABeeZee",
    fontWeight: '400'
  },
  timeContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
      fontFamily: "ABeeZee",
  },
  Time: {
    fontSize: 14,
    color: '#828282',
    fontFamily: "ABeeZee",
    fontWeight: '400'
  },
});
