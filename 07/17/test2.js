const main = (strA, strB) => {
  for (let i = 0; i < strB.length; i++) {
    if (strB.substr(i, strA.length) === strA) {
      return strB.indexOf(strA)
    }
  }

}

const result = main('abc', 'a0abc')
console.log(result)