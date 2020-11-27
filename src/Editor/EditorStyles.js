import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "green",
    borderWidth: 1,
    width: 300
  },
  textContainer: {
    alignSelf: "stretch",
    position: "relative",
    minHeight: 40,
    maxHeight: 140
  },
  input: {
    flex: 1
    // fontSize: 14,
    // color: "#000",
    // fontWeight: "400",
    // paddingHorizontal: 20,
    // minHeight: 40,
    // position: "absolute",
    // top: 0,
    // color: "transparent",
    // alignSelf: "stretch",
    // width: "100%"
  },
  formattedTextWrapper: {
    minHeight: 40,
    position: "absolute",
    top: 0,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "100%"
  },
  formattedText: {
    fontSize: 14,
    fontWeight: "400"
  },
  mention: {
    fontSize: 14,
    fontWeight: "400",
    backgroundColor: "rgba(36, 77, 201, 0.05)",
    color: "#244dc9"
  },
  placeholderText: {
    color: "rgba(0, 0, 0, 0.1)",
    fontSize: 14
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 1
  }
});
