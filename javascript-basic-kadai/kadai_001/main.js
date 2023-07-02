let untyped ='';
let typed = '';
let typingno = 0;

const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
//以下のcountはタイマーのスタート値60のp要素を示している。
const count = document.getElementById('count');
const start = document.getElementById('start');
const nooftype = document.getElementById('nooftype');

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

const timer = () => {
    let time = count.textContent;
    const id = setInterval(() => {
    time--;
    count.textContent = time;
        if(time <= 0) {
        gameOver(id);
        }
    }, 1000);
    };

    untypedfield.textContent = 'クリックでスタート！';

//スタートを押したらテキストリストが表示され、タイマーが作動するという指示を書く
start.addEventListener('click', () => {
    timer();
    start.style.display = 'none';
    createText();
    document.addEventListener('keypress', keyPress);
});

const createText = () => {
    typed = '';
    typedfield.textContent = typed;
    let random = Math.floor(Math.random() * textLists.length);
    untyped = textLists[random];
    untypedfield.textContent = untyped;
};

const keyPress = e => {
    if(e.key !== untyped.substring(0, 1)) {
    wrap.classList.add('mistyped');
        setTimeout( () => {
            wrap.classList.remove('mistyped')
        }, 100);
    }
    if(e.key == untyped.substring(0, 1)){
    typingno++;
    nooftype.textContent = typingno;
    typed = typed + untyped.substring(0, 1);
    typedfield.textContent = typed;
    untyped = untyped.substring(1);
    untypedfield.textContent = untyped;
    }
    if(untyped === '') {
        createText();
    }
};


const result = () => {
    let text = '';
    if(typingno < 100) {
        text = `あなたのランクはCです。\nBランクまであと${100 - typingno}です。`;
    } else if(typingno < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - typingno}です。`;
    } else if(typingno < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - typingno}です。`;
    } else if(typingno >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます！`
    }
    return `${typingno}文字打てました！\n画面リフレッシュでリトライ！`;
};

const gameOver = (id) => { 
    clearInterval(id);
    confirm(result());
    untyped = 'タイムアップ！';
    untypedfield.text = untyped;
};