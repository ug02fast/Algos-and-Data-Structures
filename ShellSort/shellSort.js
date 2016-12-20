class ShellSort {
  constructor(arr) {
    this.array = arr
  }

  sort() {
    let length = this.array.length
    let h = 1;

    // start at the highest h and move down
    // 1, 4, 13, 40, 121, 364, ...
    while(h < length / 3) h = 3 * h + 1

    // while h is >= 1 because h = 0 means swapping itself
    while(h >= 1) {

      // we start at h
      for (let i = h; i < length; i++) {

        // starting at i if j >= h and the item h disance away
        // is less than this number, we swap
        for (let j = i; j >= h && this.isLess(j, j - h); j -= h) {
          this.exchange(j, j - h)
        }
      }

      // decrements by 3 so if we start at 364 we get
      // 121 after Math.floor
      h = Math.floor(h / 3)
    }

    return this.array
  }

  isLess(idx1, idx2) {
    return this.array[idx1] < this.array[idx2]
  }

  exchange(idx1, idx2) {
    let temp = this.array[idx1]
    this.array[idx1] = this.array[idx2]
    this.array[idx2] = temp;
  }
}

let arr = [ 4, 5, 7, 6, 3, 2, 1]
let sort = new ShellSort(arr)
console.log(sort.sort())

module.exports = ShellSort;
