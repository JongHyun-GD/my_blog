---
emoji: 🎮
title: command pattern
date: 2021.02.25 17:38:00
author: jonghyun
tags: unity
categories: unity
---

## Command Pattern

커맨드 패턴(Command pattern)은 어떤 요청을 객체로 만들어서 캡슐화해서 요청의 저장, 로깅, 취소를 할 수 있게 도와준다.

커맨드 패턴의 핵심인 Command interface는 아주 간단한 구조를 가지고 있다.

```c#
public interface Command
{
	public void execute();
}
```

간단한 구조를 가지고 있는 만큼, 사용자는 다양한 방식으로 자체 커맨드를 만들어서 보낼 수 있다. 예를 들어, 플레이어를 점프하게 만드는 커맨드를 보내고 싶다고 생각해보자. 그럼 먼저 그에 해당하는 커맨드를 구체적으로 정의한다.

```c#
public class JumpCommand : Command
{
	public void Execute()
    {
    	Console.WriteLine("Player jump is invoked.");
    }
}
```

그리고 이 커맨드를 커맨드를 저장하고 있을 구조체에 보낸다.

```c#
void Update ()
{
	if (Input.GetButtonDown("Jump"))
    {
    	playerCmdStack.Add(new JumpCommand());
    }
}
```

## Why Command Pattern?

사용법은 얼추 알 수 있지만, 왜 사용해야 하는지는 위의 예시로 느끼기 힘들다. 위의 예시를 확장해 생각해보면, Jump하는 커맨드가 플레이어 뿐만이 아니라 다른 NPC에도 쓰일 수 있다. 그때도 같은 구조를 들고갈 수 있다. 또한 이런 여러 명령들을 저장하고 있기 때문에, Undo와 Redo를 하기에 용이하다.

