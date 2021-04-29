export default function navigationStyles(theme) {
  return {
    box: {
      height: "40px",
      backgroundColor: "#121212",
      boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)",
      borderRadius: "10px",
      borderColor: "solid 1px black",
      margin: "5px 0",
      padding: "5px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      '&:hover': {
        backgroundColor: "#1F1B24"
      }
    },
    boxActive: {
      backgroundColor: "#1F1B24"
    }
  }
}
