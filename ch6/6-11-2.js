import fs from 'fs';

function fileValidation(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }
  return {
    fileName,
    countOnlyReady: args.includes('-r'),
  };
}

function transFileForm(fileName) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  return orders;
}

function printOrderLength(orders, countOnlyReady) {
  const filteredOrder = countOnlyReady ? orders.filter((order) => order.status === 'ready') : orders;
  console.log(filteredOrder.length);
}

const { fileName, countOnlyReady } = fileValidation(process.argv);
const orders = transFileForm(fileName);
printOrderLength(orders, countOnlyReady);
