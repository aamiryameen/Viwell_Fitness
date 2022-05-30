import {ViewStyle, TextStyle, StyleSheet, ImageStyle} from 'react-native';
import { FontWeights } from 'src/theme';

interface Style {
  container: ViewStyle;
  Box0: ViewStyle;
  Box0_0: ViewStyle;
  Box0_1: ViewStyle;
  Box0_0_Image: ImageStyle;
  Box0_1_Text: TextStyle;
  Box0_1_Text1: TextStyle;
  Box1:ViewStyle;
  Box1_Text:TextStyle;
  Box2:ViewStyle;
  Box2_0:ViewStyle;
  Box2_0_Text:TextStyle;
  Box2_1:ViewStyle;
  Box2_1_Text:TextStyle;
  Box3:ViewStyle;
  Box3_Text:TextStyle;
  Box4:ViewStyle;
  Box4_0:ViewStyle;
  Box4_0_Image:ImageStyle;
  Box4_0_Text:TextStyle;
  Box4_1:ViewStyle;
  Box4_1_Image:ImageStyle;
  Box4_1_Text:TextStyle;
  Box5:ViewStyle;
  Box5_0:ViewStyle;
  Box5_0_0:ViewStyle;
  Box5_0_0_Text:TextStyle,
  Box5_0_1:ViewStyle,
  Box5_0_1_Text:TextStyle,
  Box5_1:ViewStyle,
  Box5_2:ViewStyle,
  Box5_2_0:ViewStyle,
  Box5_2_1:ViewStyle,

}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Box0: {
    width: '100%',
    height: 344,
    alignItems: 'center',
    flexDirection: 'column',
  },
  Box0_0: {
    height: 290,
    width: '100%',
    alignSelf: 'center',
  },
  Box0_0_Image: {
    height: 290,
    width: '100%',
  },
  Box0_1: {
    height: 70,
    width: '95%',
    marginTop: -30,
  },
  Box0_1_Text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'ABeeZee',
    fontStyle: 'italic',
    lineHeight:24
  },
  Box0_1_Text1: {
    color: '#BDBDBD', 
    fontSize: 14, 
    fontFamily: 'Poppins',
    fontWeight: '400'
  },
  Box1:{
    width: '95%',
    alignSelf: 'center',
    marginTop:32
  },
  Box1_Text:{
    fontSize: 16,
    color: '#BDBDBD',
    lineHeight: 24,
    fontWeight: '400',
    fontFamily: 'ABeeZee'

  },
  Box2:{
    width: '92%',
    height: 33,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  Box2_0:{
    width: '82%',
    height: 33,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  Box2_0_Text:{
    fontFamily: 'SF Pro Display',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 22,
    color: '#fff',
  },
  Box2_1:{
    height: 33,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box2_1_Text:{
    fontFamily: 'ABeeZee',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#FD635D',
  },
  Box3:{
    
    marginTop: 5,
    // flexDirection: 'row',
    marginLeft: '4%',
  },
  Box3_Text:{
    fontSize: 12,
    color: '#BDBDBD',
    fontFamily: 'SF Pro Display',
    lineHeight: 18, 
    letterSpacing: 0.22
  },
  Box4:{
    width: '100%',
    height: 179,
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Box4_0:{
    width: '40%', 
    alignItems: 'center'
  },
  Box4_0_Image:{
    width: 154,
    height: 179,
    flex: 1,
    paddingTop: 20,
  },
  Box4_0_Text:{
    fontSize: 20,
    color: '#C43C3C',
    fontFamily: 'SF Pro Display',
    marginLeft: 16,
    fontWeight: '700',
  },
  Box4_1:{
    width: '40%', 
    alignItems: 'center'
  },
  Box4_1_Image:{
    width: 154,
    height: 179,
    flex: 1,
    paddingTop: 20,
  },
  Box4_1_Text:{
    fontSize: 20,
    color: '#C43C3C',
    fontFamily: 'SF Pro Display',
    marginLeft: 16,
    fontWeight: '700',
  },
  Box5:{
    width: '96%',
    marginTop: 24,
    alignSelf: 'center',
    height: 43,
    flexDirection:'row',
  },
  Box5_0:{
    width:'30%', 
    flexDirection:'row'
  },
  Box5_0_0:{
    width: 61,
    height: 42,
    flexDirection:'row', 
  },
  Box5_0_0_Text:{
    fontSize: 16,
    color: '#BDBDBD',
    fontFamily: 'ABeeZee',
    marginTop: 16,
  },
  Box5_0_1:{
    width: 61,
    height: 42,
    flexDirection:'row'
  },
  Box5_0_1_Text:{
    fontSize: 16,
    color: '#BDBDBD',
    fontFamily: 'ABeeZee',
    marginTop: 16,
  },
  Box5_1:{
    width: '50%'
  },
  Box5_2:{
    width: '20%', 
    flexDirection: 'row'
  },
  Box5_2_0:{
    width: 40,
    height: 42,
  },
  Box5_2_1:{
    width: 40,
    height: 42,
  }
});
