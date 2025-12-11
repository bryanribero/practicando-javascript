function findUnsafeGifts(warehouse) {
  let gift = 0
  let camera = {
    row: [],
    col: []
  }

  warehouse.forEach((row, index) => {
    let lastIndexAsterisc = row.indexOf('*')

    if (row.includes('#')) {
      camera.row.push(index)
      camera.col.push(row.indexOf('#'))
    }

    while (lastIndexAsterisc !== -1) {
      gift++

      lastIndexAsterisc = row.indexOf('*', lastIndexAsterisc + 1)
    }
  })

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  for (let i = 0; i < camera.row.length; i++) {
    for (const [dRow, dCol] of directions) {
      const row = camera.row[i] + dRow
      const col = camera.col[i] + dCol

      if (warehouse?.[row]?.[col] === '*') {
        gift--
      }
    }
  }

  return gift
}

console.log(findUnsafeGifts(['.*.', '*#*', '.*.']))
