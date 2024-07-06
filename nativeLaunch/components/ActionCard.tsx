import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWeb(webLink: string) {
    Linking.openURL(webLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Hi there, nothing much here as of now!🙃
          </Text>
        </View>
        <Image
          source={require('./../assets/images/flower.jpeg')}
          style={styles.blogImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quibusdam vel optio autem quos aliquid expedita odio a rerum sit
            vero facilis architecto esse ipsa, quae nihil blanditiis obcaecati
            laborum?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWeb('https://heroic-todos.netlify.app')}>
            <Text style={styles.footerLink}>Open Heroic-Todo's</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  blogImage: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    marginBottom: 16,
  },
  elevatedCard: {
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  bodyContainer: {
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerLink: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    color: 'red',
    fontWeight: 'bold',
  },
});
