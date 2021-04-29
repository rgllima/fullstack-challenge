export default function formSelectStyles(theme) {
  return {
    formControl: {
      "& .MuiFormLabel-root, .MuiInputBase-input": {
        color: "#BB86FC",
      },
      "& .MuiFilledInput-underline:after, .MuiFilledInput-underline:before": {
        borderColor: "#BB86FC",
        borderWidth: 1
      }
    }
  }
}
