module.exports = {
  title: `jognhyun`,
  description: `hyun's blog`,
  author: `jonghyun`,

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
    language: `ko`, // 'en', 'ko'
    name: '박종현',
    description: ['게임을 좋아하는', '배움을 즐기는', '개발자'],
  },

  // metadata for About Page
  about: {
    timestamps: [
      {
        date: '2018.07 ~ 2018.12',
        activity: 'test',
		links: {
			post: '',
			googlePlay: '',
			appStore: '',
			github: '',
			demo: '',
		},
      },
    ],
    projects: [
      {
        title: 'test',
        description:'',
        techStack: ['unity', 'c'],
        thumbnailUrl:
          '',
        links: {
          post:'',
          googlePlay: '',
          appStore: '',
		  github:'',
		  demo:'',
        },
	  },
    ],
  },
};
