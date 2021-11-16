import React, {useState} from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View, Vibration } from 'react-native'
import {Audio} from 'expo-av'
import RzButton from '../Components/button'


const Notification = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const triggerModal = () => {
        setModalVisible(!modalVisible)
    }

    const Ring = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require('./mp3.wav'));
            await sound.playAsync();
    };

    const Vibrate = () => {
        Vibration.vibrate(1000);
      };

      return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Notification</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={Vibrate}>
                  <Text style={styles.textStyle}>Vibrate</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={Ring}>
                  <Text style={styles.textStyle}>Ring</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={triggerModal}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Notification</Text>
          </Pressable>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
        marginBottom:10,
        marginTop: 10
      },
      buttonClose: {
        backgroundColor: '#2196F3',
        marginBottom:10,
        marginTop: 10
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    });

    export default Notification;