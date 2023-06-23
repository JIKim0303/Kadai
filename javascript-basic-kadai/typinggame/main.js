let untyped = '';
let typed = '';
let score = '';

const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap'); 
const start = document.getElementById('start');
const count = document.getElementById('count');

//複数のテキストを格納する
const textLists = [
    'Hello World','This is my App','How are you?',
    'Today is sunny','I love JavaScript!','Good morning',
    'I am Japanese','Let it be','Samurai',
    'Typing Game','Information Technology',
    'I want to be a programmer','What day is today?',
    'I want to build a web app','Nice to meet you',
    'Chrome Firefox Edge Safari','machine learning',
    'Brendan Eich','John Resig','React Vue Angular',
    'Netscape Communications','undefined null NaN',
    'Thank you very much','Google Apple Facebook Amazon',
    'ECMAScript','console.log','for while if switch',
    'var let const','Windows Mac Linux iOS Android',
    'programming'
];

//新しいテキストを表示する時の指示
const createText = () => {
    typed = '';
    typedfield.textContent = typed;
    let random = Math.floor(Math.random() * textLists.length);
    untyped = textLists[random];
    untypedfield.textContent = untyped;
};

const keyPress = e => {
    if(e.key !== untyped.substring(0,1)) {
        wrap.classList.add('mistyped');
        setTimeout(() => {
            wrap.classList.remove('mistyped');
        }, 100);
        return;
    }
    // if(e.key == untyped.substring(0,1)) {
    //     score++;
    // }
    score++;
    typed += untyped.substring(0,1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;
    if(untyped === '') {
        createText();
    }
};


const rankCheck = score => {
    let text ='';
    if(score < 100) {
        text = `あなたのランクはCです\nBランクまであと${100 - score}文字です。`;
    } else if(score < 200) {
        text = `あなたのランクはBです\nAランクまであと${200 - score}文字です。`;
    } else if(score < 300) {
        text = `あなたのランクはAです\nSランクまであと${300 - score}文字です。`;
    } else if(score >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます！`;
    }
    return `${score}文字打てました！\n${score}\n【OK】リトライ / 【キャンセル】終了`;
};

const gameOver = id => { //idを抜いてみた⇒するとid is not defined というエラーが出てカウントダウンも0になったら-1というようにカウントが続いた。
    clearInterval(id);
    const result = confirm(rankCheck(score));
    if(result == true) {
        window.location.reload();
    }
};

const timer = () => {
    let time = count.textContent;
    const id = setInterval(() => {
    time--;
    count.textContent = time;
        if(time <= 0) {
        gameOver(id);
        // rankCheck();  //rankCheckを加えてみた。ここに加えても動作には変化なし
        }
    }, 1000);
    };


start.addEventListener('click', () => {
    timer();
    createText();
    start.style.display = 'none';
    document.addEventListener('keypress', keyPress);
});

untypedfield.textContent = 'スタートボタンで開始';

// const btn4 = document.getElementById('btn4');
// btn4.addEventListener('click', () => {
//     console.log(f);
// });

//イベントオブジェクトのeを勉強するために記述したコード↓
// const btn3 = document.getElementById('btn3');
// btn3.addEventListener('click', kensyou);
// function kensyou(f) {
//     console.log(f);
// }

//substring()メソッドの試験↓
// const text = 'Hello World';
// console.log(text.substring(7));
// ↑7番目のインデックスに該当する文字列はoになる。実行結果はorldとなる。
// console.log(text.substring(0,8));
//終了インデックスも指定した。コンソールに出力された結果が'Hello Wo'になった。終了インデックスに8を指定したが一つ前の7番目のインデックスに該当する文字列までがコンソールに表示された。