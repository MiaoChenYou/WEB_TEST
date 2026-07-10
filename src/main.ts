import './style.css'

// 驗證 TypeScript 環境已成功運作
console.log('TypeScript environment is ready!')

const confirmBtn = document.querySelector<HTMLButtonElement>('button[type="button"]')
const resetBtn = document.querySelector<HTMLButtonElement>('button[type="reset"]')
const textarea = document.querySelector<HTMLTextAreaElement>('textarea')

if (confirmBtn && textarea) {
  confirmBtn.addEventListener('click', () => {
    alert(`您輸入的內容是：${textarea.value}`)
  })
}

if (resetBtn && textarea) {
  resetBtn.addEventListener('click', () => {
    textarea.value = '請輸入內容'
  })
}
console.log("hellow word")
let a = 10
let b = 20
let c = 30
if (a + b > c || a + c > b || b + c > a) { console.log("is a triangle") }
else { console.log("not a fkn triangle")}

console.log("loop start")
let sum = 0
for (let i = 1; i <= 10; i++) {
  sum = sum + i
  console.log(i)
}
console.log("loop end", sum)

let countBMI = (height: number, weight: number) => {
  return weight/(height*height)
}
console.log(countBMI(1.75,70))