// #2.2
//타입 지정시에 ?를 쓰게 되면, undefine이거나, 지정한 타입이라는 뜻이다.
const playerNico : {
  name:string,
  age?:number
} = {
  name:"nico"
}

const playerLynn : {
  name:string,
  age?:number
} = {
  name:"lynn",
  age:12
}
// ?가 붙어있다면 undefine인지 아닌지 체크하고, 해당 타입에 대한 조건문을 체크해야하므로 다음과 같이 쓴다. 선택적인 타입.
if(playerNico.age && playerNico.age <10){
  
}

//반복되는 같은 타입을 써야할 때, Type Alias를 만들어줄 수 있다.
type Player = {
  name:string,
  age?:number
}

const junho: Player = {
  name:"junho"
}

//이렇게 쓰는 것도 가능하다. 타입의 재사용성이 높다면, 엘리아스를 만드는 것도 좋을지도
type Age = number;

//함수의 리턴 값의 타입을 지정해주는 것도 가능하다.
function playerMaker(name:string) : Player {
  return{
    name
  }
}
//화살표 함수에서도 인자에 타입지정 괄호 밖에 리턴의 타입지정! 똑같다.
const playermakert=(name:string): Player => ({name})