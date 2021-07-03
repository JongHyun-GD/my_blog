---
emoji: 🏣
title: Addressable Asset System
date: 2021.03.02 15:39:00
author: jonghyun
tags: unity
categories: unity
---
## 기존 에셋 시스템의 장단점

1.  직접 레퍼런스
    -   장점
        -   쉽고 코드 길이가 줄어든다.
    -   단점
        -   실제로 쓰지 않아도 메모리가 올라가 있다.
2.  리소스 폴더
    -   장점
        -   쉽고 편리하다
    -   단점
        -   빌드할 때, 리소스 폴더 안의 파일은 각 파일마다 빌드하므로 빌드 사이즈가 커진다.
        -   게임 시작 시 리소스 파일에 대한 인덱싱을 하다보니 앱 시작 시간이 길어진다.
        -   리소스폴더 안에 접근할 때는 파일 이름을 스트링으로 가지고 있기 때문에 에셋의 이름을 변경할 수가 없다.
    -   결론
        -   사용할 때, 경계해야 한다.
3.  에셋 번들
    -   장점
        -   빌드 사이즈 절감
        -   앱 시작 시간이 짧다
    -   단점
        -   에셋번들 종속성(depedency), 버전 관리로 인해 사용하기 까다롭다.
        -   모든 것이 코드로 되어 있어서 에디터 수준에서 작업이 거의 없다.

### 기존 에셋 시스템의 워크 플로

보통 **직접 레퍼런스 -> 리소스 폴더 -> 에셋번들**의 순서로 개발이 진행되고, 이런 경우 코드 변경이 필수다.

## Addressable Asset System

### Addressable Asset?

-   Address가 할당된 에셋. 이 Address로 에셋에 접근할 수 있다.
-   Addressable Asset System = Asset **관리 + 로딩 + 빌드**

### 장점

-   에셋 빌드와 배포의 단순화
-   에셋 관리 용이
-   코드 변경 X

### 구현

1.  패키지 매니저에서 Addressables System 적용
2.  Inspector에서 해당 에셋을 클릭하고 Addressable에 체크 (해당 내용은 Addressable 윈도우에서 확인 가능)
3.  "어드레스"를 이용한 Loading, Instantiating
4.  `GameObject myGameObj; //// 로딩을 하고, 로딩이 끝나면 발동시킬 함수를 구독해놓을 수 있다. ... Addressables.LoadAsset<GameObject>("AssetAddress").Completed += onLoadDone; } //// 로딩이 끝나면 발동하는 콜백 함수 private void onLoadDone(IAsyncOperation<Sprite> obj) { myGameObject = obj.Result; } //// 실제 Instantiating Addressbles.Instantiate<GameObject>("AssetAddress"); // "AssetReference"를 이용한 로딩과 Instantiating // - Inspector에서 Address 입력을 도와준다. // - 직접 타이핑이 없어 오타 발생이 없다. public AssetReference spawnObject; public void Spawn() { spawnObject.InstantiateAsync(); // 또는 spawnObject.LoadAsset<GameObject>(); spawnObject.Instantiate<GameObject>(pos, rot); }`
5.  어드레스 해제

    -   LoadAsset => ReleaseAsset()
    -   Instantiate() => ReleaseInstance()

    ```
    Addressables.ReleaseAsset<GameObject>(obj);
    Addressables.ReleaseInstance<GameObject>(obj, delay);

    AddRef.ReleaseAsset<GameObject>(obj);
    AddRef.ReleaseInstace<GameObject>(obj);
    ```


### 작동 방식

-   Addressable은 크게 '**초기화**'와 '**로드**'일 때 작동한다.
-   내부 파츠는 리소스의 어드레스를 관리하는 'Addressables'과 실제 파일을 관리하는 'Resource Manager'가 있다.
-   초기화
    -   Addressble
        -   Content Catalog를 참고해 실제 리소스 위치를 담는 Resource Locator를 형성한다.
        -   Content Catalog = 주소 정보를 Serialization해서 JSON파일 형태로 가지고 있다.
    -   Resource Manager
        -   Provider를 등록한다.
        -   Provider = 각 파일 형식에 따라 최적화된 로드 방식을 가지고 있다.
-   로드
    1.  사용자가 코드로 로드를 시작한다. 이 때, Addressables에 주소를 넘겨준다.
    2.  Addressables의 Resource Locator가 실제 리소스 위치를 Resource Manager에게 넘긴다.
    3.  Resource Manager는 실제 리소스를 보고 적절한 Provider를 선정해서 AsyncOperation을 반환한다.
    4.  로드가 다 되면 로드 완료 이벤트가 발동한다.
