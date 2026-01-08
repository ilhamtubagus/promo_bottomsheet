import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 16,
    right: 16,
    backgroundColor: '#A775C8',
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 9999,
    elevation: 10,
  },
  icon: {
    width: 27,
    height: 27,
    marginRight: 16
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Figtree-Bold',
  },
});

export default styles;