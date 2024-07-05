import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function FancyCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('./../assets/images/butterfly.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Goa</Text>
          <Text style={styles.cardLabel}>Ponda</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere
            maiores repellendus illo assumenda vitae ipsam perferendis
            voluptatibus. Sunt, quia!
          </Text>
          <Text style={styles.cardFooter}></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
  },
  cardImage: {
    height: 180,
    width: '100%',
    borderRadius: 5,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 16,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  cardFooter: {
    fontSize: 12,
    color: '#aaa',
  },
});
