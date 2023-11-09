export const LEADER = {
  name: '한정현',
  position: '고려대학교 ICT명품인재 사업단 단장',
  content:
    '2020년에 선정되어 벌써 4년 차의 막바지에 다다른 고려대학교 ICT명품인재양성사업단은 오는 11월 22일(수) 본교 하나스퀘어에서 사업단 1년 성과를 총결산하는 2023 AI Tech Day를 개최합니다. 본 행사에서는 사업단 소속 교수들이 올해 발표한 top-tier conference 논문과 현재 진행 중인 연구를 결합하여 압축 발표하고, 네이버, LG, SKT, 삼성SDS, 한화시스템, 카카오브레인의 AI 연구개발 책임자들이 각 기업의 AI 연구개발 성과와 미래 전략을 발표합니다. 여기에 더불어, 사업단 소속 연구실의 포스터와 데모 세션이 준비되고, 기업체 홍보 및 리쿠르팅 부스도 마련됩니다. AI의 현재와 미래를 보고자 하는 분들의 많은 참석 바랍니다.',
  profile: '/assets/Han.png'
}

export type INVITED_LECTURER = {
  name: string
  position: string
  company: string
  career: string[]
  lectureTitle?: string
  lectureContent: string[]
  profile: string
}
export const INVITED_LECTURER: INVITED_LECTURER[] = [
  {
    name: '윤상두',
    position: '소장',
    company: '네이버 클라우드',
    career: [
      '2010, 2013, 2017: 서울대학교 전기컴퓨터공학부 학사,석사,박사 졸업',
      '2018~2022: 네이버 AI Lab Research Scientist',
      '2022~현재: 서울대학교 AI연구원 겸임 교수',
      ' 2023~현재: 네이버 AI Lab Research Director'
    ],
    lectureTitle: 'AI Research in the Era of Large Language Models (LLMs)',
    lectureContent: [
      "This talk will present the research trends in the era of large-scale AI and Naver AI's research toward them. The main topics of the talk are AI safety (e.g., building datasets for safe AI conversation, detecting AI plagiarism), evaluation of LLMs (e.g., distilling powerful but closed LLMs), and human-computer interaction in LLMs. The talk will benefit those interested in the latest developments in AI research and LLMs."
    ],
    profile: '/assets/yoon.png'
  },
  {
    name: '임우형',
    position: '랩장',
    company: 'LG AI Research',
    career: [
      '2020 ~ 현재 LG AI연구원 상무, Applied AI Research 그룹장',
      '2021 ~ 현재 AI 미래포럼 공동의장',
      '2019 ~ 2020 LG 사이언스파크 연구위원 Data Intelligence Lab장',
      '2013 ~ 2019 SK Telecom 매니저 AI 기술Unit',
      '2007 ~ 2013 삼성전자 책임 무선사업부 Voice Service 개발그룹'
    ],
    lectureTitle: 'AI를 통해 만들어가는 더 나은 세상',
    lectureContent: [
      'AI가 기업현장에서 R&D와 생산공정 고도화에 어떻게 활용되고 있는지 사례를 통해 소개하고, AI가 만들어가는 세상과 앞으로의 발전 방향에 대해 제시하고자 함. AI가 만들어가는 세상과 앞으로의 발전 방향에 대해 제시하고자 함'
    ],
    profile: '/assets/lim.jpeg'
  },

  {
    name: '김지원',
    position: '부사장',
    company: 'SKT',
    career: [
      '2020 대통령 직속 국가과학기술자문회의 자문위원',
      '2000 국제정보올림피아드 최연소 금메달',
      '2007~2016 삼성전자 종합기술원 전문연구원',
      '2016 SK텔레콤',
      '2016 T-Brain 장'
    ],
    lectureTitle: 'SKT A.X LLM',
    lectureContent: [
      '- 기존 텔레콤 서비스와 초거대 언어 모델(LLM) 기술 및 이미지 생성 기술들의 융·복합 서비스 소개',
      '- AI에서 AGI로 인간 넘어서는 인공지능 소개'
    ],
    profile: '/assets/kim.png'
  },
  {
    name: '조지훈',
    position: '마스터',
    company: '삼성 SDS',
    career: [
      '現 삼성SDS 연구소 보안연구팀 팀장 (상무)',
      'Royal Holloway, University of London, 정보보안 (박사)',
      'University of Waterloo, 암호학 (석사)'
    ],
    lectureTitle: 'AI & Security in Samsung SDS',
    lectureContent: [
      'SDS 연구소에서 수행하고 있는 AI, Security 분야 연구 분야 및 성과를 소개',
      'SDS 연구소 보안연구팀에서 수행하고 있는 연구분야 소개',
      '- Post Quantum Crypto 원천기술, 전환기술 및 협업프로젝트 (미국 NIST NCCoE)',
      '- PETs (Privacy-Enhancing Technologies) 및 협업프로젝트 (UN)',
      '- SBST (Search-based SW Testing) 분야 연구개발.'
    ],
    profile: '/assets/master.png'
  },
  {
    name: '노병석',
    position: '리더',
    company: '카카오브레인',
    career: [
      '한국전자통신연구원(ETRI) Researcher (07~15)',
      'Intel Korea 이사, Technical Leader (15~20)',
      '카카오브레인 AI-CAD, Multi-modal Understanding Team Leader (20~)'
    ],
    lectureTitle: 'A New Era of Generative AI',
    lectureContent: [
      '     This presentation will outline the paradigm shift from the labor-intensive labeling methods prevalent in traditional AI to the data-driven approach of generative AI technologies utilizing large-scale datasets. Additionally, it will provide an overview of the diverse generative AI technologies presently being developed at KakaoBrain.'
    ],
    profile: '/assets/lo.png'
  },
  {
    name: '하윤철',
    position: '상무',
    company: '한화시스템',
    career: ['2022-현재 한화시스템 기반기술연구소장', '2015-2022 한화시스템 팀장 (해양연구소 SW팀)'],
    lectureTitle: '국방 인공지능 동향과 사례',
    lectureContent: [
      '- 국내/외 국방 인공지능 연구 개발 동향 및 사례',
      '- 무기 체계 별 단계별 인공지능의 적용 및 발전 방향'
    ],
    profile: '/assets/kim_yoo.png'
  },
  {
    name: '김유신',
    position: '상무',
    company: '한화시스템',
    career: [
      '2022-현재 한화시스템 상무 (Data eXcellence 담당)',
      '2020-2022 한화시스템 상무 (미래혁신센터)',
      '2007-2020 SK텔레콤 부장 (AI 센터)'
    ],
    lectureTitle: 'AI&Data in Hanwha Systems',
    lectureContent: ['TBD'],
    profile: '/assets/shin.png'
  }
]
