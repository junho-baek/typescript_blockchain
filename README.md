# Typescript로 블록체인 만들기
- [Typescript로 블록체인 만들기](#typescript----------)
- [1 INTRODUCTION](#1-introduction)
  * [타입스크립트의 존재 이유는 안정성 때문이다.](#-----------------------)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

---
# 1. INTRODUCTION

## 타입스크립트의 존재 이유는 안정성 때문이다.
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
### 타입스크립트가 어떻게 작동하는지 알아보자!
- c#, java 등 컴파일이 필요한 언어처럼 특정 언어로 변환되기 전에 프로그래밍 체크를 해준다.
- 덕분에 자바스크립트에서 실행되던 이상한 코드들이 실행되지 않아, 프로그래밍에 도움을 받을 수 있다.

# 2.1 Implict Types vs Explicit Types