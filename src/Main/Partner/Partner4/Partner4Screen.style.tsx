import { ViewStyle, TextStyle, StyleSheet, ImageStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  Box0: ViewStyle;
  Box0_Text: TextStyle;
  Box1: ViewStyle;
  Box1_Text: TextStyle;
  List_Text: TextStyle;
  List_Text0: TextStyle;
  Box1_0: ViewStyle;
  Box1_Text0: TextStyle;
  Box1_Text1: TextStyle;
  Box1_Text2: TextStyle;
  ListBox: ViewStyle;
  Box_Image: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Box0: {
    width: 259,
    height: 50,
    marginTop: 23,
    flexDirection: 'row',
    paddingHorizontal: "5%",
    // alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  Box0_Text: {
    fontSize: 24,
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
    color: '#fff',
  },
  Box1: {
    height: 22,
    width: 40,
    backgroundColor: '#FE7762',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 16,
    marginTop: 16,
  },
  Box1_Text: {
    fontSize: 11,
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    color: '#fff',
  },
  List_Text: {
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    marginLeft: 10,
  },
  List_Text0: {
    fontSize: 11,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#828282',
    textAlign: 'center',
    marginLeft: 10,
  },
  Box1_Text0: {
    fontSize: 11,
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    color: '#000',
  },
  Box1_0: {
    height: 22,
    width: 82,
    backgroundColor: '#F6CE42',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: "5%",
    marginTop: "5%",
  },
  Box1_Text1: {
    fontSize: 18,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#fff',
    fontStyle: 'italic',
    marginTop: 86,
    marginLeft: 16,
  },
  Box1_Text2: {
    fontSize: 11,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#F2F2F2',
    fontStyle: 'italic',
    marginTop: 6,
    marginLeft: 16,
  },
  ListBox: {
    backgroundColor: '#252525',
    borderRadius: 16,
    marginRight: 5,
    flexDirection: 'column',
    alignItems: 'center',
    height: 160,
    width: 160,
    justifyContent: 'center',
  },
  Box_Image: {
    height: 185,
    width: 259,
    marginTop: 23,
    paddingHorizontal: "5%"
  },
});
