import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({ header, item }: any) => { 
    const hardcoded = [
      // [<Text style={styles.text}>Historia_bad.png</Text>, <Text style={styles.text}>image/png</Text>, <Button>Otvoriť</Button>, <Button>Zmazať</Button>, <Button>Zmeniť</Button>, <Text style={styles.text}>CORA GEO</Text>], [<Text style={styles.text}>Navrh__historia.jpg</Text>, <Text style={styles.text}>image/JPG</Text>, <Button>Otvoriť</Button>, <Button>Zmazať</Button>, <Button>Zmeniť</Button>, <Text style={styles.text}>CORA GEO</Text>]
    ] as any;


    return (
      <View style={{ marginVertical: 16 }}>
          {header}
        {hardcoded.map((item: any) => {
          return (
            <View style={styles.row} key={hardcoded.indexOf(item) + 1}>
              {item.map((i: any) => (<View key={item.indexOf(i)}>{i}</View>))}
            </View>
          )
        })}
        <View key={hardcoded.length + 1}><Text style={[styles.text, { textAlign: 'left', marginHorizontal: 8 }]}>1</Text></View>
      </View>
    )
  };


const styles = StyleSheet.create({
  divider: {
    marginVertical: 16
  },
  boldText: {
    marginHorizontal: 8,
    marginTop: 24,
    fontWeight: '700',
    fontSize: 18
  },
  text: {
    color: 'white',
    fontSize: 10
  },
  row: {
    marginHorizontal: 8,
    display: 'flex',
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollrow: {
    width: '100%',
    marginTop: 2,
    flexDirection: 'row',
  }
});
