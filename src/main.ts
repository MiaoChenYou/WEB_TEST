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