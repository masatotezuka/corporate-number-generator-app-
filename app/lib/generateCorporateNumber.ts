/**
 * 13桁の法人番号を生成する関数
 * 最初の1桁はチェックディジット
 * @returns {string} 13桁の法人番号
 */
export function generateCorporateNumber(): string {
  // 12桁のランダムな数字を生成
  const random12Digits = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 10)
  ).join("")

  // チェックディジットの計算
  let evenSum = 0
  let oddSum = 0

  // 各桁を逆順に処理
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(random12Digits[11 - i])

    if (i % 2 === 0) {
      // 奇数桁（ループは0から始まるため）
      oddSum += digit
    } else {
      // 偶数桁
      evenSum += digit
    }
  }

  // 偶数桁の和を2倍して加算
  const totalSum = oddSum + evenSum * 2

  // mod 9 の計算
  const mod9 = totalSum % 9
  let checkDigit = 9 - mod9

  // チェックディジットが9の場合は0に
  if (checkDigit === 9) {
    checkDigit = 0
  }

  // 最終的な法人番号を生成（チェックディジット + 12桁のランダム数字）
  return `${checkDigit}${random12Digits}`
}

// 使用例
console.log(generateCorporateNumber())
