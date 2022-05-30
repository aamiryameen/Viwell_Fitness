import {ViewStyle, TextStyle, StyleSheet,} from 'react-native';

interface Style {
  container: ViewStyle;
  Box0: ViewStyle;
  Box0_Text: TextStyle;
  header: ViewStyle;
  Box1: ViewStyle;
  footer: ViewStyle;
  Box1_Text: TextStyle;
  Box1_Text0: TextStyle;
  Box1_Text00: TextStyle;
  Box1_0:ViewStyle;
  Box1_Text1: TextStyle;
  Box1_Text2: TextStyle;
  Box1_Text3: TextStyle;
  Box1_Text4: TextStyle;
  Box1_1:ViewStyle;
  Box1_2:ViewStyle;
  roundedTextInput:ViewStyle;
  textInputContainer:ViewStyle;
  input:TextStyle

}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#242731',
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
  Box0_Text: {
    fontSize: 24,
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
    backgroundColor: '#242731',
  },
  Box1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flex: 1,
    backgroundColor: '#242731',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: -50,
    width: '100%',
  },
  Box1_Text: {
    fontSize: 17,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#fff',
  },
  Box1_Text0: {
    fontSize: 11,
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    color: '#000',
  },
  Box1_0:{
    height: 22,
    width: 82,
    backgroundColor: '#F6CE42',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  Box1_Text00: {
    fontSize: 14,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop:6,
    textAlign:'justify',
  },
  Box1_Text1: {
    fontSize: 24,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#FFFFFF',
    fontStyle:'italic',
    marginTop:25,
    textAlign:'center'
  },
  Box1_Text2: {
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop:6,
    textAlign:'center'
  },
  Box1_Text3: {
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign:'center'
  },
  Box1_Text4: {
    fontSize: 24,
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign:'center'
  },
  Box1_1:{
    width: '100%',
    height: 56,
    borderRadius: 16,
    backgroundColor: '#333333',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:36
  },
  Box1_2:{
    width: '100%',
    height: 56,
    borderRadius: 16,
    backgroundColor: '#E37C00',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:84
  },
  textInputContainer: {
    marginBottom: 0,
    color:'#fff'
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor:'#333333',
    color:'#fff'
    
  },
  input: {
    height: 56,
    margin: 0,
    borderWidth: 0,
    padding: 10,
    backgroundColor:'#333333',
    color:'#fff',
    textAlign:'center',
    borderRadius:16,
    fontSize: 24,
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
  },
});
