function digitCount(num)
{
    if (num=== 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}

function getDigit(num, i)
{
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function radixSort(nums) {
    let maxDigitCount;
    for (let i = 0; i < nums.length; i++) {
        maxDigitCount = Math.max(maxDigitCount, digitCount(nums[i]));
      }
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let digit = getDigit(num, k);
        digitBuckets[digit].push(num);
      }
      nums = [].concat(...digitBuckets);
    }
    return nums;
  }
module.exports = {radixSort, getDigit, digitCount} ;