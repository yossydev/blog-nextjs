---
title: "ハックバーのモバイルオーダーで、GitHub みたいな草を生やしました。"
emoji: "🌱"
date: "2022/10/12"
published: true
---

## ハックバーのモバイルオーダーで、GitHub みたいな草を生やしました。

https://twitter.com/EngineerBarKobe/status/1579048362464378881?s=20&t=5Cyygaa0ld0Jxc0E50gpKQ

## ハックバーとは？？💭

神戸三宮駅から徒歩 5 分。「エンジニアが集まるバー」としてオープン。

JavaScript や PHP、Ruby などの言語カクテルがあったり、色々なエンジニアとお話しできたりする場所です！！🤩🤩

https://twitter.com/HackBarKobe

ちなみに自分もよく行ってます！お気に入りのカクテルは PHP です 😏

## 実装手順

段階を踏んでやっていきました。UI の部分は毎回井出さんがやってくれてるので、そこは端折ります。

1. 注文データを、Firestore から引っ張ってくる
2. timestamp を変換するメソッドを作る
   - year/month/day にするメソッド
   - 2022/8/12 ~ 現在までの、指定した曜日の日付を取得するメソッド
3. 2 で作ったメソッドを使って、ハックバーのオープン日である金曜日と土曜日だけの配列を作成
4. ハックバーに来店したかどうかの boolean メソッドを作成
5. 実際に画面に表示

という 5 つの手順を踏んで、実装を行なっていきました。

## 実装方法

### 1 注文データを、Firestore から引っ張ってくる

ここで注文した日がわかるので、Firestore からデータを取得し、その timestamp を変換します。

この日付をもとに、草を生やします。

### 2 timestamp を変換するメソッドを作る

日付をフォーマットするメソッド自体には苦戦しませんでしたが、2022/8/12 ~ 現在までの、指定した曜日の日付を取得するメソッドにはかなり時間がかかりました。

やり方的には、

`Array.from`と `map` を使って、メソッドの引数に `month` の `index` と、`map` の `index` を day に足すようにして、それら二つが一致したメソッドを返すというようにしました。
filter を使って、その date が現在の dateTime よりも小さいものを返すように。

```ts
.map((\_, i) => {
const date = new Date(year, month, 12 + i)
const weekday = weekdayNum
return date.getDay() === weekday ? date : null
})
.filter((date) => {
if (date == null) return
return date.getTime() < new Date().getTime()
})
```

開発していると割と悩んだんのですが、実際には案外シンプルというか、言語化までちゃんとするとそこまで難しくなかったなと思っています。

### 3 2 で作ったメソッドを使って、ハックバーのオープン日である金曜日と土曜日だけの配列を作成

2 で作った金曜日と土曜日の配列を、お互いにマージします。

ただそのままマージしてしまうと日付がずれてしまうので、

1. sort メソッドを使って、要素の並び替えを行う
2. 日付の変換メソッドを使って、正しい日付に戻す

といった実装を行いました。

### 4 ハックバーに来店したかどうかの boolean メソッドを作成

ここまででハックバーの開店日している日を配列として取得できたので、最後に自分が来店した日を判定する boolean メソッドを作成します。

index 番目のハックバー来店日を取得し、その値が最初に Firestore から持ってきたデータの中にあれば、草を生やすという感じです！

### 5 実際に画面に表示

最後にここまでの内容を画面に表示させれば、いい感じに草が生えるようになります。

以上が今回の草を生やした実装の内容になります。

## 振り返り

途中でも話したとおり、言語化してみればそこまで実装的に難しい内容ではなかったですが、開発している時は「難しいーーーー 😭」ってなりながら開発をやってました。

ただ、配列操作と日付操作のところがすごく JavaScript を書いてるという感じで、難しかったですが、とても開発していて楽しかったです 😎
