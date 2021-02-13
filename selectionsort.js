function sort(arr) {
    const swap = (item, idx1, idx2) => {
        [item[idx1], item[idx2]] = [item[idx2], item[idx1]]
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest])
                lowest = j;
        }
        if (lowest != i) {
            swap(arr, i, lowest);
        }
        return arr;
    }
}