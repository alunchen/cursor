// 匹配日期
const reg = /^\d{4}-\d{2}-\d{2}$/;
console.log(reg.test("2025-03-06"));

// 匹配邮箱             
const reg2 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
console.log(reg2.test("123@qq.com"));

// 匹配手机号
const reg3 = /^1[3-9]\d{9}$/;
console.log(reg3.test("13800138000"));  

// 匹配身份证
const reg4 = /^\d{17}[\d|x]$/;
console.log(reg4.test("123456789012345678"));

// 匹配密码     
const reg5 = /^[a-zA-Z0-9]{6,12}$/;
console.log(reg5.test("123456"));

// 匹配URL
const reg6 = /^https?:\/\/([^\s]+\.[^\s]+)$/;
console.log(reg6.test("https://www.baidu.com"));    

// 匹配QQ号
const reg7 = /^[1-9]\d{4,}$/;
console.log(reg7.test("123456"));

// 匹配邮政编码
const reg8 = /^[1-9]\d{5}$/;
console.log(reg8.test("123456"));   

// 匹配银行卡号
const reg9 = /^[1-9]\d{15,18}$/;
console.log(reg9.test("123456"));

// 匹配IP地址
const reg10 = /^(\d{1,3}\.){3}\d{1,3}$/;
console.log(reg10.test("192.168.1.1"));

// 匹配HTML标签
const reg11 = /<[^>]+>/;
console.log(reg11.test("<div>123</div>"));



