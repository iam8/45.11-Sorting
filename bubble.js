

/** Sort a given array of numbers using the bubble sort algorithm. */
function bubbleSort(array) {
    const len = array.length;

    for (let i = 1; i < len; i++) {
        let hasSwitched = false;

        for (let j = 0; j < len - i; j++) {
            const curr = array[j];
            const next = array[j + 1];

            // Switch current value and the next
            if (curr > next) {
                array[j + 1] = curr;
                array[j] = next;
                hasSwitched = true;
            }
        }

        // Optimization: array is sorted if no switches occurred in inner loop
        if (!hasSwitched) break;
    }

    return array;
}


module.exports = bubbleSort;
