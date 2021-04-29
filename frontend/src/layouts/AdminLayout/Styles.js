export default function adminStyles(theme) {
  return {
    root: {
      backgroundColor: "#121212",
      minHeight: "600px",
      height: "100vh",
    },
    container: {
      height: "100%"
    },
    appBar: {
      backgroundColor: "#121212",
      color: "#BB86FC",
      boxShadow: "4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    drawer: {

    },
    sideBar: {
      height: "100%",
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
    content: {
      height: "100%",
      color: "#BB86FC"
    }
  }
}
