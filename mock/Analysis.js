function chat(method) {
  let res = null;
  switch (method) {
    case 'GET':
      res = ['cyc', 'happysheep', 'dayday'];
      break;
    default:
      break;
  }
  return res;
}

module.exports = chat;
