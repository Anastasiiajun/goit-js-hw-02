function getElementWidth(content, padding, border) {
  const con = Number.parseFloat(content);
  const padd = Number.parseFloat(padding);
  const bor = Number.parseFloat(border);
  const totalwidth = con + padd * 2 + bor * 2;
  return `${totalwidth}px`;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
