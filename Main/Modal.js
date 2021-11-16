import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const ShowModal = ({route}) => {
    const {TypeData} = route.params
    const [modalVisible, setModalVisible] = useState(false);
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
          <View style={styles.container}>
        <View style={styles.listItem}>
          <Text style={styles.textHeader}>ID</Text>
          <Text style={styles.textBottom}>{TypeData.ID}</Text>

          <Text style={styles.textHeader}>Property type</Text>
          <Text style={styles.textBottom}>{TypeData.PropertyType}</Text>

          <Text style={styles.textHeader}>Bedrooms</Text>
          <Text style={styles.textBottom}>{TypeData.Bedrooms}</Text>

          <Text style={styles.textHeader}>Datetime</Text>
          <Text style={styles.textBottom}>{TypeData.DateTime}</Text>

          <Text style={styles.textHeader}>Monthly rent price</Text>
          <Text style={styles.textBottom}>{TypeData.MonthlyPrice}</Text>

          <Text style={styles.textHeader}>Furniture</Text>
          <Text style={styles.textBottom}>{TypeData.FurnitureType}</Text>

          <Text style={styles.textHeader}>Notes</Text>
          <Text style={styles.textBottom}>{TypeData.Notes}</Text>

          <Text style={styles.textHeader}>Name of the reporter</Text>
          <Text style={styles.textBottom}>{TypeData.NameReporter}</Text>
        </View>
      </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
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
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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

export default ShowModal;