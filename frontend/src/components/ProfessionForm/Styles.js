export default function professionFormStyles(theme) {
  return {
    container: {
      padding: "10px 20px",
      borderRadius: "10px",
      border: "solid 1px #696966",
      backgroundColor: "#121212",
      color: "#BB86FC",
      boxShadow: "4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)",
      width: 280,
      [theme.breakpoints.up("sm")]: {
        width: 420,
      },
    },
    title: {
      marginBottom: 50,
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
    addButton: {
      marginLeft: "auto",
      marginTop: 50,
      width: 100,
      display: "block",
      backgroundColor: "#BB86FC",
      fontWeight: "bold",
      "&:disabled": {
        backgroundColor: "#BB86FC9E",
        color: "#121212"
      }
    }
  }
}
