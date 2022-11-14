// 어린이집: 순천향대학교사랑둥지직장어린이집, 행복이어린이집, 아기사랑어린이집
// 아파트: 경희학성아파트, 대주아파트, 친오애아파트

export const dummydata = [
  {
    id: 1,
    userId: 1,
    password: 1234,
    stateComment: 'test post 1',
    parent: {
      name: '이선정',
      nickname: '시후맘',
      job: '프리랜서',
      phoneNumber: '01012345678',
      email: 'test1@gmail.com',
      address: '충청남도 아산시 신창면',
      image: '/',
    },
    children: [
      {
        school: '행복이어린이집',
        age: 5,
        name: '김시후',
        gender: '남자',
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
          endPoint: '행복이어린이집',
          startTime: '09.00',
          postContent: '101동 1001호에서 행복이 어린이집 등교해주실분 구해요.',
        },
        message: [
          {
            postId: 1,
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
    ],
  },
];
