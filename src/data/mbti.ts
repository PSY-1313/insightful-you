export type Dimension = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface Question {
  id: number;
  question: string;
  optionA: { label: string; value: Dimension };
  optionB: { label: string; value: Dimension };
}

export const questions: Question[] = [
  // E vs I
  { id: 1, question: "사람들과 북적이는 파티에 다녀오면?", optionA: { label: "에너지가 충전된다", value: "E" }, optionB: { label: "혼자만의 시간이 필요하다", value: "I" } },
  { id: 2, question: "새로운 사람을 만나는 자리가?", optionA: { label: "설레고 즐겁다", value: "E" }, optionB: { label: "조금 부담스럽다", value: "I" } },
  { id: 3, question: "생각을 주로 어떻게 정리하나요?", optionA: { label: "말을 하며 정리한다", value: "E" }, optionB: { label: "속으로 깊이 정리한다", value: "I" } },
  { id: 4, question: "주목받는 위치에 서게 되면?", optionA: { label: "즐기는 편이다", value: "E" }, optionB: { label: "부담스러운 편이다", value: "I" } },
  { id: 5, question: "휴일에는 보통?", optionA: { label: "밖으로 나가서 활동한다", value: "E" }, optionB: { label: "집에서 충전한다", value: "I" } },

  // S vs N
  { id: 6, question: "이야기를 할 때 나는 주로?", optionA: { label: "사실 위주로 말한다", value: "S" }, optionB: { label: "비유와 상상을 섞는다", value: "N" } },
  { id: 7, question: "어떤 일을 시작할 때?", optionA: { label: "기존 방식을 따른다", value: "S" }, optionB: { label: "새로운 방식을 시도한다", value: "N" } },
  { id: 8, question: "나에게 더 중요한 것은?", optionA: { label: "지금 현재의 경험", value: "S" }, optionB: { label: "미래와 가능성", value: "N" } },
  { id: 9, question: "영화나 소설을 볼 때?", optionA: { label: "있는 그대로 즐긴다", value: "S" }, optionB: { label: "이면의 의미를 분석한다", value: "N" } },
  { id: 10, question: "설명을 들을 때?", optionA: { label: "구체적인 예시가 필요하다", value: "S" }, optionB: { label: "전체적인 개념만 알면 된다", value: "N" } },

  // T vs F
  { id: 11, question: "친구가 고민을 털어놓을 때 나는?", optionA: { label: "현실적인 조언부터 한다", value: "T" }, optionB: { label: "충분히 공감부터 해준다", value: "F" } },
  { id: 12, question: "결정을 내릴 때 더 중요한 것은?", optionA: { label: "논리와 원칙", value: "T" }, optionB: { label: "사람 간의 관계와 조화", value: "F" } },
  { id: 13, question: "비판을 받았을 때 나는?", optionA: { label: "내용의 논리성을 따진다", value: "T" }, optionB: { label: "상대에게 서운함을 느낀다", value: "F" } },
  { id: 14, question: "칭찬을 들을 때 더 좋은 것은?", optionA: { label: "능력에 대한 인정", value: "T" }, optionB: { label: "인성에 대한 칭찬", value: "F" } },
  { id: 15, question: "토론을 할 때?", optionA: { label: "진실을 밝히는 게 중요하다", value: "T" }, optionB: { label: "분위기를 해치지 않는 게 중요하다", value: "F" } },

  // J vs P
  { id: 16, question: "약속을 잡을 때 나는?", optionA: { label: "미리 시간과 장소를 정한다", value: "J" }, optionB: { label: "그때 가서 연락한다", value: "P" } },
  { id: 17, question: "마감 기한이 다가오면?", optionA: { label: "여유 있게 미리 끝낸다", value: "J" }, optionB: { label: "벼락치기로 집중한다", value: "P" } },
  { id: 18, question: "여행 가방을 쌀 때?", optionA: { label: "준비물 리스트를 만든다", value: "J" }, optionB: { label: "눈에 보이는 대로 넣는다", value: "P" } },
  { id: 19, question: "주변 환경이 지저분하면?", optionA: { label: "일이 손에 안 잡힌다", value: "J" }, optionB: { label: "딱히 신경 쓰이지 않는다", value: "P" } },
  { id: 20, question: "예상치 못한 변수가 생기면?", optionA: { label: "당황스럽고 스트레스 받는다", value: "J" }, optionB: { label: "그럴 수도 있지 하고 즐긴다", value: "P" } },
];

export interface MbtiInfo {
  type: string;
  nickname: string;
  description: string;
  traits: string[];
}

export const mbtiDescriptions: Record<string, MbtiInfo> = {
  ISTJ: { type: "ISTJ", nickname: "세상의 소금형", description: "한 번 시작한 일은 끝까지 해내는 책임감의 화신. 신중하고 체계적으로 세상을 지탱하는 사람.", traits: ["책임감", "현실적", "체계적"] },
  ISFJ: { type: "ISFJ", nickname: "임금 뒤의 권력형", description: "타인의 감정을 섬세히 살피며 조용히 헌신하는 따뜻한 수호자.", traits: ["헌신적", "섬세함", "따뜻함"] },
  INFJ: { type: "INFJ", nickname: "예언자형", description: "통찰력이 뛰어나며 조용히 영감을 주는 신비로운 이상주의자.", traits: ["통찰력", "이상주의", "공감"] },
  INTJ: { type: "INTJ", nickname: "전략가형", description: "전체적인 판을 읽고 미래를 설계하는 전략적 사고의 소유자.", traits: ["전략적", "독립적", "비전"] },
  ISTP: { type: "ISTP", nickname: "백과사전형", description: "상황 적응력이 뛰어나고 도구와 시스템을 능숙하게 다루는 분석가.", traits: ["분석적", "유연함", "실용적"] },
  ISFP: { type: "ISFP", nickname: "성인군자형", description: "말없이 다정하며 예술적 감각으로 세상을 아름답게 보는 사람.", traits: ["예술적", "온화함", "자유로움"] },
  INFP: { type: "INFP", nickname: "잔다르크형", description: "이상적인 세상을 꿈꾸는 마음 따뜻한 몽상가이자 신념의 소유자.", traits: ["이상주의", "공감", "창의성"] },
  INTP: { type: "INTP", nickname: "아이디어뱅크형", description: "비판적 분석과 끝없는 호기심으로 사유의 미궁을 탐험하는 사상가.", traits: ["논리적", "호기심", "독창성"] },
  ESTP: { type: "ESTP", nickname: "활동가형", description: "정보가 빠르고 스릴을 즐기는 현장의 에너자이저.", traits: ["행동력", "현실감각", "사교적"] },
  ESFP: { type: "ESFP", nickname: "사교가형", description: "분위기 메이커이며 낙천적인 즐거움을 퍼뜨리는 사람.", traits: ["낙천적", "사교적", "감각적"] },
  ENFP: { type: "ENFP", nickname: "스파크형", description: "풍부한 상상력으로 새로운 가능성을 발견해내는 열정적인 영혼.", traits: ["열정적", "창의적", "공감"] },
  ENTP: { type: "ENTP", nickname: "발명가형", description: "지적 도전을 사랑하고 다재다능한 아이디어의 연금술사.", traits: ["창의적", "기민함", "토론가"] },
  ESTJ: { type: "ESTJ", nickname: "사업가형", description: "현실적이고 추진력이 강한 타고난 리더이자 조직의 기둥.", traits: ["리더십", "조직력", "현실적"] },
  ESFJ: { type: "ESFJ", nickname: "친선도모형", description: "동료애가 강하고 친절을 베푸는 따뜻한 협력자.", traits: ["친절함", "협력", "헌신"] },
  ENFJ: { type: "ENFJ", nickname: "언변능숙형", description: "타인의 성장을 돕고 이끄는 카리스마 넘치는 멘토.", traits: ["카리스마", "공감", "리더십"] },
  ENTJ: { type: "ENTJ", nickname: "지도자형", description: "비전을 제시하고 조직적으로 이끄는 타고난 통솔자.", traits: ["비전", "결단력", "통솔력"] },
};
