 //12_1
  // do {
  //   var result = prompt("Каково «официальное» название JavaScript?»", " ");
  // } while (result===null);
  //     if (result==='ECMAScript')
  //      {
  //        document.write(' Верно!');
  //      }
  // else {
  //        document.write('Не знаете? «ECMAScript»!');
  //       }

//12_2
// const result = prompt("Введите число", " ");
//  if (result>0)
//  {
//   alert('1');
//  } else if (result===0) {
//     alert('0');
//  } else {
//     alert('-1');
//  }

//12_3
// const result = prompt("Введите логин", " ");
//
//  if (result===null)
//  {
//   alert("Вход отменён");
//  }
//  else if (result==="Админ"|| result==="aдмин")
//  {
//   let password = prompt("Введите пароль", " ");
//   if (password===null)
//   {
//    alert("Вход отменён");
//   }
//   else  if(password==="Чёрный Властелин")
//    {
//       alert("Добро пожаловать!");
//   }
//    else {
//      alert("Пароль неверен");
//    }
//  }
//  else
//  {
//     alert("Я вас не знаю");
//  }

//12_4
// const a=1 ;
// const  b=2;
// let result = (a + b < 4) ? 'Мало' : 'Много';
// document.write(result);

//12_5
 // let login = prompt("Введите логин", " ");
 // let message = (login === 'Вася') ?'Привет':(login === 'Директор') ?'Здравствуйте':(login === '')?'Нет логина':' ';
 // document.write(message);


//15_1
//  for (let i=1;i<=10; i++)
//  {
//   if (i%2===0)
//   document.write(i+ " ");
// }

//15_2

 // let i=0;
 // while (i<3)
 // {
 //  alert( `${'Номер'}  ${i++}  ${'!'}`  );
 // }

//15_3

 // do {
 //    let result = prompt("Введите число", ' ');
 //    } while (result <= 100 && result != null);

//15_4
for (let i=2; i<=10; i++)
{
let count=0;
 for (let j=2; j<10; j++)
{
  if (i%j===0 &&i!==j) count++;
 }
 if (count===0) document.write(i+ " ");
}
