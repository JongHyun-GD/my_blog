---
emoji: ♻️
title: virtual, abstract, interface
date: '2021-02-23 14:31:00'
author: jonghyun
tags: unity
categories: unity
---

### 가상(virtual)과 추상(abstract)

가상과 추상 사이에 핵심적인 차이점은 **"완성도"**다. 가상 클래스는 재정의(override)할 수 있지만 필수는 아니다. 반대로 추상 클래스는 **'불완전하다는 의미'**로서 파생 클래스에서 의무적으로 재정의해야 한다. 이 때, 불완전하다는 의미는 추상(abstract) 키워드를 달면 구체적은 기능을 제공할 수 없다는 뜻이다. 예시로 살펴보자.

```csharp
// ==============================================
// 가상 클래스 예제
// ==============================================
public class Animal
{
	public virtual void Speak()
	{
		Console.WriteLine("Hello!"); // 가상 클래스는 구체적인 기능을 기술할 수 있다.
	}
}

public class Person : Animal
{
	// 가상 클래스의 파생 클래스는 꼭 재정의하지 않아도 된다.
}

// ==============================================
// 추상 클래스 예제
// ==============================================
public abstract class Animal
{
	public abstract void Speak(); // 추상 클래스는 구체적인 기능을 서술할 수 없다.
}

public class Person : Animal
{
	public override void Speak()
	{
		Console.WriteLine("안녕!");
	}
}
```

<table style="border-collapse: collapse; width: 100%;" border="1" data-ke-style="style12" data-ke-align="alignLeft"><tbody><tr><td style="width: 20%;">&nbsp;</td><td style="width: 20%;">virtual (가상)</td><td style="width: 20%;">abstract (추상)</td></tr><tr><td style="width: 40%;">재정의</td><td style="width: 40%;">선택</td><td style="width: 40%;">필수</td></tr><tr><td style="width: 40%;">기능 구현</td><td style="width: 40%;">가능</td><td style="width: 40%;">불가능</td></tr></tbody></table>

### 추상(abstract)와 인터페이스(interface)

인터페이스는 가상(virtual) 클래스와 추상(abstract) 클래스**보다 높은 추상성**을 제공한다. 얼마나 추상성이 높냐면 C#은 다중 상속을 지원하지 않는데, 인터페이스만은 **다중 상속**을 할 수 있을 정도다. 높은 추상성을 제공하는 만큼 인터페이스도 추상 클래스처럼 어떤 기능 정의도 허락하지 않는다. 예제 코드로 살펴보자.

```csharp
interface IAnimal
{
	void Speak(); //interface 안에서 정의된 메서드는 모두 abstract이므로 굳이 쓰지 않아도 된다.
}

class Person : IAnimal, Monobehavior //interface는 다중 상속을 받을 수 있다.
{
	public void Speak() //interface도 abstract처럼 재정의가 필수다.
    {
    	Console.WriteLine("Hello!");
    }
}
```

<table style="border-collapse: collapse; width: 100%;" border="1" data-ke-style="style12" data-ke-align="alignLeft"><tbody><tr><td style="width: 33.3333%;">&nbsp;</td><td style="width: 33.3333%;">abstract class</td><td style="width: 33.3333%;">interface</td></tr><tr><td style="width: 33.3333%;">기능 구현</td><td style="width: 33.3333%;">불가능</td><td style="width: 33.3333%;">불가능</td></tr><tr><td style="width: 33.3333%;">다중 상속</td><td style="width: 33.3333%;">불가능</td><td style="width: 33.3333%;">가능</td></tr><tr><td style="width: 33.3333%;">abstract가 아닌 variable이나 method 소유</td><td style="width: 33.3333%;">가능</td><td style="width: 33.3333%;">불가능</td></tr></tbody></table>

```toc

```
