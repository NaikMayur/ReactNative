import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {uid: 1, name: 'Mayur', role: 'FullStack'},
    {uid: 2, name: 'Samasth', role: 'Backend'},
    {uid: 3, name: 'Jitu', role: 'Frontend'},
    {uid: 4, name: 'Nilesh', role: 'Tester'},
  ];
  return (
    <View>
      <Text style={styles.headerText}>Contacts List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, role}) => (
          <View key={uid} style={styles.contact}>
            <Text style={styles.userName}>{`Name: ${name}`}</Text>
            <Text style={styles.userRole}>{`Role: ${role}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {fontSize: 24, fontWeight: 'bold'},
  container: {flex: 1},
  contact: {
    borderRadius: 6,
    backgroundColor: '#f5f5f5f5',
    margin: 6,
    padding: 4,
  },
  userName: {color: '#000000', fontWeight: '600'},
  userRole: {color: '#000000'},
});
