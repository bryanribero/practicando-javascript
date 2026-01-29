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

/* printListBucle(list) */

function printList(list) {
  console.log(list.value)

  if (list) {
    printList(list.next)
  }
}

/* printList(list) */

function prevPrintList(list) {
  if (list.next) {
    prevPrintList(list.next)
  }

  console.log(list.value)
}

/* prevPrintList(list) */

function prevPrintListBucle(list) {
  const array = []
  let tmp = list

  while (tmp) {
    array.push(tmp.value)

    tmp = tmp.next
  }

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
  }
}

prevPrintListBucle(list)
