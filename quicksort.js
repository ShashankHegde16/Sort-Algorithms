const pivotindex = (arr, start = 0, end = arr.length - 1) => {
    const swap = (item, idx1, idx2) => {
        [item[idx1], item[idx2]] = [item[idx2], item[idx1]]
    }
    //assuming pivot is always the starting element
    let pivot = arr[start];
    let swapindex = 0;

    for (let index = start + 1; index < arr.length; index++) {
        if (arr[index] > pivot) {
            swapindex++;
            swap(arr, swapindex, index);
        }
    }
    // swap the pivot from the swappoint
    swap(arr, start, swapindex);
    return swapindex;
}

/**
 * call pivot helper on array
 * when the helper returns to you the updated pivot index, recursively call the pivot helper on the left of index and right of
 * index
 */

const quicksort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const index = pivotindex(arr, left, right);
        quicksort(arr, left, index - 1);
        quicksort(arr, right, index + 1);
    }
    return arr;
}
