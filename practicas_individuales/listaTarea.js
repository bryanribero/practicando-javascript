let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printListBucle(list) {
  let tmp = list

  while (tmp) {
    console.log(tmp.value)
    tmp = tmp.next
  }
}

printListBucle(list)
