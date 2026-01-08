import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    boxShadow: '#00000011',
    borderColor: '#BD98D6FF',
    borderRadius: 13,
    padding: 12,
    marginBottom: 10,
    lineHeight: 23
  },
  collapsedCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardExpanded: {
    paddingBottom: 16,
  },
  icon: {
    width: 42,
    height: 40,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    backgroundColor: '#F4E9FF',
    marginRight: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconImage: {
    width: 34,
    height: 24,
  },
  title: {
    fontFamily: 'Figtree-Bold',
    fontSize: 14,
    marginBottom: 3,
    fontWeight: "bold",
    color: '#25172E'
  },
  subtitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 10,
    color: '#89828EFF',
    fontFamily: 'Figtree-Medium',
  },
  more: {
    color: '#A775C8FF',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Figtree-Bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#E6DDF4',
    marginVertical: 12,
  },
  sectionTitle: {
    fontFamily: 'Figtree-Blaack',
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 15,
    color: '#25172E',
  },
  termText: {
    flex: 1,
    fontSize: 12,
    color: '#25172E',
    fontFamily: 'Figtree-Medium',
    lineHeight: 18,
  },
  voucherBox: {
    marginTop: 14,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voucherLabel: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Figtree-Medium',
  },
  voucherCode: {
    fontSize: 16,
    fontFamily: 'Figtree-Black',
    fontWeight: "bold",
    color: '#000',
  },
  copyBtn: {
    backgroundColor: '#A775C8FF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  copyText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Figtree-Black',
    fontWeight: "bold"
  },
  termsContainer: {
    marginLeft: 7,
    marginBottom: 10
  },
  markdown: {
    body: {
      fontSize: 12,
      color: '#25172E',
      fontFamily: 'Figtree-Medium',
      lineHeight: 18,
    },
    bullet_list: {
      marginVertical: 4,
    },
    list_item: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    bullet_list_icon: {
      marginRight: 6,
      fontSize: 14,
    },
    strong: {
      fontFamily: 'Figtree-Bold',
    },
  }
});

export default styles;