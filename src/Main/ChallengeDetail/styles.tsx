import {ViewStyle, TextStyle, StyleSheet, ImageStyle, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

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
  Box3_0: ViewStyle;
  Box3_0_Text: TextStyle;
  Box3_1: ViewStyle;
  Box3_1_Text: TextStyle;
  Box4: ImageStyle;
  Box4_0: ViewStyle;
  Box4_0_Text: ViewStyle;
  Box4_1: ViewStyle;
  Box4_1_Text: TextStyle;
  Box4_1_Text0: TextStyle;
  Box5: ViewStyle;
  Box5_0: ViewStyle;
  Box5_0_Text: TextStyle;
  Box5_1: ViewStyle;
  Box5_1_Text: TextStyle;
  Box6: ViewStyle;
  Box6_Image: ImageStyle;
  Box7: ViewStyle;
  Box7_0: ViewStyle;
  Box7_0_0: ViewStyle;
  Box7_0_1: ViewStyle;
  Box7_0_1_Text: TextStyle;
  contentContanier:ViewStyle;
  Box_Image:ImageStyle,
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
    width: '96%',
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
    marginRight:10
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
    marginTop: 10,
    marginLeft: 29,
  },
  Box0_1_Text: {
    fontSize: 20,
    fontFamily: 'SF Pro Display',
    color: '#fff',
    fontWeight: '400',
    marginBottom: 6,
  },
  Box0_1_Text0: {
    fontSize: 25,
    fontFamily: 'SF Pro Display',
    color: '#fff',
    fontWeight: '800',
  },
  Box1: {
    width: '100%',
    height: 67,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#363333',
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
    width: '95%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 85,
    alignSelf: 'center',
    backgroundColor: '#000',
    marginTop:20
  },
  Box2_0: {
    width: 120,
    height: 85,
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
    marginTop:10
  },
  Box2_1: {
    width: 87,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    marginRight: 30,
    marginTop:20
  },
  Box2_1_Text: {
    fontSize: 14,
    fontFamily: 'SF Pro Display',
    color: '#fff',
    textAlign: 'center',
    marginTop:10
  },
  Box3: {
    width: '90%',
    height: 34,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#000',
    marginTop: 25,
    // marginBottom: 10,
  },
  Box3_0: {
    width: '80%',
    height: 34,
  },
  Box3_0_Text: {
    fontSize: 22,
    fontFamily: 'SF Pro Display',
    color: '#fff',
    fontWeight: '700',
  },
  Box3_1: {
    width: '20%',
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  Box3_1_Text: {
    fontSize: 14,
    fontFamily: 'ABeeZee',
    color: '#E37C00',
    textAlign: 'center',
    fontWeight: '400',
  },
  Box4: {
    width: '95%',
    height: 185,
    alignSelf: 'center',
    marginLeft: '3%',
  },
  Box4_0: {
    width: 82,
    height: 22,
    borderRadius: 8,
    backgroundColor: '#F6CE42',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box4_0_Text: {
    fontSize: 11,
    fontFamily: 'SF Pro Text',
    color: '#000',
    textAlign: 'center',
    fontWeight: '700',
  },
  Box4_1: {
    width: '85%',
    alignSelf: 'center',
    height: 81,
    marginTop: 50,
  },
  Box4_1_Text: {
    fontSize: 18,
    fontFamily: 'ABeeZee',
    color: '#fff',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  Box4_1_Text0: {
    fontSize: 14,
    fontFamily: 'ABeeZee',
    color: '#fff',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  Box5: {
    width: '90%',
    height: 34,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#000',
    marginTop: 25,
  },
  Box5_0: {
    width: '80%',
    height: 34,
  },
  Box5_0_Text: {
    fontSize: 22,
    fontFamily: 'SF Pro Display',
    color: '#fff',
    fontWeight: '700',
  },
  Box5_1: {
    width: '20%',
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  Box5_1_Text: {
    fontSize: 14,
    fontFamily: 'ABeeZee',
    color: '#E37C00',
    textAlign: 'center',
    fontWeight: '400',
  },
  Box6: {
    width: '92%',
    height: 200,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  Box6_Image: {
    width: 180,
    height: 180,
    borderRadius: 16,
  },
  Box7: {
    width: '100%',
    height: 125,
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    bottom: 0,
  },
  Box7_0: {
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
  Box7_0_0: {
    width: '15%',
    height: 56,
    backgroundColor: '#E37C00',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box7_0_1: {
    width: '83%',
    height: 56,
    backgroundColor: '#E37C00',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box7_0_1_Text: {
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    color: '#F2F2F2',
    fontWeight: '700',
  },
  contentContanier: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  Box_Image: {
    height: 185,
    width:  windowWidth-40,
    // marginTop: 15,
    alignSelf: 'center',
  },
});
