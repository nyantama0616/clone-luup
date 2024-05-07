const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;

let periods: string[][] = [];
let a: string[] = [];
for (let m = month; m >= 1; m--) {
  a.push(`${year}年 ${m}月`);
}
periods.push(a);

a = [];
for (let y = year - 1; y >= 2020; y--) {
  for (let m = 12; m >= 1; m--) {
    a.push(`${y}年 ${m}月`);
    }
    periods.push(a);
    a = [];  
}

for (let m = 12; m >= 3; m--) {
    a.push(`${2019}年 ${m}月`);
}
periods.push(a);

export default periods;
