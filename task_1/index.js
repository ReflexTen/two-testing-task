import { encoded, translations } from './data.js'

console.log("Let's rock")

console.log(encoded, translations)

function decoded(arr) {
  const decodeArr = []
  const unicId = []

  arr.forEach(itemObj => {
    const newObj = {}

    for (const key in itemObj) {
      if (
        key !== 'groupId' &&
        key !== 'service' &&
        key !== 'formatSize' &&
        key !== 'ca'
      ) {
        const secretKey = itemObj[key]
        let decodeVal

        for (const decodeKey in translations) {
          if (decodeKey === secretKey) {
            decodeVal = translations[decodeKey]
          }
        }

        if (!decodeVal) {
          newObj[key] = itemObj[key]

          if (itemObj[key] !== null && itemObj[key] !== '0') {
            unicId.push(itemObj[key])
          }
        } else {
          newObj[key] = decodeVal
        }
      } else {
        newObj[key] = itemObj[key]
      }
    }

    decodeArr.push(newObj)
  })

  console.log(decodeArr)
  console.log(unicId)
  return { decodeArr, unicId }
}

decoded(encoded)
