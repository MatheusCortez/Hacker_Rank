function miniMaxSum(arr: number[]): void {
    const arraySorted =arr.sort()
    const minArray = arraySorted.slice(0,4)
    const minValue = minArray.reduce((acc,currentValue)=>{return acc+currentValue},0)
    const maxArray = arraySorted.reverse().slice(0,4)
    const maxValue = maxArray.reduce((acc,currentValue)=>{return acc+currentValue},0)

      console.log(minValue,maxValue)

  }