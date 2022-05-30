import {ViewStyle, TextStyle, StyleSheet, ImageStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  Box0: ImageStyle;
  Box0_0: ViewStyle;
  Box0_0_1: ViewStyle;
  Box0_1: ViewStyle;
  Box0_0_1_Text: TextStyle;
  Box0_1_Text: TextStyle;
  Box0_1_Text0: TextStyle;
  Box1: ViewStyle;
  Box1_0: ViewStyle;
  Box1_0_Text: TextStyle;
  Box2: ViewStyle;
  Box2_0: ViewStyle;
  Box2_0_Text: TextStyle;
  Box2_1: ViewStyle;
  Box2_1_Text: TextStyle;
  Box3: ViewStyle;
  Box4: ViewStyle;
  Box4_0: ViewStyle;
  Box4_0_Image: ImageStyle;
  Box4_1: ViewStyle;
  Box4_1_Text: ViewStyle;
  Box4_1_Text0: TextStyle;
  Box4_2_Text: TextStyle;
  Box5: ViewStyle;
  Box5_0: ViewStyle;
  Box5_0_0: ViewStyle;
  Box5_0_0_Text: TextStyle;
  Box5_0_1: ViewStyle;
  Box5_0_1_Text: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Box0: {
    width: '100%',
    height: 397,
    resizeMode: 'stretch',
    backgroundColor: '#FFDBB0',
  },
  Box0_0: {
    width: '98%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  Box0_0_1: {
    width: 80,
    height: 22,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#F6CE42',
  },
  Box0_0_1_Text: {
    fontSize: 11,
    fontFamily: 'SF Pro Display',
    color: '#000',
    textAlign: 'center',
    fontWeight: '700',
  },
  Box0_1: {
    width: 155,
    height: 81,
    marginTop: 50,
    marginLeft: 29,
  },
  Box0_1_Text: {
    fontSize: 11,
    fontFamily: 'SF Pro Display',
    color: '#000',
    fontWeight: '800',
    marginBottom: 6,
  },
  Box0_1_Text0: {
    fontSize: 18,
    fontFamily: 'SF Pro Display',
    color: '#000',
    fontWeight: '800',
  },
  Box1: {
    width: '100%',
    height: 67,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#000',
    paddingLeft: 18,
    marginTop: -10,
  },
  Box1_0: {
    width: '70%',
    height: 67,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Box1_0_Text: {
    fontSize: 15,
    fontFamily: 'SF Pro Display',
    color: '#B5B1B1',
  },
  Box2: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 80,
    alignSelf: 'center',
    backgroundColor: '#000',
  },
  Box2_0: {
    width: 120,
    height: 74,
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  Box2_0_Text: {
    fontSize: 14,
    fontFamily: 'SF Pro Display',
    color: '#fff',
    textAlign: 'center',
  },
  Box2_1: {
    width: 87,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    marginRight: 30,
  },
  Box2_1_Text: {
    fontSize: 14,
    fontFamily: 'SF Pro Display',
    color: '#fff',
    textAlign: 'center',
  },
  Box3: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderColor: '#828282',
    borderBottomWidth: 0.2,
  },
  Box4: {
    width: '98%',
    height: 44,
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Box4_0: {
    width: 32,
    height: 32,
  },
  Box4_0_Image: {
    height: 32,
    width: 32,
    borderRadius: 5,
  },
  Box4_1: {
    width: 140,
    height: 44,
    borderColor: '#fff',
    paddingLeft: 10,
  },
  Box4_1_Text: {
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    color: '#fff',
    fontWeight: '700',
  },
  Box4_1_Text0: {
    fontSize: 14,
    fontFamily: 'ABeeZee',
    color: '#828282',
    textAlign: 'center',
  },
  Box4_2_Text: {
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    color: '#F2F2F2',
  },
  Box5: {
    width: '100%',
    height: 125,
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    bottom: 0,
  },
  Box5_0: {
    width: '99.5%',
    height: 88,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.56,
    shadowRadius: 16.0,

    elevation: 24,
  },
  Box5_0_0: {
    width: '30%',
    height: 56,
    backgroundColor: '#E37C00',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box5_0_0_Text: {
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    color: '#F2F2F2',
    fontWeight: '700',
  },
  Box5_0_1: {
    width: '68%',
    height: 56,
    backgroundColor: '#E37C00',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box5_0_1_Text: {
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    color: '#F2F2F2',
    fontWeight: '700',
  },
});
