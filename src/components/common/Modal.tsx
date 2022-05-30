import React, { PureComponent, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Modal,
  Text
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { VIWELL_COLORS } from '../../styles';

interface Props {
  modalType: string,
  responseMessage?: string,
  error?: string,
  isShow?: boolean,
  onPress?: () => void
}

const CustomModal = (props: Props) => {

  const [errorModalVisible, setErrorModalVisible] = useState(true);
  const { responseMessage, modalType, onPress, error } = props

  const showModal = () => {
    setErrorModalVisible(!errorModalVisible)
  }

  return (
    <View style={styles.container} >

      <Modal
        animationType="slide"
        transparent={true}
        visible={errorModalVisible}
        onRequestClose={() => {

        }}>
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignContent: 'center',
        }}>

          <View style={styles.centeredView}>
            {
              modalType === 'error' ?
                <View style={styles.errorImageContainr}>
                  <Image source={require("../../assets/images/error.png")} style={{ height: 17, width: "25%", resizeMode: "contain" }} />
                </View>
                : <View style={styles.successImageContainer}>
                  <AntDesign
                    name="check"
                    color={VIWELL_COLORS.white}
                    size={30}
                  />
                </View>
            }

            <View style={styles.errorTextStyle}>
              {modalType == "error" ? <Text style={styles.errorText}>Error</Text> : <Text style={styles.successText}>Success</Text>}
              <ScrollView style={{ marginBottom: 7 }}>
                <Text style={styles.tryAgainText}>{responseMessage}</Text>
              </ScrollView>
            </View>

            <View style={{ flex: 0.3, alignItems: "flex-end", margin: 10 }}>
              <AntDesign
                name="close"
                color={'#000'}
                size={25}
                onPress={showModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  centeredView: {
    flexDirection: "row",
    backgroundColor: VIWELL_COLORS.white,
    flex: 0.13,
    margin: 30,
    width: '75%',
    borderRadius: 20,
    marginTop: 30,
    alignSelf: 'center'
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  errorImageContainr: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.8,
    backgroundColor: "#E53935",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  successImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.7,
    backgroundColor: VIWELL_COLORS.ligh_green,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  errorTextStyle: {
    flex: 2,
    marginLeft: 5,
    marginTop: 20,
  },
  errorText: {
    color: "#E53935",
    fontSize: 20,
  },
  tryAgainText: {

    marginTop: 5,
    fontSize: 15
  },
  successText: {
    color: VIWELL_COLORS.ligh_green,
    fontSize: 20
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20,
    marginTop: 20
  }
});

export default CustomModal;