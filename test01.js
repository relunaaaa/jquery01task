//promptで入力した値から「正の数」「負の数」を判定してalertする処理を書いてください。
//1.で数値以外が入力された場合には「数値を入力してください」とalertする処理を追加してください。
var answer = prompt("入力して下さい")；
 if (answer == "-1"){
   alert("-1は負の数です");
 } else if (answer == "2") {
   alert("2は正の数です");
 } else {
   alert("数値を入力して下さい");
 }

 //配列に'パンダ', 'ライオン', 'キリン'を定義し、while文ですべて表示する処理を書いてください。
var amimal = ["パンダ", "ライオン", "キリン"];

var i = 0;
while (i < animal.lenght) {
  alert(animal[i]);
  i ++;
}

//3.でwhile文より前にpromptでキー入力し、その入力した内容が'ライオン'の場合に処理を中断するように変更してください。
var amimal = ["パンダ", "ライオン", "キリン"];

var answer = prompt("好きな動物を入力して下さい");
if (answer == "ライオン")
break;
while (true) {
if (answer == "パンダ");
alert("パンダ");
} else {
if (answer == "キリン");
alert("キリン");
}

//4.で中断したときの'ライオン'の添え字もalertするように変更してください。
var amimal = ["パンダ", "ライオン", "キリン"];

var answer = prompt("好きな動物を入力して下さい");
if (answer == "ライオン");
alert("ライオン");
break;
while (true) {
if (answer == "パンダ");
alert("パンダ");
} else {
if (answer == "キリン");
alert("キリン");
}

//オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。
var animal = [
  {"name": "パンダ", "kg": 80},
  {"name": "ライオン", "kg": 200},
  {"name": "キリン", "kg": 300}
];

//6.でpromptで入力した動物名の体重をalertするように変更してください。
var animal = [
  {"name": "パンダ", "kg": 80},
  {"name": "ライオン", "kg": 200},
  {"name": "キリン", "kg": 300}
];
var answer = prompt("動物を入力して下さい");
alert(animal[anser].kg);

//円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。円周率は3.14とします。
var r = prompt("半径を入力して下さい");
function calc(r){
  return r * r * 3.14;
}
alert(calc(r));
