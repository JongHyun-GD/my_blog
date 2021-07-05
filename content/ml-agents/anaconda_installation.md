---
emoji: 🪛
title: Anaconda 설치와 환경 조성
date: '2020-05-03 16:52:00'
author: jonghyun
tags: ml-agents
categories: ml-agents
---
설치 후에 윈도우 같은 경우 Anaconda Prompt가 따로 생성되지만
MacOS에서는 Terminal에 통합된다.

**작업 공간 생성**\
conda create -n [작업공간이름] python=[버전]

**작업 공간 진입**\
conda activate [작업공간이름]

**Tensorflow 설치**\
pip install tensorflow==[버전]

**Jupyter Notebook 설치** (여기서 깔아야 root 계정이 아니라 conda 환경에서 쥬피터 노트북이 실행된다)\
conda install jupyter notebook

**Jupyter Notebook 실행**\
jupyter notebook

**텐서보드 실행**\
tensorboard --logdir="./"
