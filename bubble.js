

/** Sort a given array of numbers using the bubble sort algorithm. */
function bubbleSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        const curr = array[i];
        const next = array[i + 1];

        // Switch current value and the next
        if (curr > next) {
            array[i + 1] = curr;
            array[i] = next;
        }


    }

    return array;
}


module.exports = bubbleSort;
