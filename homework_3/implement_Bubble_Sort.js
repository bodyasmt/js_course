function bubbleSort(arr) {
  for(let n = 0; n < arr.length; n++) {
    for (let i = 0; i < arr.length - 1 - n; i++) {
      if (arr[i] > arr[i + 1]) {
        const bubble = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = bubble
      }
    }
  }
}