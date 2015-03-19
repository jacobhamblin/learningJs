function fibRec (n) {
  if (n < 1) {
    return "must be greater than 0"
  } else if (n == 1) {
    return 0
  } else if (n == 2) {
    return 1
  } else {
    return (fibRec(n-1) + fibRec(n-2))
  }
}


function fibRecArr (n) {
  if (n < 1) {
    return []
  } else if (n == 1) {
    return [0]
  } else if (n == 2) {
    return [0, 1]
  } else {
    var lastElement = fibRecArr(n-1)[fibRecArr(n-1).length-1]
    var secondToLastElement = fibRecArr(n-1)[fibRecArr(n-1).length-2]
    return fibRecArr(n-1).concat(lastElement + secondToLastElement)
  }
}
