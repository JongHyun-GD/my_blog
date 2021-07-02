module.exports = {
  title: `rien`,
  description: `rien's blog`,
  author: `rien`,

  siteUrl: `https://ri3n.netlify.com`,
  ogImage: `https://raw.githubusercontent.com/zoomKoding/gatsby-starter-zoomkoding/master/src/assets/og-image.png`,
  social: {
    github: `https://github.com/JongHyun-GD`,
    linkedIn: `https://www.linkedin.com/in/jonghyun-park-562446199/`,
    email: `jhyun5717@gmail.com`,
  },
  comments: {
    utterances: {
      repo: `JongHyun-GD/my_blog`,
    },
  },
  ga: 'G-7726JGJW3X', // Google Analytics Tracking ID

  // metadata for bio
  bio: {
    language: `en`, // 'en', 'ko'
    name: 'rien',
    description: ['who loves games', 'who enjoys learning', 'who likes to write'],
  },

  // metadata for About Page
  about: {
    timestamps: [
      {
        date: '2018.07 ~ 2018.12',
        activity: '자존감 랩실(X-ray 그리드 라인 제거 개선 기법 연구)',
      },
    ],

    projects: [
      {
        title: 'Picky(글로벌 스킨케어 제품 분석 모바일 앱) 개발',
        description:
          '스타트업에서 구글 출신 CEO님과 CTO님을 포함한 훌륭하신 4분과 함께 앱 개발 사업을 진행했습니다. 저는 초기에 1인 개발자로 v1.0 개발과 이후 유지보수를 담당했습니다. 약 한달 반의 개발 기간을 거쳐 2020년 4월에 v1.0을 배포했고 2021년 3월 현재 4만명 넘는 유저를 보유하고 있습니다.',
        techStack: ['flutter', 'nodejs'],
        thumbnailUrl:
          'https://media-exp1.licdn.com/dms/image/C560BAQGc18OyGfmPZQ/company-logo_200_200/0/1603042283518?e=1622678400&v=beta&t=brvRul711R43vMtIGR96EX7ZEPSTbemrbyzlhC6Dhm4',
        links: {
          post:
            'https://zoomkoding.github.io/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85/%ED%9A%8C%EA%B3%A0/2020/03/25/start-up-app-development.html',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
	  },
    ],
  },
};
