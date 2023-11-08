const scheduleData = [
  {
    time: '10:00 - 10:10',
    program: '개회사',
    presenter: '한정현 사업단장',
    chair: '김현우 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '10:10 - 10:40',
    program: 'AI Research in the Era of Large Language Models (LLMs)',
    presenter: '윤상두 소장',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '10:40 - 11:00',
    program: '거대언어모델 기반 신약개발 코파일럿',
    presenter: '강재우 교수',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '11:00 - 11:10',
    program: 'Break (전시실 및 아뜨리움)',
    presenter: '',
    chair: '',
    location: ''
  },
  {
    time: '11:10 - 11:40',
    program: 'AI를 통해 만들어가는 더 나은 세상',
    presenter: '임우형 상무',
    chair: '오학주 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '11:40 - 12:00',
    program: 'Multi-modal Foundation Models for Video QA and KGQA',
    presenter: '김현우 교수',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '12:00 - 12:20',
    program: 'Stealing Neural Network Architecture Through SW-Based Side-Channel',
    presenter: '허준범 교수',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '12:20 - 13:30',
    program: '점심 및 포스터 세션 (애기능생활관)',
    presenter: '',
    chair: '',
    location: '애기능생활관'
  },
  {
    time: '13:30 - 13:50',
    program: 'ICT명품인재양성사업단 - 산학협력',
    presenter: '한정현 사업단장',
    chair: '김승룡 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '13:50 - 14:20',
    program: 'SKT A.X LLM',
    presenter: '김지원 부사장',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '14:20 - 14:30',
    program: 'Break (전시실 및 아뜨리움)',
    presenter: '',
    chair: '',
    location: ''
  },
  {
    time: '14:30 - 15:00',
    program: 'AI & Security in Samsung SDS',
    presenter: '조지훈 마스터',
    chair: '정원기 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '15:00 - 15:20',
    program: 'AI-driven Software Analysis',
    presenter: '오학주 교수',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '15:20 - 15:40',
    program: 'Coffee Break 및 포스터 세션 (전시실 및 아뜨리움)',
    presenter: '',
    chair: '',
    location: '전시실 및 아뜨리움'
  },
  {
    time: '15:40 - 16:10',
    program: 'AI in Hanwha Systems',
    presenter: '하윤철 상무 / 김유신 상무',
    chair: '백승준 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '16:10 - 16:30',
    program: 'Recent Advances in Biomedical AI',
    presenter: '정원기 교수',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '16:30 - 16:50',
    program: 'NeRF Under Extreme Conditions',
    presenter: '김승룡 교수',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '16:50 - 17:00',
    program: 'Break (전시실 및 아뜨리움)',
    presenter: '',
    chair: '',
    location: ''
  },
  {
    time: '17:00 - 17:30',
    program: 'A New Era of Generative AI',
    presenter: '노병석 리더',
    chair: '김진규 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '17:30 - 17:50',
    program: 'Let AI Make the Most of Your Data for Dental Healthcare',
    presenter: '백승준 교수',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '17:50 - 18:10',
    program: 'Towards Intelligent, Rational, Safe, Mobile Agents',
    presenter: '김진규 교수',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '18:10 - 18:20',
    program: '포스터/데모 시상 및 폐회사',
    presenter: '한정현 사업단장',
    chair: '',
    location: '강당 (B112호)'
  }
]

export default scheduleData

// 10:00	10:10	개회사	"한정현 사업단장
// (고려대 컴퓨터학과)"	김현우 교수님	강당 (B112호)
// 10:10	10:40	AI Research in the Era of Large Language Models (LLMs)	"윤상두 소장
// (네이버 클라우드)"		강당 (B112호)
// 10:40	11:00	거대언어모델 기반 신약개발 코파일럿	"강재우 교수
// (고려대 컴퓨터학과)"		강당 (B112호)
// 11:00	11:10	Break
// 11:10	11:40	AI를 통해 만들어가는 더 나은 세상	"임우형 상무
// (LG AI Research)"	오학주 교수님	강당 (B112호)
// 11:40	12:00	Multi-modal Foundation Models for Video QA and KGQA	"김현우 교수
// (고려대 컴퓨터학과)"		강당 (B112호)
// 12:00	12:20	"Stealing Neural Network Architecture
// Through SW-Based Side-Channel"	"허준범 교수
// (고려대 컴퓨터학과)"		강당 (B112호)
// 12:20	13:30	점심 및 포스터 세션			애기능생활관
// 13:30	13:50	ICT명품인재양성사업단 - 산학협력	"한정현 사업단장
// (고려대 컴퓨터학과)"	김승룡 교수님	강당 (B112호)
// 13:50	14:20	SKT A.X LLM	"김지원 부사장
// (SKT)"		강당 (B112호)
// 14:20	14:30	Break
// 14:30	15:00	AI & Security in Samsung SDS	"조지훈 마스터
// (삼성SDS)"	정원기 교수님	강당 (B112호)
// 15:00	15:20	AI-driven Software Analysis	"오학주 교수
// (고려대 컴퓨터학과)"		강당 (B112호)
// 15:20	15:40	Coffee Break 및 포스터 세션			전시실 및 아뜨리움
// 15:40	16:10	AI in Hanwha Systems	"하윤철 상무 / 김유신 상무
// (한화시스템)"	백승준 교수님	강당 (B112호)
// 16:10	16:30	Recent Advances in Biomedical AI	"정원기 교수
// (고려대 컴퓨터학과)"		강당 (B112호)
// 16:30	16:50	NeRF Under Extreme Conditions	"김승룡 교수
// (고려대 컴퓨터학과)"		강당 (B112호)
// 16:50	17:00	Break
// 17:00	17:30	A New Era of Generative AI	"노병석 리더
// (카카오브레인)"	김진규 교수님	강당 (B112호)
// 17:30	17:50	Let AI Make the Most of Your Data for Dental Healthcare	"백승준 교수
// (고려대 컴퓨터학과)"		강당 (B112호)
// 17:50	18:10	Towards Intelligent, Rational, Safe, Mobile Agents	"김진규 교수
// (고려대 컴퓨터학과)"		강당 (B112호)
// 18:10	18:20	포스터/데모 시상 및 폐회사	"한정현 사업단장
// (고려대 컴퓨터학과)"		강당 (B112호)
