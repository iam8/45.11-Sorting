

/** Merge 2 sorted arrays into a single sorted array and return the result. */
function merge(arr1, arr2) {
    let idx1 = 0;
    let idx2 = 0;

    const fullLen = arr1.length + arr2.length;
    const result = [];

    while (result.length < fullLen) {
        const val1 = arr1[idx1];
        const val2 = arr2[idx2];

        if (val1 === undefined) {
            // Append remaining part of arr2 to result
            result.push(...arr2.slice(idx2));

        } else if (val2 === undefined) {
            // Append remaining part of arr1 to result
            result.push(...arr1.slice(idx1));

        } else {
            // Compare current values in each array and increment appropriate pointer
            if (val1 <= val2) {
                result.push(val1);
                idx1++;
            } else {
                result.push(val2);
                idx2++;
            }
        }
    }

    return result;
}


/** Sort and return the given array of numbers using the merge sort algorithm. */
function mergeSort(array) {

}


module.exports = { merge, mergeSort};
