import { ViewStyle, TextStyle, StyleSheet,ImageStyle } from "react-native";

interface Style {
  container: ViewStyle;
  buttonStyle: ViewStyle;
  titleTextStyle: TextStyle;
  buttonTextStyle: TextStyle;
  ControlButton:TextStyle;
  PlayButton:TextStyle;
  ControlButton0:TextStyle;
  activity:TextStyle;
  BannerImage:ImageStyle;
  InfoContainer:TextStyle;
  ButtonContainer:TextStyle;
  Duration:TextStyle;
  Title:TextStyle;
  ListContainer0:TextStyle;
  ListContainer1:TextStyle;
  ListContainer2:TextStyle;
  InfoTitle:TextStyle;
  InfoDuration:TextStyle;
  PerBox:TextStyle;
  PerText:TextStyle
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor:'#000',
    paddingTop:'5%',
  },
  titleTextStyle: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 45,
    width: "90%",
    marginTop: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5931FF",
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: "#A58FFF",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: "#fdfdfd",
    fontWeight: "700",
  },
  activity: {
    color: "#fdfdfd",
    fontWeight: "700",
    marginLeft:'2%',
    marginTop:30
  },
  ControlButton:{
    width: '20%',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#000',
    justifyContent:'center',
  },
  ControlButton0:{
    width: '85%',
    alignItems: 'center',
    height: '85%',
    backgroundColor: '#e37c01',
    justifyContent:'center',
    borderRadius:75

  },
  PlayButton: {
    height:80,
    width:'25%',
    backgroundColor:'#3f3e41',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  BannerImage:  {
    width: 306,
    height: 292,
    borderRadius: 27,
    alignSelf: 'center',
  },
  InfoContainer:{
    width: '40%',
    height: 85,
    borderWidth: 0,
    borderColor: '#fff',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  ButtonContainer:{
    width: '80%',
    height: 80,
    borderWidth: 0,
    borderColor: '#fff',
    marginTop: '8%',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Duration:{
    fontSize: 50, 
    color: '#fff',
  },
  Title:{
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#fff',
  },
  ListContainer0:{
    width: '96%',
    // height: 60,
    backgroundColor: '#3f3e41',
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection:'row',
  },
  ListContainer1:{
    width: '80%',
    height: 60,
    backgroundColor: '#e37c01',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingLeft:15,
    justifyContent:'center',
    shadowColor: "#e37c01",
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  ListContainer2:{
    width: '80%',
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 15,
    paddingLeft: '5%',
    flexDirection:'column',
    justifyContent:'center',
  },
  InfoTitle:{
    color: '#fff', 
    fontWeight: '500', 
    fontSize: 14,
  },
  InfoDuration:{
    color: '#fff', 
    fontWeight: '400', 
    fontSize: 12
  },
  PerBox:{
    justifyContent:'center', 
    alignItems:'center', 
    width:'20%'
  },
  PerText:{
    color: '#fff', 
    fontWeight: '700', 
    fontSize: 16
  }
 
});
