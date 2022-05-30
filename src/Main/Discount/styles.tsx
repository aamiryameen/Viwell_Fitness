import {ViewStyle, TextStyle, StyleSheet, ImageStyle, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {VIWELL_COLORS, FontWeights, FontSizes} from '../../styles';

interface Style {
  container: ViewStyle;
  Box0: ViewStyle;
  Box0_Text: TextStyle;
  Box1: ViewStyle;
  Box1_Text: TextStyle;
  List_Text: TextStyle;
  List_Text0: TextStyle;
  Box1_0: ViewStyle;
  Box1_Text0: TextStyle;
  Box1_Text1: TextStyle;
  Box1_Text2: TextStyle;
  ListBox: ViewStyle;
  Box_Image: ImageStyle;
  contentContanier:ViewStyle;
  container0:ViewStyle;
  container1:ViewStyle;
  searchBox:ViewStyle;

}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop:'5%'
  },
  Box0: {
    width: '100%',
    height: 50,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginLeft:'10%'
  },
  Box0_Text: {
    fontSize: 24,
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
    color: '#fff',
  },
  Box1: {
    height: 22,
    width: 40,
    backgroundColor: '#FE7762',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 16,
    marginTop: 16,
  },
  Box1_Text: {
    fontSize: 11,
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    color: '#fff',
  },
  List_Text: {
    fontSize: 16,
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    marginLeft: 10,
  },
  List_Text0: {
    fontSize: 11,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#828282',
    textAlign: 'center',
    marginLeft: 10,
  },
  Box1_Text0: {
    fontSize: 11,
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    color: '#000',
  },
  Box1_0: {
    height: 22,
    width: 82,
    backgroundColor: '#F6CE42',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 16,
    marginTop: 16,
  },
  Box1_Text1: {
    fontSize: 18,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#fff',
    fontStyle: 'italic',
    marginTop: 86,
    marginLeft: 16,
  },
  Box1_Text2: {
    fontSize: 11,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#F2F2F2',
    fontStyle: 'italic',
    marginTop: 6,
    marginLeft: 16,
  },
  ListBox: {
    backgroundColor: '#252525',
    borderRadius: 16,
    marginRight: 5,
    flexDirection: 'column',
    alignItems: 'center',
    height: 160,
    width: 160,
    justifyContent: 'center',
  },
  Box_Image: {
    height: 185,
    width:  windowWidth-40,
    marginTop: 15,
    alignSelf: 'center',
  },
  contentContanier: {
    paddingHorizontal: '5%',
    // paddingTop: '5%',
  },
  container0: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: VIWELL_COLORS.bgColor,
  },
  container1: {
    flex: 1,
    backgroundColor: VIWELL_COLORS.bgColor,
  },
  searchBox:{
    position: 'absolute',
    bottom: 0,
    width: '99%',
    alignSelf: 'center',
  }
});
