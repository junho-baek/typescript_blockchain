- [1. INTRODUCTION](#1-introduction)
  * [타입스크립트의 존재 이유는 안정성 때문이다.](#-----------------------)
- [2. OVERVIEW OF TYPESCRIPT](#2-overview-of-typescript)
  * [2.0 How Typescript Works](#20-how-typescript-works)
    + [타입스크립트가 어떻게 작동하는지 알아보자!](#-----------------------)
- [2.1 Implict Types vs Explicit Types](#21-implict-types-vs-explicit-types)

---
# 1. INTRODUCTION

## The reason for the existence of TypeScript is stability.
> 자바스크립트는 이상한 코드를 작성해도 어떻게든 실행하려고 한다.
> 예컨데   
> javascript
> ~~~js
> [1,2,3,4] + true
> ~~~
> console
> ~~~console
> '1,2,3,4true'
> ~~~
> 이런 식이다. 배열과 불리언 타입은 없어지고 문자열이 반환된다.
> 이 말도 안되는 실행방식 때문에 이상한 코드가 작성되도 실행한다.

> ~~~js
> function divide(a,b) {
>  return a/b  
>}
> ~~~
> ~~~console
> divide("xxx")
> > NaN
> ~~~
> 이렇게 이상한 변수가 들어가도 에러가 뜨지 않는다.
> 에러가 뜨지 않는다는 것은 개발자로서 보호받지 못한다는 것을 의미한다고 할 수 있다.
> ~~~
> nico.hello()
> ~~~
> 이런 식으로 지정 되지 않은 메서드를 실행조차 하면 안되는건데, 자바스크립트는 굳이 실행해서 런타임 에러를 발생시킨다. 런타임 에러는 클라이언트 단에서 발생하는 에러이므로 최악의 에러라고 할 수 있다.


# 2. OVERVIEW OF TYPESCRIPT
## 2.0 How Typescript Works

- c#, java 등 컴파일이 필요한 언어처럼 특정 언어로 변환되기 전에 프로그래밍 체크를 해준다.
- 덕분에 자바스크립트에서 실행되던 이상한 코드들이 실행되지 않아, 프로그래밍에 도움을 받을 수 있다.

## 2.1 Implict Types vs Explicit Types

- 타입 시스템에 대해서 알아보자
- 모든 변수에 타입을 정해줘야할까?
- 타입스크립트는 변수의 타입을 명시해도 되고, 추론하게 만들어도 된다.

~~~ts
let a = "hello"; // 타입추론 -> 스트링
let b : boolean = "x" //오류가 발생
~~~
> a는 타입을 지정해주지 않았지만, 타입스크립트는 a가 스트링 타입이라고 추론한다.그래서 a 값이 스트링이 아닌 변수로 바뀐다면 오류를 발생할 것이다. b는 타입을 지정해줬지만, 캐릭터가 들어갔으므로 오류가 발생할 것이다.
>
> 암묵적으로 타입이 지정되는 것이 더 깔끔해보이나 몇몇 경우에는 타입을 지정해줘야한다. 예컨데, 빈 배열의 원소에 어떤 타입이 들어가야할지는 정해줘야한다.
~~~ts
let c : number[] = []
~~~

## 2.2 Types of TS part One
