const {StyleSheet} = require('react-native');
const {Colors} = require('../../themes/colors');

export const StopRecordStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 25,
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 80,
  },
  label: {
    fontSize: 17,
    color: Colors.japaneseLaurel,
    fontWeight: 'bold',
    marginTop: 30,
  },
  wrapperCol: {
    flexDirection: 'column',
  },
  farmWidth: {
    width: '60%',
  },
  fieldWidth: {
    width: '35%',
  },
  wrapperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  wrapperRowNote: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginTop: 30,
  },
  noteLabel: {
    fontSize: 18,
    color: Colors.quickSilver,
    fontWeight: 'bold',
    marginLeft: 5
  },
});
