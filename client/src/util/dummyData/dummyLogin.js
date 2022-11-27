// 어린이집: 순천향대학교사랑둥지직장어린이집, 행복이어린이집, 아기사랑어린이집
// 아파트: 경희학성아파트, 대주아파트, 친오애아파트

export const dummyLogin = () => ({
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
      name: '김시후',
      gender: '남자',
      image: '/',
    },
    {
      childId: 2,
      school: '행복이 어린이집',
      age: 7,
      name: '이소은',
      gender: '여자',
      image: '/',
    },
  ],
});
