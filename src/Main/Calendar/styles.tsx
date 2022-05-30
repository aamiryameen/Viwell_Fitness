import {ViewStyle, TextStyle, StyleSheet, ImageStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  HeaderContainer: ViewStyle;
  HeaderText: TextStyle;
  DateText: TextStyle;
  FutureText: TextStyle;
  UserInfo: ViewStyle;
  InfoTitle: ViewStyle;
  InfoTitle_Text: ViewStyle;
  InfoTitle_Text0: ViewStyle;
  InfoUser: ViewStyle;
  address: ViewStyle;
  InfoTitle0: ViewStyle;
  pic: ViewStyle;
  name: ViewStyle;
  name_Text: TextStyle;
  designation: TextStyle;
  menu: ViewStyle;
  address_Text: TextStyle;
  rowContainer: ViewStyle;
  contentContanier: ViewStyle;
  body: ViewStyle;
  emptyContainer: ViewStyle;
  emptyImage:ImageStyle;
  emptyText:TextStyle;
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
  HeaderText: {
    fontSize: 32,
    color: '#000',
    fontFamily: 'Montserrat',
    fontWeight: '700',
  },
  DateText: {
    fontSize: 17,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#fff',
    marginTop: 30,
    marginLeft: '3.5%',
  },
  FutureText: {
    fontSize: 14,
    fontFamily: 'Mulish',
    fontWeight: '400',
    color: '#8A9CB2',
    marginTop: 12,
    marginLeft: '3.5%',
  },
  UserInfo: {
    height: 192,
    width: '93%',
    backgroundColor: '#fff',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 10,
  },
  InfoTitle: {
    width: '100%',
    height: 34,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#DFE9F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InfoTitle0: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  InfoUser: {
    width: '90%',
    height: 77,
    borderBottomWidth: 1,
    borderColor: '#DFE9F5',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  address: {
    width: '90%',
    height: 79,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  InfoTitle_Text: {
    fontSize: 14,
    fontFamily: 'Mulish',
    color: '#F8AE53',
    fontWeight: '700',
  },
  InfoTitle_Text0: {
    fontSize: 14,
    fontFamily: 'Mulish',
    color: '#8A9CB2',
    fontWeight: '400',
  },
  pic: {
    width: '20%',
    height: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    width: '60%',
    height: 77,
    justifyContent: 'center',
  },
  name_Text: {
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Montserrat',
    color: '#363F4D',
  },
  designation: {
    color: '#8A9CB2',
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '400',
  },
  menu: {
    width: '20%',
    height: 77,
    paddingLeft: '10%',
    paddingTop: 10,
  },
  address_Text: {
    color: '#8A9CB2',
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '400',
  },
  rowContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContanier: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  body: {
    fontWeight: '700',
    fontSize: 22,
    fontFamily: 'SF Pro Display',
    color: '#fff',
  },
  emptyContainer: {
    backgroundColor: '#000', 
    height: 300
  },
  emptyImage:{
    height: 163,
    width: 163,
    alignSelf: 'center',
    marginTop: 30,
  },
  emptyText:{
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
  },
});
