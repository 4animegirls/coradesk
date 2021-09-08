  
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, Divider} from '@ui-kitten/components';

export default ({text, title}: any) => {
    return (
      <>
        <Text style={styles.boldText}>{title}:</Text>
        <ScrollView style={{height: 96,flexGrow:0}}>
          <Text style={styles.text}>
            {text === null ? "---" : text}
          </Text>
        </ScrollView>
        <Divider style={styles.divider} />
      </>
    );
  };


const styles = StyleSheet.create({
  divider: {
    marginTop: 8
  },
  boldText: {
    marginHorizontal: 8,
    marginTop: 10,
    fontWeight: '700',
    fontSize: 18
  },
  text: {
    fontSize: 18,
    marginHorizontal: 8
  },
  row: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center'
  }
});