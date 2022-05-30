import {ViewStyle, TextStyle, StyleSheet, ImageStyle, Dimensions} from 'react-native';
import {VIWELL_COLORS, FontWeights, FontSizes} from '../../styles';
const windowWidth = Dimensions.get('window').width;

interface Style {
  container: ViewStyle;
  container1: ViewStyle;
  topContainer: ViewStyle;
  rowContainer: ViewStyle;
  contentContanier: ViewStyle;
  heading: TextStyle;
  body: TextStyle;
  item: TextStyle;
  searchBox: TextStyle;
  comContainer: ViewStyle;
  comContainer00: ViewStyle;
  comContainer0: ViewStyle;
  comContainer0_Text: TextStyle;
  comContainer1_Text: TextStyle;
  comContainer1: ViewStyle;
  comContainer1_0: ViewStyle;
  comContainer1_0_0: ViewStyle;
  comContainer1_1: ViewStyle;
  comContainer1_1_0: ViewStyle;
  person: TextStyle;
  comContainer1_1_1: ViewStyle;
  message: TextStyle;
  userList: ViewStyle;
  userName: TextStyle;
  hrContainer: TextStyle;
  hrName:TextStyle;
  hrDes:TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: VIWELL_COLORS.bgColor,
  },
  container1: {
    flex: 1,
    backgroundColor: VIWELL_COLORS.bgColor,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  heading: {
    marginLeft: '5%',
    fontWeight: '700',
    color: '#fff',
    fontSize: 25,
    marginTop: '5%',
  },
  body: {
    ...FontWeights.Bold,
    ...FontSizes.Label,
  },
  item: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    marginTop: 10,
  },
  searchBox: {
    position: 'absolute',
    bottom: 0,
    width: '99%',
    alignSelf: 'center',
  },
  comContainer: {
    width: windowWidth-40,
    height: 189,
    borderRadius: 24,
    alignSelf: 'center',
    marginTop: 8,
    alignItems: 'center',
    backgroundColor:'#645A47'
  },
  comContainer00: {
    width: windowWidth-40,
    height: 189,
    borderRadius: 24,
    alignSelf: 'center',
    marginTop: 8,
    alignItems: 'center',
    backgroundColor:'#35484D'
  },
  comContainer0: {
    width: '90%',
    height: 79,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#fff',
    justifyContent: 'center',
  },
  comContainer0_Text: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#B7B7BC',
  },
  comContainer1_Text: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#ffff',
    marginTop: 2,
  },
  comContainer1: {
    width: '90%',
    height: 109,
    flexDirection: 'row',
  },
  comContainer1_0: {
    width: '45%',
    height: 109,
    flexDirection: 'column',
  },
  comContainer1_0_0: {
    flexDirection: 'row',
    marginTop: 12,
    paddingLeft:10
  },
  comContainer1_1: {
    flexDirection: 'row',
    marginTop: 12,
  },
  comContainer1_1_0: {
    height: 32,
    width: 54,
    backgroundColor: '#222222',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  person: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#ffff',
    marginTop:-2
  },
  comContainer1_1_1: {
    height: 32,
    width: 54,
    backgroundColor: '#222222',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginLeft: 6,
    
  },
  message: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#ffff',
    marginTop:-2
  },
  userList: {
    width: '55%',
    height: 109,
    
  },
  userName: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#ffff',
    marginTop: 9,
  },
  hrContainer:{
    height: 160,
    width: 160,
    backgroundColor: '#252525',
    borderRadius: 16,
    alignItems: 'center',
    paddingTop: 16,
  },
  hrName:{
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    color: '#ffff',
    marginTop: 14,
  },
  hrDes:{
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SF Pro Display',
    color: '#828282',
  },
  
});
