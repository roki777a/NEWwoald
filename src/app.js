const greet = (name, age) => {
  // 引数チェック
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('名前は空でない文字列である必要があります');
  }
  
  if (typeof age !== 'number' || age < 0 || age > 150) {
    throw new Error('年齢は0から150の間の数値である必要があります');
  }
  
  console.log(`Hello ${name}! You are ${age} years old.`);
};

// 使用例
try {
  greet('Alice', 25);
  greet('', 30); // エラーが発生
} catch (error) {
  console.error('エラー:', error.message);
}