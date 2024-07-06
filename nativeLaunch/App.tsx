import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FancyCards />
        <ElevatedCards />
        <FlatCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
