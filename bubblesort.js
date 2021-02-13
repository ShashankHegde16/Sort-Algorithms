function sort(arr) {
    const swap = (item, idx1, idx2) => {
        [item[idx1], item[idx2]] = [item[idx2], item[idx1]]
    }

    for (let i = arr.length; i >= 0; i--) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1])
                swap(arr, j, j + 1);
        }
    }
    return arr;
}