---
emoji: 🗑
title: using, IDisposable
date: '2021-09-10 20:37:00'
author: jonghyun
tags: unity
categories: unity
---

## 예제

```
string manyLines=@"This is line one
This is line two
Here is line three
The penultimate line is line four
This is the final, fifth line.";

using (var reader = new StringReader(manyLines))
{
   string? item;
   do {
       item = reader.ReadLine();
       Console.WriteLine(item);
  } while(item != null);
}

// https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/keywords/using-statement
```

## Using?

- `using` 문은 다른 namespace를 참고하려고 할 때 써본 적 있을 것이다.

- ```
  using UnityEngine;
  ```

- 이 경우말고도 다른 방식으로 using문을 사용할 수 있는데, 이는 namespace와는 전혀 무관한 이유다.

- using문은 특정 인스턴스를 임시적으로 사용하기 위해 쓸 수 있다. 위 예제에서 using문의 중괄호가 끝나면 reader 인스턴스가 알아서 메모리 해제된다.

- 이를 통해 다음과 같은 장점을 획득한다.

  1. 클래스의 라이프 사이클을 명확히 할 수 있다.
  2. GC 호출의 횟수를 줄일 수 있다.

- 모든 객체를 using문 조건 안에 넣을 수는 없다. microsoft docs에서는 IDisposable를 상속하는 객체만이 using문 안에 들어올 수 있다고 명시한다.

## IDisposable?

- `Disposable`은 일회용이라는 뜻이다.
- Dispose() 메서드를 구현해야 한다. 이 메서드는 using문이 끝나는 시점에 호출된다.

### 참고

- [네이버 블로그 | C# IDisposable](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=94cogus&logNo=221539195761)

- [마이크로소프트 문서 | using](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/keywords/using-statement)
- [마이크로소프트 문서 | IDisposable](https://docs.microsoft.com/ko-kr/dotnet/api/system.idisposable?view=net-5.0)
