import { StyleSheet, View } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox] } />
      <View style={[styles.box, styles.orangeBox] } />
      <View style={[styles.box, styles.greenBox] } />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    // justifyContent: 'center', // HomeWork #2
    // justifyContent: 'center', // HomeWork #3
    // justifyContent: 'space-between', // HomeWork #4
    // flexDirection: 'row', // HomeWork #5
    // justifyContent: 'space-between', // HomeWork #5
    // justifyContent: 'center', // HomeWork #7
    // alignItems: 'center', // HomeWork #7
    // justifyContent: 'center', // HomeWork #8
    // alignItems: 'center', // HomeWork #8
    // justifyContent: 'center', // HomeWork #9
    // alignItems: 'center', // HomeWork #9
    // flexDirection: 'row', // HomeWork #10
    // justifyContent: 'center', // HomeWork #10
    // alignItems: 'center', // HomeWork #10
  },
  box: {
    width: 100,
    height: 100,
    // height: '100%', // HomeWork #5
    // width: '100%', // HomeWork #6
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    // alignSelf: 'flex-end', // HomeWork #3
    // alignSelf: 'flex-end', // HomeWork #4
    // flex: 1, // HomeWork #6
    // top: 100, // HomeWork #9
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
    // flex: 1, // HomeWork #1
    // alignSelf: 'center', // HomeWork #4
    // flex: 1, // HomeWork #6
    // left: 100, // HomeWork #8
    // left: 100, // HomeWork #9
    // top: 50, // HomeWork #10
  },
  greenBox: {
    backgroundColor: '#28c4d9',
    // width: '100%', // HomeWork #2
    // alignSelf: 'center', // HomeWork #3
    // flex: 2, // HomeWork #6
  },
});
