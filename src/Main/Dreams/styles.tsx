import {ViewStyle, TextStyle, StyleSheet, ImageStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  HeaderContainer: ViewStyle;
  Box3: ViewStyle;
  headerContainer: ViewStyle;
  Weight: ViewStyle;
  Weight0: ViewStyle;
  Weight_Text: TextStyle;
  Weight_Text0: TextStyle;
  DueDate: TextStyle;
  CalBox: ViewStyle;
  IconBox: ViewStyle;
  month: TextStyle;
  day: TextStyle;
  year: TextStyle;
  reminder: TextStyle;
  timeBox: ViewStyle;
  every: TextStyle;
  timeShow: ViewStyle;
  time: TextStyle;
  detail: ViewStyle;
  habit: ViewStyle;
  habitText: TextStyle;
  info: TextStyle;
  listConatiner: ViewStyle;
  title: TextStyle;
  weekContainer: ViewStyle;
  Days: TextStyle;
  weekContainer0: ViewStyle;
  linearGradient:ViewStyle;
  buttonText:TextStyle;
  ButtonBox:ViewStyle;
  Button:ViewStyle;
  ButtonText:TextStyle;
  NotesDetail:TextStyle;

}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  HeaderContainer: {
    width: '100%',
    backgroundColor: '#fff',
    height: 107,
    paddingTop: 50,
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Box3: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderColor: '#828282',
    borderBottomWidth: 0.2,
  },
  headerContainer: {
    width: '100%',
    height: 517,
    backgroundColor: 'transparent',
  },
  Weight: {
    width: '90%',
    height: 99,
    backgroundColor: '#E89925',
    alignSelf: 'center',
    marginTop: -50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Weight0: {width: '80%'},
  Weight_Text: {
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '800',
    color: '#482801',
  },
  Weight_Text0: {
    fontFamily: 'SF Pro Display',
    fontSize: 15,
    fontWeight: '500',
    color: '#482801',
  },
  DueDate: {
    fontFamily: 'SF Pro Display',
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    marginLeft: '8%',
    marginTop: 15,
    marginBottom: 10,
  },
  CalBox: {
    height: 51,
    width: '84%',
    alignSelf: 'center',
    backgroundColor: '#333333',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconBox: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  month: {
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  day: {
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  year: {
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  reminder: {
    fontFamily: 'SF Pro Display',
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    marginLeft: '8%',
    marginTop: 15,
    marginBottom: 10,
  },
  timeBox: {
    height: 51,
    flexDirection: 'row',
    alignItems: 'center',
    width: '84%',
    alignSelf: 'center',
  },
  every: {
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  timeShow: {
    width: 134,
    height: 51,
    backgroundColor: '#333333',
    borderRadius: 16,
    marginLeft: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  detail: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: '#252525',
    width: '100%',
    marginTop: 34,
  },
  habit: {
    width: '90%',
    alignSelf: 'center',
  },
  habitText: {
    fontFamily: 'SF Pro Display',
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    marginTop: 15,
  },
  info: {
    fontFamily: 'SF Pro Display',
    fontSize: 15,
    fontWeight: '400',
    color: '#B5B1B1',
  },
  listConatiner: {
    width: '100%',
    height: 56,
    marginTop: 16,
    backgroundColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
    borderRadius: 16,
  },
  title: {
    fontFamily: 'ABeeZee',
    fontSize: 13,
    fontWeight: '400',
    color: '#fff',
  },
  weekContainer: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Days: {
    fontFamily: 'ABeeZee',
    fontSize: 13,
    fontWeight: '400',
    color: '#E89925',
  },
  weekContainer0: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,
    height:100
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  ButtonBox:{
    position: 'absolute',
    bottom: 0,
    height: 88,
    backgroundColor: '#000',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
    height: 56,
    backgroundColor: '#E37C00',
    width: '95%',
    borderRadius: 16,
    justifyContent:'center'
  },
  ButtonText:{
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textAlign:'center'
  },
  NotesDetail: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    fontWeight: '400',
    color: '#B5B1B1',
  },
});
