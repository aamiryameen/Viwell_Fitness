import {ViewStyle, TextStyle, StyleSheet, ImageStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  Box0: ViewStyle;
  Box0_Text: TextStyle;
  Box1: ViewStyle;
  Box2: ViewStyle;
  Box2_0: ViewStyle;
  Box2_0_Text:TextStyle;
  Box2_0_Text0:TextStyle;
  Box2_1: ViewStyle;
  Box3: ViewStyle;
  Box0_0: ViewStyle;
  Box0_1: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Box0: {
    width: '95%',
    height: 50,
    alignSelf: 'center',
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box0_0: {
    height: 40,
    width: '8%',
    justifyContent: 'center',
    
  },
  Box0_Text: {
    fontSize: 24,
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
    color: '#fff',
    // textAlign: 'center',
  },
  Box1: {
    // height: 169,
    // width: 169,
    // borderWidth: 0.4,
    borderColor: '#fff',
    alignSelf: 'center',
    // marginTop: 23,
  },

  Box2: {
    height: 74,
    width: '95%',
    alignSelf: 'center',
    // marginTop: 35,
    flexDirection: 'row',
    backgroundColor:'#384046',
    alignItems:'center',
    borderRadius:16,
  },
  Box2_0: {
    height: 74,
    width: '50%',
    alignSelf: 'center',
    backgroundColor:'#2D3439',
    borderTopLeftRadius:16,
    borderBottomLeftRadius:16
  },
  Box2_0_Text:{
    fontFamily: 'ABeeZee',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#9EA3AE',
    marginTop:12,
    marginLeft:26
  },
  Box2_0_Text0:{
    fontFamily: 'ABeeZee',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#fff',
    marginLeft:10  
  },
  Box2_1: {
    height: 74,
    width: '50%',
    alignSelf: 'center',
    backgroundColor:'#384046',
    borderRadius:16,
    borderTopRightRadius:16,
    borderBottomRightRadius:16

  },
  Box3: {
    height: 269,
    width: '95%',
    alignSelf: 'center',
    marginTop: 35,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems:'center',
    paddingTop:10
  },
  Box0_1: {
    width: '92%',
    height: 40,
    paddingLeft:'15%'
  },
  
});
