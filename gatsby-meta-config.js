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
