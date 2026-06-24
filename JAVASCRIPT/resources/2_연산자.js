/*
연산자
-산술 / 할당 /비교 /논리
- 삼한연산자,?.

*/
// 산술연산자 + - / % **
console.log(10 + 3);
console.log(10 % 3);
console.log(2 ** 10); //거듭제곱

//대입 연산자 = +=*= /= -= %=
let x =10;
x+=5;
console.log(x);

//비교연산자 >, < , >= , <=
// == : 타입비교 x , 값비교 o
//===: 타입비교 o, 값비교 o
console.log(55 == "55");
console.log(55 === "55");
console.log(55 != "55");
console.log(55 !== "55");

// 논리 연산자 && || ! 
// &&, ||는 단순하게 true/false를 판단하는게 아니라 "값"을 반환(단측평가)
// A && B  : A 가 false A, true면 B
console.log(true && "결과");
console.log(false && "결과");
console.log("값" || "기본값");
console.log("" || "기본값");


function great(name){
    name = name || "손";
    console.log("안녕하세요 ."+ name + "님");

}
great();
great("최지원");

const user = {name : "지원"};
user && console.log(user.name);

//삼항연산자 ? A : B
const age3 =20;
const msg = age >= 19 ? "성인" :"미성년";
console.log(msg);

//?? null 병합연산 : 왼쪽이 null/ underfined일때 오른쪽 사용
const count = 0;
console.log(count || 10); //0은 false로 간주되어 10이 출력
console.log(count ?? 10); //0은 /underfined가 아니기 때문에 0출력

// ?. 옵셔널 : 값이 없으면 에러없이 nudefined반환
// const data ={ user : {
//           name : "jiwon"
//}}
const data ={user : null}
console.log(data.user.name);
