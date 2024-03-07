function plusMinus(arr: number[]): void {
    const positivesNumbers = arr.filter(number=> number>0)
    const negativeNumbers = arr.filter(number=> number<0)
    const neutralNumbers = arr.filter(number=> number===0)
    const  proportionsPositive =positivesNumbers.length/arr.length
    const  proportionsNegative =negativeNumbers.length/arr.length
    const  proportionsNeutral =neutralNumbers.length/arr.length
    console.log(proportionsPositive)
    console.log(proportionsNegative)
    console.log(proportionsNeutral)
}

