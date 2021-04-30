export default function formFieldStyles(theme) {
  return {
    textField: {
      "& .MuiFormLabel-root, .MuiInputBase-input": {
        color: "#BB86FC",
      },
      "& .MuiFilledInput-underline:before": {
        borderColor: "#BB86FC"
      }
    },
  }
}
