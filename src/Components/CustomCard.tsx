import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface CustomCardProps {
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  title: string;
}

const CustomCard = ({icon1, icon2, title}: CustomCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent1}>
        <View style={styles.wrapIcon1}>{icon1}</View>
        <View style={styles.textWrap}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
      <View style={styles.cardContent2}>
        <View style={styles.wrapIcon2}>{icon2}</View>
        <View style={styles.over}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 25,
  },
  cardContent1: {
    flex: 2.8,
    borderRadius: 6,
    borderLeftWidth: 10,
    borderLeftColor: '#354187',
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderRightWidth: 0.5,
    gap: 20,
  },
  wrapIcon1: {
    backgroundColor: '#cfd2e8',
    padding: 15,
  },
  wrapIcon2: {
    backgroundColor: '#d6edcc',
    padding: 15,
  },
  over: {backgroundColor: 'red'},
  textWrap: {justifyContent: 'center'},
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
  },
  cardContent2: {
    flex: 1.2,
    flexDirection: 'row',
    // padding: 20,
    borderRadius: 6,
    borderLeftWidth: 10,
    borderLeftColor: '#65bf3f',
    borderBottomWidth: 1,
  },
});

export default CustomCard;
