const quiz = [
  {
    question: "ゲーム史上、最も売れたゲーム機は、次の内どれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  }, {
    question: "ファイナルファンタジーXの主人公は名前は？",
    answers: [
      "スコール",
      "ジタン",
      "ティーダ",
      "ゴルベーザ"
    ],
    correct: "ティーダ"
  }, {
    question: "ペルソナ５に出てくる猫のキャラクターの名前は？",
    answers: [
    "モルガナ",
        "チョッパー",
      "エクスデス",
      "ニャース"
    ],
    correct: "モルガナ"
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button")
const buttonLength = $button.length

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
  buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解！");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + " です！ ");
  }
};

//正解、不正解を表示する
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) =>{
    clickHandler(e);
  });
  handlerIndex++;
};