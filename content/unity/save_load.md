---
emoji: 💾
title: save, load
date: '2021-02-25 11:32:00'
author: jonghyun
tags: unity
categories: unity
---

### 참고

-   [\[Unity Document\] PlayerPrefs](https://docs.unity3d.com/kr/530/ScriptReference/PlayerPrefs.html)
-   [\[Unity Q&A\] How do I save a custom class of variables to playerprefs?](https://answers.unity.com/questions/610893/how-do-i-save-a-custom-class-of-variables-to-playe.html)

## Save, Load

유니티 게임에서 어떤 데이터를 저장하고 불러오는 여러 방법을 알아봤다.

### 1\. PlayerPrefs (유니티 내장 함수)

[PlayerPrefs](https://docs.unity3d.com/kr/530/ScriptReference/PlayerPrefs.html)는 UnityEngine 클래스 안에 구현된 클래스로 게임 세션이 진행되는 와중에 데이터를 파일로 저장하거나 불러온다.

파일이 저장되는 디폴트 경로는 다음과 같다.

| macOS  | ~/Library/Preferences/unity.\[company name\].\[product name\].plist |
| ------ | ------------------------------------------------------------ |
| Window | HKCU\\Software\[company name\]\[product name\] key           |
| Linux  | ~/.config/unity3d/\[CompanyName\]/\[ProductName\]            |

PlayerPrefs는 **Build Setting에서 설정한 company name과 product name을 가져와 경로에 사용**한다. 덕분에 경로지정에 신경을 쓰지 않아도 된다.

PlayerPrefs로 만든 세이브 로드 코드는 다음과 같다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerPrefsExample : MonoBehaviour
{
    public Text levelText;
    public Text experienceText;
    public Text nameText;

    [SerializeField] private int _level = 0;
    [SerializeField] private float _experience = 0.0f;
    [SerializeField] private string _name = "WhoAreYou";

    public void Load()
    {
        _level = PlayerPrefs.GetInt("Level");
        _experience = PlayerPrefs.GetFloat("Experience");
        _name = PlayerPrefs.GetString("Name");

        UpdateUI();
    }

    public void Save()
    {
        PlayerPrefs.SetInt("Level", _level);
        PlayerPrefs.SetFloat("Experience", _experience);
        PlayerPrefs.SetString("Name", _name);
    }

    private void UpdateUI()
    {
        levelText.text = _level.ToString();
        experienceText.text = _experience.ToString();
        nameText.text = _name;
    }

    private void Start()
    {
        UpdateUI();
    }
}
```

코드를 보이듯, PlayerPrefs는 변수마다 데이터를 저장하고 그 타입도 int, float, string으로 제한되어 있다.

#### 정리

PlayerPrefs

-   장점
    -   사용하기 아주 편리하다.
    -   경로 지정에 신경쓰지 않아도 된다
-   단점
    -   저장할 수 있는 타입이 제한적이다. (=구조체를 저장할 수 없다.)

### 2\. Custom Serializer

세이브, 로드는 결국 파일로 저장하고 불러오는 것이다. 즉, Save는 bytearray로 serialize하는 것이고 Load는 deserialize해서 bytearray로 만드는 것이다. 이 일을 할 수 있는 Serializer를 C# 내장 함수를 통해 구현할 수 있다.

```csharp
 // 출처: https://answers.unity.com/questions/610893/how-do-i-save-a-custom-class-of-variables-to-playe.html 
 using System;
 using System.IO;
 using UnityEngine;
 using System.Collections;
 using System.Collections.Generic;
 using System.Runtime.Serialization.Formatters.Binary;

 public class Serializer
 {
     public static T Load<T>(string filename) where T: class
     {
         if (File.Exists(filename))
         {
             try
             {
                 using (Stream stream = File.OpenRead(filename))
                 {
                     BinaryFormatter formatter = new BinaryFormatter();
                     return formatter.Deserialize(stream) as T;
                 }
             }
             catch (Exception e)
             {
                 Debug.Log(e.Message);
             }
         }
         return default(T);
     }

     public static void Save<T>(string filename, T data) where T: class
     {
         using (Stream stream = File.OpenWrite(filename))
         {    
             BinaryFormatter formatter = new BinaryFormatter();
             formatter.Serialize(stream, data);
         }
     }
 }

 // 사용방법
 Serializer.Save<ExampleClass>(filenameWithExtension, exampleClass);
 ExampleClass exampleClass = Serializer.Load<ExampleClass>(filenameWithExtension));
```

이렇게 하면 어떤 타입이든지 저장할 수 있다. 하지만 직접 구현해야 할 뿐만 아니라 filename에 path를 지정해서 넣어줘야 한다는 단점이 있다.

#### 정리

Custom Serializer

-   장점
    -   어떤 타입이든지 저장할 수 있다.
-   단점
    -   직접 구현해야 한다.
    -   저장경로에 신경써줘야 한다. 이 과정에서 하드코딩이 될 여지가 있다.
        -   이는 유니티 내부 함수로 동적인 저장경로를 사용하면 해결할 수 있다.
```toc

```
