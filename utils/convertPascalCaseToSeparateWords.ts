// convert pascal case word to separate words. Leave the first letter as is
export default function convertPascalCaseToSeparateWords(string: string) {
  return string.replace(/([A-Z])/g, ' $1').trim()
}
