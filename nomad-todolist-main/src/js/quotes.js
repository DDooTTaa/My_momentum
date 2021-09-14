const quotes = [
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: " 삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author: "엘버트 하버드",
    },
    {
        quote: "피할수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },
    {
        quote: "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L.론허바드",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author: "앙드레 말로",
    },
    {
        quote: "행복은 습관이다,그것을 몸에 지니라.",
        author: "허버드",
    },
    {
        quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "톰 모나건",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
        author: "제임스 딘",
    },
    {
        quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        author: "괴테",
    },
    {
        quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
        author: "헬렌 켈러",
    },
    {
        quote: "작은 기회로 부터 종종 위대한 업적이 시작된다.",
        author: "데모스테네스",
    },
    {
        quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author: "헬렌 켈러",
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라.",
        author: "P.시루스",
    },
    {
        quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author: "하버트 개서",
    },
    {
        quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
        author: "탈무드",
    },
    {
        quote: "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라.",
        author: "에픽토테스",
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",
        author: "볼드윈",
    },
    {
        quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
        author: "헨리포드",
    },
    {
        quote: "우리는 두려움의 홍수에 버티기 위해서 끊임없이 용기의 둑을 쌓아야 한다.",
        author: "마틴 루터 킹",
    },
    {
        quote: "당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다.",
        author: "낸시 설리번",
    },
    {
        quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
        author: "발타사르 그라시안",
    },
    {
        quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
        author: "알랭",
    },
    {
        quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author: "베토벤",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    },
    {
        quote: "성공은 친구를 만들고, 역경은 친구를 시험한다.",
        author: "퍼블릴리어스",
    },
    {
        quote: "기회에도 자격이 있는 거다.",
        author: "미생 中",
    },
    {
        quote: "언제나 그랬 듯 세상은 나보다 빠르다.",
        author: "미생 中",
    },
    {
        quote: "순간의 선택이 모여 삶과 인생이 된다.",
        author: "미생 中",
    },
    {
        quote: "인생은 끊임없는 반복, 반복에 지치지 않는 자가 성취한다.",
        author: "미생 中",
    },
    {
        quote: "잊지 말자. 나는 어머니의 자부심이다.",
        author: "미생 中",
    },
    {
        quote: "버텨라 그것이 이기는 거다.",
        author: "미생 中",
    },
    {
        quote: "노력을 이기는 재능은 없고, 노력을 외면하는 결과도 없다.",
        author: "익명",
    },
    {
        quote: "스스로에게 의지하는 것 말고 의지할 곳이란 없다.",
        author: "익명",
    },
    {
        quote: "길을 아는 것과 그 길을 걷는 것은 다르다.",
        author: "익명",
    },
    {
        quote: "남의 불행 위에 내 행복을 쌓지 마라.",
        author: "익명",
    },
    {
        quote: "걷는 게 좋아. 왜냐하면 걷는 게 좋으니까. 좋아하는 것에 이유를 찾지 말자.",
        author: "익명",
    },
    {
        quote: "노력을 이기는 재능은 없고, 노력을 외면하는 결과도 없다.",
        author: "익명",
    },
];

const quote = document.querySelector(".quotes>span:nth-child(1)");
const author = document.querySelector(".quotes>span:nth-child(2)");

function setQuote() {
    const randomNumber = getRandomNumber(quotes.length);
    const cntQuote = quotes[randomNumber];

    quote.innerText = cntQuote.quote;
    author.innerHTML = `${cntQuote.author}`;
}

function init() {
    setQuote();
}

init();
