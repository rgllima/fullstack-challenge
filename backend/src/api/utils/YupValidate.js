export default async function (validation, data) {
  if (validation && Object.keys(validation).length > 0) {
    await validation.strict().validate(data)
  }
}
