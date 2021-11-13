---
emoji:💡
title:전구와 스위치
date:'2021-11-13 23:45:37'
author:hyun
tags:bruteforce
categories:PS
---

### 출처

[https://www.acmicpc.net/problem/2138](https://www.acmicpc.net/problem/2138)

### 문제

N개의 스위치와 N개의 전구가 있다. 각각의 전구는 켜져 있는 상태와 꺼져 있는 상태 중 하나의 상태를 가진다. i(1 < i < N)번 스위치를 누르면 i-1, i, i+1의 세 개의 전구의 상태가 바뀐다. 즉, 꺼져 있는 전구는 켜지고, 켜져 있는 전구는 꺼지게 된다. 1번 스위치를 눌렀을 경우에는 1, 2번 전구의 상태가 바뀌고, N번 스위치를 눌렀을 경우에는 N-1, N번 전구의 상태가 바뀐다.

N개의 전구들의 현재 상태와 우리가 만들고자 하는 상태가 주어졌을 때, 그 상태를 만들기 위해 스위치를 최소 몇 번 누르면 되는지 알아내는 프로그램을 작성하시오.

### 입력

첫째 줄에 자연수 N(2 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 전구들의 현재 상태를 나타내는 숫자 N개가 공백 없이 주어진다. 그 다음 줄에는 우리가 만들고자 하는 전구들의 상태를 나타내는 숫자 N개가 공백 없이 주어진다. 0은 켜져 있는 상태, 1은 꺼져 있는 상태를 의미한다.

### 출력

첫째 줄에 답을 출력한다. 불가능한 경우에는 -1을 출력한다.

예제 입력 1

```
3
000
010
```

예제 출력 1

`3`

### 접근 1 - 브루트포스

가장 간단하게 모든 경우의 수를 다해보는 것을 해볼 수 있다. 이 경우에 불가능한 경우도 아주 쉽게 판별할 수 있다. 시도해보기 전에 복잡도를 생각해보자. 전구의 개수는 최대 100,000개이다. 즉, 모든 경우의 수는 2^100000이다. 택도 없다.

### 접근 2 - 최적화 1

바로 모든 경우를 해볼 수는 없다. 그렇다면 최적화를 해볼 수 있지 않을까? 먼저, 하나의 전구만 생각해보자. 이 때, 주목할 수 있는건 스위치를 한번 누를 때 바뀌는 건, 해당 스위치의 위치의 양옆이다. 그렇다면, N번째 전구의 입장에서 경우의 수는 다음과 같다.

결과의 N번째 전구의 상태와 다름 ⇒ N-1, N, N+1 번째의 스위치 중 1개 또는 3개가 눌렸다.

같음 ⇒ N-1, N, N+1 번째 스위치 중 아무것도 눌리지 않았거나 2개가 눌렸다.

N번째로 보는 방법은 너무 많은 경우의 수를 낳는다. 이 방법도 너무 복잡해지므로 다른 방법을 생각해봐야겠다.

### 접근 3 - 최적화 2

순서가 상관없는 문제를 쉽게 푸는 방법 중 하나는 순서를 강제로 매기는 것이다. 첫번째 전구를 보자. 첫번째 전구에 영향을 줄 수 있는 건, 첫번째와 두번째 스위치뿐이라서 경우의 수가 몇개 없다. 구체적으로 나열해보면,

상태가 같음

1. 첫번째와 두번째 스위치를 전부 눌렀다.
2. 첫번째와 두번째 스위치 모두 누르지 않았다.

다름

1. 첫번째 스위치를 눌렀다.
2. 두번째 스위치를 눌렀다.

그러면 두개의 전구의 상태가 두개의 경우의 수로 나눠진다.

그럼 세번째 전구의 경우를 보자. 여기선 예제를 예로 들겠다.

예제에선 첫번째 전구가 꺼져있으니까, 먼저 꺼짐 1의 경우를 본다. 둘다 눌렸다면 세번째 전구는 두번째 스위치를 통해서 켜진 상태다. **그런데 사실 세번째 전구의 상태를 중요한게 아니다.** 중요한건 두번째 전구의 상태다. 왜냐하면 `두번째 스위치의 상태까지 정해진 상황이기 때문에 두번째 전구의 상태는 세번째 스위치가 결정하기 때문이다.`

꺼짐 1번의 경우에 첫번째와 두번째 스위치를 전부 눌렀으니 두번째 전구는 꺼진 상태다. 그러므로 세번째 스위치는 무조건 눌러야 한다.

즉, 이제부터 분기는 나눠지지 않는다. 그렇다면 시간 복잡도는 O(2N) = O(N)으로 귀결된다. 꽤 빠르다.

구현
```
#include <iostream>
#include <string>
#include <cmath>
#define MAX_SIZE 100000
#define INF 1234567890;
using namespace std;

bool bulbs[MAX_SIZE];
bool ans[MAX_SIZE];
int N;

// n번째 스위치를 누른다.
void click_switch(int n)
{
	for (int i = n-1; i <= n+1; ++i)
	{
		if (i < 0 || i >= MAX_SIZE) continue;
		bulbs[i] = !bulbs[i];
	}
}

// n번째까지 답과 같은지 확인한다.
bool is_answer(int n)
{
	for (int i = 0; i < n; ++i)
	{
		if (bulbs[i] != ans[i]) return false;
	}
	return true;
}

// index번째 전구의 상태를 결정한다.
// 마지막번째라면 자신의 상태를 결정하고 답인지 검사해서 맞으면 click를 반환한다.
int solve(int index, int clicked)
{
	int res;
	bool has_clicked = false;

	// N == 2일 때, 특별 처리
	if (index >= N) return is_answer(N) ? clicked : INF;

	if (bulbs[index - 1] != ans[index - 1])
	{
		click_switch(index);
		clicked++;
		has_clicked = true;
	}

	if (index == N - 1) {// 기저사례
		res = is_answer(N) ? clicked : INF;
	}
	else {// 재귀사례
		res = solve(index+1, clicked);
	}
	if (has_clicked) click_switch(index);
	return res;
}

int main()
{
	int i;
	int res = INF;

	cin >> N;
	string str;
	cin >> str;
	for (i=0;i<N;++i)
		bulbs[i] = str[i] == '1' ? true : false;
	cin >> str;
	for (i=0;i<N;++i)
		ans[i] = str[i] == '1' ? true : false;
	if (bulbs[0] == ans[0])
	{
		// 1,2번째 스위치를 전부 누르지 않은 경우
		res = min(res, solve(2, 0));
		// 1,2번째 스위치를 전부 누른 경우
		click_switch(0);
		click_switch(1);
		res = min(res, solve(2, 2));
	}
	else
	{
		// 1번째 스위치를 누른 경우
		click_switch(0);
		res = min(res, solve(2, 1));
		click_switch(0);
		// 2번째 스위치를 누른 경우
		click_switch(1);
		res = min(res, solve(2, 1));
	}
	res = res == 1234567890 ? -1 : res;
	cout << res << "\n";
	return (0);
}
```
