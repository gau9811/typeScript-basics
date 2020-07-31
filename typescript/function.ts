function getsum(num: number, num2: number): number {
  return num + num2
}
//console.log(getsum(1, 4))

let mysum = (num1: any, num2: any): number => {
  if (typeof num1 === "string") {
    num1 = parseInt(num1)
  }
}
//console.log(mysum("3", 5))
