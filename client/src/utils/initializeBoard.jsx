const initializeBoard = (prefill = []) => {
  return Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 9 }, (_, col) => {
      return prefill[row]?.[col] ?? ""
    })
  )
}

export default initializeBoard
