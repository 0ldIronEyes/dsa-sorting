function merge(arr1, arr2) {
    let results = [];
    let a = 0;
    let b = 0;

    while ( a < arr1.length && b < arr2.length)
    {
        if(arr2[b] > arr1[a])
        {
            results.push(arr1[a]);
            a++;
        }
        else
        {
            results.push(arr2[b]);
            b++;
        }
    }

    while(a < arr1.length)
    {
        results.push(arr1[a]);
        a++;
    }
    
    while(b < arr2.length)
    {
        results.push(arr2[b]);
        b++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort};