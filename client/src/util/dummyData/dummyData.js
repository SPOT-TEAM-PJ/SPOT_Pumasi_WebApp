// 어린이집: 순천향대학교사랑둥지직장어린이집, 행복이어린이집, 아기사랑어린이집
// 아파트: 경희학성아파트, 대주아파트, 친오애아파트

export const dummyData = () => [
  {
    // dummydata1
    id: 1,
    userId: 1, //아이디
    password: 1234,
    parent: {
      name: '이선정',
      nickname: '시후맘',
      job: '프리랜서',
      jobinfo: '아산',
      phoneNumber: '010-1234-5678',
      stateComment: 'test post 1',
      email: 'test1@gmail.com',
      address: '충청남도 아산시 신창면',

      image: '/',
    },
    children: [
      {
        childId: 1,
        school: '행복이 어린이집',
        age: 5,
        childrenname: '김시후',
        gender: '남자',
        image: '/',
      },
      {
        childId: 2,
        school: '행복이 어린이집',
        age: 7,
        childrenname: '이소은',
        gender: '여자',
        image: '/',
      },
    ],
    post: [
      {
        postId: 1,
        postType: 0, // 0 구인 1 구직
        complement: false, // 마감 유무
        date: '22.11.07',
        content: {
          serviceType: 0, // 0 등원, 1 하원
          postTilte: '등원 구합니다.',
          needCar: false, // false 무관, true 필요
          startingPoint: '경희학성아파트',
          endPoint: '행복이 어린이집',
          startTime: '09.00',
          postContent: '101동 1001호에서 행복이 어린이집 등교해주실분 구해요.',
        },
        message: [
          {
            postId: 1, // 게시글 id
            otherId: 2,
            comment: [
              [
                {
                  messageId: 1,
                  userId: 2,
                  content: '안녕하세요 사람 구하셨나요?',
                  date: '',
                },
                {
                  messageId: 1,
                  userId: 1,
                  content: '아니요',
                  date: '',
                },
                {
                  messageId: 1,
                  userId: 2,
                  content: '제가 하고 싶어요',
                  date: '',
                },
              ],
              [
                {
                  messageId: 2,
                  userId: 3,
                  content: '사람 구하셨나요?',
                  date: '',
                },
                {
                  messageId: 2,
                  userId: 1,
                  content: '아니요',
                  date: '',
                },
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    // dummydata2
    id: 2,
    userId: 2,
    password: 4321,
    parent: {
      name: '김현수',
      nickname: '수민맘',
      job: '은행원',
      jobinfo: '아산',
      phoneNumber: '010-1111-2222',
      stateComment: 'test post 2',
      email: 'test2@gmail.com',
      address: '충청남도 아산시 신창면',
      image: '/',
    },
    children: [
      {
        childId: 2,
        school: '행복이어린이집',
        age: 5,
        childrenname: '정수민',
        gender: '여자',
        image: '/',
      },
    ],
    post: [
      {
        postId: 2,
        postType: 1, // 0 구인 1 구직
        complement: false, // 마감 유무
        date: '22.11.09',
        content: {
          serviceType: 0, // 0 등원, 1 하원
          postTilte: '등원 해드립니다.',
          needCar: false, // false 무관, true 필요
          startingPoint: '경희학성아파트',
          endPoint: '행복이어린이집',
          startTime: '09.00',
          postContent: '행복이 어린이집에서 등원 해드립니다.',
        },
        message: [
          {
            postId: 2,
            otherId: 1,
            comment: [
              [
                {
                  messageId: 1,
                  userId: 1,
                  content: '안녕하세요 등원 부탁드려도 될까요?',
                  date: '',
                },
                {
                  messageId: 1,
                  userId: 2,
                  content: '네!',
                  date: '',
                },
                {
                  messageId: 1,
                  userId: 1,
                  content:
                    '오전 9시에 경희학성에서 행복이 어린이 집까지 부탁드릴게요!',
                  date: '',
                },
              ],
              [
                {
                  messageId: 2,
                  userId: 3,
                  content: '안녕하세요 등원 부탁드려도 될까요?',
                  date: '',
                },
                {
                  messageId: 2,
                  userId: 1,
                  content: '죄송합니다. 먼저 부탁해주신분이 있어서요ㅠㅠ',
                  date: '',
                },
              ],
            ],
          },
        ],
      },
    ],
  },
  {
    // dummydata3
    id: 3,
    userId: 3,
    password: 4321,
    parent: {
      name: '김성호',
      nickname: '성수맘',
      job: '교사',
      jobinfo: '아산',
      phoneNumber: '010-2211-3322',
      stateComment: 'test post 3',
      email: 'test3@gmail.com',
      address: '충청남도 아산시 신창면',
      image: '/',
    },
    children: [
      {
        childId: 3,
        school: '행복이어린이집',
        age: 5,
        childrenname: '김수정',
        gender: '여자',
        image: '/',
      },
    ],
    post: [
      {
        postId: 3,
        postType: 1, // 0 구인 1 구직
        complement: false, // 마감 유무
        date: '22.11.09',
        content: {
          serviceType: 0, // 0 등원, 1 하원
          postTilte: '등원 해드립니다.',
          needCar: false, // false 무관, true 필요
          startingPoint: '경희학성아파트',
          endPoint: '행복이어린이집',
          startTime: '09.00',
          postContent: '행복이 어린이집에서 등원 해드립니다.',
        },
        message: [],
      },
    ],
  },
];

export const dummyPost = [
  {
    postId: 1,
    userId: 1,
    postType: 0, // 0 구인 1 구직
    complement: false, // 마감 유무
    date: '22.11.07',
    content: {
      serviceType: 0, // 0 등원, 1 하원
      postTitle: '등원 구합니다.',
      needCar: false, // false 무관, true 필요
      startingPoint: '경희학성아파트',
      endPoint: '행복이 어린이집',
      startTime: '09.00',
      postContent: '101동 1001호에서 행복이 어린이집 등교해주실분 구해요.',
    },
    message: [
      {
        postId: 1, // 게시글 id
        otherId: 2,
        comment: [
          [
            {
              messageId: 1,
              userId: 2,
              content: '안녕하세요 사람 구하셨나요?',
              date: '',
            },
            {
              messageId: 1,
              userId: 1,
              content: '아니요',
              date: '',
            },
            {
              messageId: 1,
              userId: 2,
              content: '제가 하고 싶어요',
              date: '',
            },
          ],
          [
            {
              messageId: 2,
              userId: 3,
              content: '안녕하세요 사람 구하셨나요?',
              date: '',
            },
            {
              messageId: 2,
              userId: 1,
              content: '아니요',
              date: '',
            },
          ],
        ],
      },
    ],
  },
  {
    postId: 2,
    userId: 2,
    postType: 1, // 0 구인 1 구직
    complement: false, // 마감 유무
    date: '22.11.09',
    content: {
      serviceType: 0, // 0 등원, 1 하원
      postTitle: '등원 해드립니다.',
      needCar: false, // false 무관, true 필요
      startingPoint: '경희학성아파트',
      endPoint: '행복이어린이집',
      startTime: '09.00',
      postContent: '행복이 어린이집에서 등원 해드립니다.',
    },
    message: [
      {
        postId: 2,
        otherId: 1,
        comment: [
          [
            {
              messageId: 1,
              userId: 1,
              content: '안녕하세요 등원 부탁드려도 될까요?',
              date: '',
            },
            {
              messageId: 1,
              userId: 2,
              content: '네!',
              date: '',
            },
            {
              messageId: 1,
              userId: 1,
              content:
                '오전 9시에 경희학성에서 행복이 어린이 집까지 부탁드릴게요!',
              date: '',
            },
          ],
          [
            {
              messageId: 2,
              userId: 3,
              content: '안녕하세요 등원 부탁드려도 될까요?',
              date: '',
            },
            {
              messageId: 2,
              userId: 1,
              content: '죄송합니다. 먼저 부탁해주신분이 있어서요ㅠㅠ',
              date: '',
            },
          ],
        ],
      },
    ],
  },
  {
    postId: 3,
    userId: 3,
    postType: 1, // 0 구인 1 구직
    complement: false, // 마감 유무
    date: '22.11.09',
    content: {
      serviceType: 0, // 0 등원, 1 하원
      postTitle: '등원 해드립니다.',
      needCar: false, // false 무관, true 필요
      startingPoint: '경희학성아파트',
      endPoint: '행복이어린이집',
      startTime: '09.00',
      postContent: '행복이 어린이집에서 등원 해드립니다.',
    },
    message: [],
  },
];
