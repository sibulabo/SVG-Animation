alien = document.querySelector("#alien");               //alien要素取得
alienText = document.querySelector("#alien-text");  //alien-text要素取得

//alien要素の初期設定
gsap.set(alien, {
    strokeDasharray: 5000,
    strokeDashoffset: 5000,
})

//タイムライン生成
const tl = gsap.timeline({
    paused: true    //停止状態でスタート
});

//alien要素の動きを時系列に定義
//(1) alien要素を描画
tl.to(alien, {strokeDashoffset: 0,  duration: 4});

//(2) alien-textを 5px下に下ろしてから alienにぶつける動作
tl.to(alienText,  {y:5, duration:.3}, "<2");
tl.to(alienText,  {y:-18, duration:.1, ease: Elastic.easeOut }, ">");
tl.to(alienText,  {y:0, duration:.1, ease: Elastic.easeOut }, ">");

//(3) alienを左右に6回5px揺らした後元に戻す。
for (let i=0; i<7; i++) {
    tl.to(alien, {
        transformOrigin: "center bottom",
        rotation: (i==6?0:(i % 2 ? 5 : -5)),
        duration: .1,
        ease: Power0.easeNone
    }, ">");
}

//タイムライン再生
tl.play();
