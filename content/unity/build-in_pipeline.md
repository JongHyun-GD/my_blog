---
emoji: :framed_picture:
title: Unity's Built-in Pipeline
date: '2021-02-16 19:41:00'
author: jonghyun
tags: unity
categories: unity
---



# Built-in Pipeline

### 참고

-   [유니티 문서](https://docs.unity3d.com/kr/current/Manual/RenderTech-ForwardRendering.html)

## 빌트인 렌더 파이프라인의 종류

-   **Forword Rendering(포워드 렌더링)**
    -   빌트인 렌더 파이프라인의 기본 경로
    -   가장 범용적임
    -   픽셀 당 렌더링을 부분적으로 해서 렌더링 속도를 올림
    -   단점 = 실시간 광원을 쓰면 부하가 높다. 조명 정확도가 낮다.
-   **Deferred Shading(디퍼드 셰이딩)**
    -   조명과 그림자 정확도가 높은 렌더링 경로
    -   단, GPU 지원이 필요하고 제한 사항이 많다.
        -   반투명, 직교 투사, 하드웨어 안티앨리어싱 미지원
        -   컬링 마스크 지원이 제한적
        -   Renderer.receiveShadows가 항상 true
-   legacy deferred(레거시 디퍼드), legacy vertex lit(레거시 버텍스 릿)

> 요약
>
> -   포워드 렌더링은 적당히 무거운 대신에 많은 기능을 지원한다.
> -   디퍼드 셰이딩은 포워드 렌더링에 비해 비용이 크고 여러 기능을 지원하지 않는 대신에 높은 퀄리티의 조명을 가진다.

## 포워드 랜더링 경로

![Imgur](https://i.imgur.com/fUWpIFcm.png)

씬에 오브젝트 하나와 광원 8개가 있다고 해보자. 각 픽셀에 대한 색을 계산할 때, 가장 정확히 구현하려면 각 픽셀마다 모든 광원과 계산을 수행해야 한다. 이 방법은 당연히 너무 많은 비용이 든다. 포워드 랜더링은 각 **광원마다 중요도**를 설정해 계산 횟수를 줄인다. 기본적으로 **중요도는 오브젝트와의 거리에 비례**한다. 가까울 수록 오브젝트에 더 많은 영향을 미치기 때문이다. 중요도에 따라 **Per-pixel, Per-vertex, SH(Spherical Harmonics)** 세 그룹으로 나뉜다.

그렇다고 **하나의 광원이 하나의 그룹에 속하지는 않는다**. 각 그룹의 말단에 해당하는 광원(아래 그림에서 D, G)은 오버랩되도록 설계됐다. 이를 통해 그룹이 바뀌면서 갑자기 픽셀의 색깔이 튀는 걸 방지한다.

![Imgur](https://i.imgur.com/UpWbzBNm.png)