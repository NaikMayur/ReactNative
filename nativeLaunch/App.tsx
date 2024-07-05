import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FancyCards />
        <ElevatedCards />
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
