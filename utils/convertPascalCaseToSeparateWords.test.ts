import convertPascalCaseToSeparateWords from './convertPascalCaseToSeparateWords'

describe('convertPascalCaseToSeparateWords', () => {
  it('should convert pascal case to separate words', () => {
    expect(convertPascalCaseToSeparateWords('PascalCase')).toBe('Pascal Case')
  })

  it('should leave the first letter as is', () => {
    expect(convertPascalCaseToSeparateWords('Pascal')).toBe('Pascal')
  })

  it('should remove any trailing or leading spaces', () => {
    expect(convertPascalCaseToSeparateWords(' PascalCase ')).toBe('Pascal Case')
  })
})
