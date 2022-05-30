import {ViewStyle, TextStyle, StyleSheet, ImageStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  Box0: ViewStyle;
  Box0_Text: TextStyle;
  Box1:ViewStyle;
  Box1_0:ViewStyle;
  Box1_0_Text:TextStyle;
  Box1_0_Text0:TextStyle;
  Box1_1:ViewStyle;
  Box1_1_Text:TextStyle;
  Box1_1_Text0:TextStyle;
  Box2:ViewStyle;
  Box2_Text:TextStyle;
  Box2_0:ViewStyle;
  Box2_0_0:ViewStyle;
  Box2_0_0_0:ViewStyle;
  Box2_0_0_0_Text:TextStyle;
  Box2_0_0_0_Text0:TextStyle;
  Box2_0_0_1:ViewStyle;
  Box2_0_0_0_Text1:TextStyle;
  Box2_0_0_2:ViewStyle;
  Box2_0_0_2_Text:TextStyle;
  Box2_0_1:ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Box0: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    marginTop:13
  },
  Box0_Text: {
    fontSize: 24,
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
    color: '#fff',
  },
  Box1:{
    width: '85%',
    height: 174,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  Box1_0:{
    width: '50%',
    height: 174,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box1_0_Text:{
    fontFamily: 'ABeeZee',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#E89925',
  },
  Box1_0_Text0:{
    fontFamily: 'SF Pro Display',
    fontSize: 64,
    fontWeight: '100',
    color: '#fff',
  },
  Box1_1:{
    width: '50%',
    height: 174,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box1_1_Text:{
    fontFamily: 'ABeeZee',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#fff',
  },
  Box1_1_Text0:{
    fontFamily: 'ABeeZee',
    fontSize: 14,
    fontWeight: '400',
    color: '#9EA3AE',
  },
  Box2:{
    width: '95%',
    height: 309,
    alignSelf: 'center',
    flexDirection: 'column',
    borderWidth:1,
    borderColor:'#fff',
    marginTop:35,
    backgroundColor:'#fff',
    borderRadius:8,
  },
  Box2_Text:{
    fontFamily: 'ABeeZee',
    fontSize: 20,
    fontWeight: '400',
    color: '#192126',
    fontStyle:'italic',
    marginTop:20,
    marginLeft:14
  },
  Box2_0:{
    height: 60,
    width: '93%',
    alignSelf: 'center',
    flexDirection:'row',
    borderColor:'#6C727F',
    borderBottomWidth:.2,
    marginBottom:8,
    marginTop:8
    
  },
  Box2_0_0:{
    height: 60,
    width: '88%',
    alignSelf: 'center',
  },
  Box2_0_0_0:{
    height: 16,
    width: '100%',
    alignSelf: 'center',
    flexDirection:'row',
    alignItems:'center',
  },
  Box2_0_0_0_Text:{
    color: '#000',
    marginLeft: 8,
    fontSize: 12,
    fontFamily: 'ABeeZee',
    fontStyle: 'italic',
    fontWeight: '400',
  },
  Box2_0_0_0_Text0:{
    color: '#6C727F',
    marginLeft: 8,
    fontSize: 12,
    fontFamily: 'ABeeZee',
    fontWeight: 'bold',
  },
  Box2_0_0_1: {
    height: 5,
    width: 5,
    borderWidth: 3,
    borderColor: '#6C727F',
    borderRadius: 3,
    marginLeft: 8,
  },
  Box2_0_0_0_Text1: {
    color: '#6C727F',
    marginLeft: 8,
    fontSize: 12,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
  },
  Box2_0_0_2: {
    height: 44,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Box2_0_0_2_Text:{
    color: '#192126',
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    fontWeight: '100',
  },
  Box2_0_1:{
    height: 60,
    width: '12%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
