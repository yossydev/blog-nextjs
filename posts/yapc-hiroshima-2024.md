---
title: "YAPC:Hiroshimaに参加しました"
emoji: "💪🏻"
description: "YAPC:Hiroshimaに参加した感想ブログです"
date: "2024/02/12"
published: true
---

## YAPC:Hiroshimaに参加しました

YAPCに初参加してきました。小学生ぶりなので、10年ぶりに広島に行きました。
トークセッションだけ見て、「お、行ってよさそう！」と思ってたらなんと「**Yet Another Perl Conference**」ということでびっくりしました。

せっかくなので今回は特に印象に残ったセッションについて書こうと思います。

https://yapcjapan.org/2024hiroshima/

## 2/9

### Hono Meetup

https://connpass.com/event/303918/

HonoはずっとXで見てはいましたが、個人ではプロジェクト作るコマンドだけ叩いてそれ以降特に触れていませんでした。
いろんなHonoユーザーとお話を聞くことで奮い立てるのではと思い、今回参加させていただきました。いろんな用途でHonoが使われているお話を聞くことができました。

個人的に気になっていたこととして、「日本か海外だとどちらで使われるのか」「どの用途で（APIなのかフルスタックで使われているのか）」ということを質問したところ、

- 個人で触っているユーザーは日本人が多いが、実際にプロダクトレベルで使われているのは海外の方が多い
- 海外でも大きな組織ではなく、スタートアップのような新規/小規模で使われている事例が多い
- API開発の用途使われることが多い
- Webサイトでも使われることが多くなっている

ということらしいです。やっぱりAPI開発で使用されることが現状は多いんですね。

ただ実際にやっぱり触ってみないとなーと思い、とりあえず自分のブログをHonoに書き換えるところから始めることにしました。
https://github.com/yossydev/blog/issues/125

タイミングよく、ちょうどこの日に[Hono v4がリリース](https://zenn.dev/yusukebe/articles/b20025ebda310a)されました。

https://zenn.dev/yusukebe/articles/b20025ebda310a

SSGやFile-based Routingなど、Next.jsを使っている方にも馴染みある機能が追加されたみたいなので、ちょうどいいタイミングでした。

あと[@sor4chi](https://twitter.com/sor4chi)くんから色々Honoについても聞けて、

「Honoのコードめちゃくちゃ綺麗なんで全然余裕ですよ😏😏😏」

とのことなので、コード読んで自分もコントリビュートできるところがあればやっていきたいと思いました💪🔥

### 前夜祭

前夜祭にも参加しました。

https://fortee.jp/yapc-hiroshima-2024/proposal/0c8c9df5-8db4-40a9-b3ea-97ea0c823ae7

[zenn](https://zenn.dev/yusukebe/articles/b20025ebda310a)の内容と、

https://github.com/honojs/honox

HonoXのリポジトリがPublicになったことが発表されました。

ここまででわかると通り、初日はほぼCloudflareとHonoについてで埋め尽くされました。ありがとうございました。

## 2/10

YAPC当日。別の大きなイベントに参加して、全てを聞くことは自分の集中力的には無理だということがわかっていたので、個人的に興味のあるセッションを見ました。

- Go to Cloudflare Workers ~ 移行から 0.5 年以上運用する
- My Favorite Protocol: Idempotency-Key Header
- タワレコ店員から20年くらいエンジニアとして働いて学んだこと
- Blogを作り、育み、慈しむ - Blog Hacks 2024

上記4つです。

### Go to Cloudflare Workers ~ 移行から 0.5 年以上運用する

https://speakerdeck.com/codehex/go-to-cloudflare-workers

Cloudflare Workersを実際に運用している話を聞いてみたかったので聞きました。

最後にまとめてくださっている通りですが、ログや計測周りで辛い部分があるそうなので、使うなら自分たちでゴリゴリ作っていくような気力がいるのかなぁという感じということがわかりました。

ただこれも資料にある内容ですが、「開発体験が良すぎてプロジェクトを進めることに集中できていい」とのことなので、ぜひ使ってみたいです。

### My Favorite Protocol: Idempotency-Key Header

https://speakerdeck.com/ohbarye/my-favorite-protocol-idempotency-key-header

あまりこの分野には詳しくないのですが... という感じですが、興味本位で聞いてみました。

決済周りを自分が実装したことはないのですが、

> ネットワークエラーが起きて変なリトライが起きて二重で決済されてしまったりしたらやばいというのはもし自分がそれを受けたら流石に怖い。
> それを防ぐためにHTTPリクエストの安全なリトライを可能にしたい、その鍵に冪等性というものがあり、それを実装レベルで可能にするのがIdempotency-Key Headerというもの。
> Idempotency-Key Headerは、クライアントが生成する一意の値（例えば、UUID）を含む。クライアントは同じ操作を表すリクエストをサーバーに送信する際に、この一意の値をヘッダーに含めるようにする。サーバー側では、このキーを使ってリクエストの重複を検出し、同じリクエストに対しては同じ効果または同じレスポンスを返します。これにより、ネットワークの途中でのリクエストの再送などによる意図しない重複操作を防ぐことができる。
> ただしIdempotency-Key Headerも一つの手段なので、IDにユニーク制約つけたりするなどの他の手段でも済むかもしれないのでそれはプロダクトによって変えよう

みたいな内容だと思っています。もし間違ったらボコボコにしてください。

### タワレコ店員から20年くらいエンジニアとして働いて学んだこと

リアル[@koba04](https://twitter.com/koba04)さんを拝みに行きました。

毎日1時間やるというのが逆に縛りになってしまうという、「習慣化の罠」というが面白かったです。
セッションでもお話されていましたが、自分もやりたい時にガーっとやる方が成長した感じが強い印象でした。

### Blogを作り、育み、慈しむ - Blog Hacks 2024

今年はブログをできる限り書こう（この記事もその一環）と意気込んでいるので、ちょうど良いセッションなので聞きました。

https://junkyard.song.mu/slides/yapc-hiroshima-2024/#0

> 「雑」は良いこと

qiitaやzennだと雑に書くハードル高めな気がしているので、個人ブログはその点いいのではという気がしました。

あとは「個人サイトはデザインされてなさも含めてその人の顔だ。」というのが面白かったです。
自分のブログもめちゃくちゃシンプルな作りになっていると思うので、自分の性格が反映されているような気がしました。

## 2/11

YAYAPCにも参加しました。

https://connpass.com/event/300500/

聞いた内容について書こうと思ったんですが、外部公開OKなものとNGなものの認識が合っているか不安なので書かないことにしました。
一言コメントだけしておくと、リアルな話題が多くて面白かったです。

## まとめ

東京からの参戦だったので少し遠かったですが、とても行ってよかったなと感じました。
セッションの内容ももちろんですが、前夜祭 / YAYAPCなどいい意味で普通のイベントっぽくなかったのが印象的でした。

自分よりも年が上の方が多かったのもあると思いますが、技術についての学びのほかに、1人の社会人としての学びも多かった印象です。
あとはCloudflareとHono関連の方とお話しする機会が多かったのでそこらへんの知識もつきました。

最後に、運営の方々お疲れ様でした。初めての参加でしたが、充実した3日間でした！ありがとうございました！！
また次回も期待しています！！
