import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    height: 225,
    paddingLeft: 29,
    paddingRight: 29,
    gap: 20,
    position: "relative",
  },
  wrapper: {},
  content: {
    zIndex:-1,
    paddingTop:105,
    paddingLeft: 29,
    paddingRight: 29,
  },
  headerInfor: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontSize: 12,
    fontWeight: 400,
    color: "white",
  },
  nameLocation: {
    fontSize: 14,
    fontWeight: 600,
    color: "white",
  },
  searchBar: {
    height: 52,
    flexDirection: "row",
    paddingLeft: 21,
    paddingRight: 5,
    alignItems: "center",
    gap: 15,
    backgroundColor: "#313131",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  products:{

    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:28,
    justifyContent:'space-between'

  }
});
