---
title: "読書メモ: Webを支える技術"
emoji: "📖"
date: "2023/05/08"
published: true
---

## 感想

前に一度読んでいたんですけど、その際は正直適当に流して読んでしまっていた「Web を支える技術」を再度読みました。
実務での経験値もあり、以前よりも「勉強になった」と思う部分が多かったと感じました。

特に URI と HTTP の部分は、今だとフレームワークがいい感じにやってくれたりしてるのでそこまで考えなくてもいい部分だと思いますが、細かく見るとそうなっているのかと思い読んでいて面白かったです。

個人的には完璧に深い知識を知りたいと言うよりも、フロントエンドエンジニアとして Web についての基本的な知識はあった方が良いと思い、基礎的な部分を中心にメモを取りました。

## 本書

https://www.amazon.co.jp/Web%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93-HTTP%E3%80%81URI%E3%80%81HTML%E3%80%81%E3%81%9D%E3%81%97%E3%81%A6REST-WEB-PRESS-plus/dp/4774142042

## Web とは何か

### すべての基盤である Web

- 現在のコンピューターにとって、最も大切なソフトウェアは何か

  - 10 年前だったら、ワードプロセッサや基幹業務のソフトウェアだった
  - 現在で最も重要なのは Web を閲覧するソフトウェア、**ブラウザ**

    - ブラウザを通して、さまざまな用途にコンピュータを使用する

      - 天気予報
      - ニュース
      - 商品の購入
      - 写真管理
      - 地図
      - 電車の乗り換え
      - 動画閲覧

      …etc

    - これらすべては、ブラウザを通してインターネットの向こう側にある Web サーバーとやりとりしながら実現している

### さまざまな Web の用途

- Web サイト
- ユーザーインターフェースとしての Web
  - 各種デバイスの設定画面など
- プログラム用 API としての Web
  - Web サービスとも言われたりする

### Web を支える技術

- **HTTP、URI、HTML**

  - URI を使えば、世界中のあらゆる情報を指し示せる
  - HTML はそれらの情報を表現する文書フォーマット
  - そして HTTP というプロトコルを使って、それらの情報を取得したり発注したりできる

- これら三つはシンプルな技術

  - HTTP1.1 が定義しているメソッドは 8 つだけ
  - URI は紙の広告に記載できるくらい短い文字列
    - 技術評論社の Web サイトは`http://gihyo.jp`
  - HTML は XML を基にした汎用の文書フォーマット

- HTTP、URI、HTML に支えられた Web は、情報システムとして見るとハイパーメディアシステムと分散システムの二つの側面を持っている

### ハイパーメディア

- ハイパーメディアとは、文書だけでなく音声、動画、画像などのメディアを組み合わせた情報のことを指す
- HTML によって構成された Web ページがハイパーメディアの代表例と言える
- ハイパーメディアは、リンクをたどることで関連情報にアクセスすることができるため、情報の探索や理解が容易になる
- また、Web 上の異なる情報を自由自在に組み合わせることができるため、ユーザーによる情報の自由な検索や整理が可能になる

### 分散システム

- 分散システムとは、複数のコンピューターがネットワークを介して相互に通信しながら一つのシステムとして動作する仕組み
- Web は分散システムの代表例
  - ブラウザと Web サーバーは別のコンピューター上で動作している
  - ブラウザが Web サーバーにリクエストを送信し、Web サーバーがレスポンスを返す
  - Web サーバーは、必要に応じて別の Web サーバーにリクエストを転送することもある
- 分散システムにおいては、各コンピューターが協調して動作する必要がある
  - 信頼性や可用性の向上、負荷分散などのために、分散システムではさまざまな技術が使われる
  - Web 分野においては、ロードバランサーや CDN などが使われる
- **ハイパーメディア**とはテキストや画像、音声、映像などさまざまなメディアをハイパーリンクで呼びつけて構成してシステム
- ハイパーメディア以前のメディア、例えば書籍や映画は線形的に先頭から順に視聴したりするのに対し、ハイパーメディアは非線形的にユーザーが自分

## REST Web のアーキテクチャスタイル

### アーキテクチャスタイルの重要性

- REST は Web のアーキテクチャスタイル
- アーキテクチャスタイルの他の例
  - MVC: Model-View-Controller
  - パイプ&フィルタ: Pipe and Filter
  - イベントシステム: Event System

### アーキテクチャスタイルとしての REST

- REST は数あるアーキテクチャスタイルの中でも、特にネットワークシステムのアーキテクチャ
- ネットワークシステムのアーキテクチャスタイルとして最も有名なのはクライアント/サーバ
- そして Web はクライアント/サーバでもある
- Web のアーキテクチャスタイルは REST でもありクライアント/サーバでもあるとは一体どういうことか
  - REST はクライアント/サーバから派生したアーキテクチャスタイル
  - 素のクライアント/サーバアーキテクチャスタイルにいくつか制約を加えていくと、REST というアーキテクチャスタイルになる
- 制約はアーキテクチャスタイルにおいて重要な概念
  - 個別の Web サービスが全体の調和を見出しては、全体が統一したアーキテクチャを守れないため

### リソース

- REST における重要な概念の一つに、リソースがある
  - リソースの例
    - 東京の天気予報
    - 技術評論社の『Web を支える技術』のページ
    - 新花巻駅の写真
    - Dihkstra 著の論文「Go To Statement Considered Harmful」
    - 筆者の最近のブックマーク
  - これらはいずれもリソース
- リソースとは「Web 上に存在する、名前を持ったアリとあらゆる情報」のこと

**リソースとしての URI**

- リソースの名前とは URI のこと
  - **リソースとは、Web 上の情報である**
  - **世界中の無数のリソースは、それぞれ URI で一意の名前を持つ**
  - **URI を用いることで、プログラムはリソースが表現する情報にアクセスできる**

**リソースのアドレス可能性**

- Web と URL の発明以前

  ```markdown
  From: yohei@example.com
  To: inao@example.com
  Subject: Sample FIle

  お疲れ様です。
  先日聞かれた例のファイルを ftp.example.jp に置きました。
  ディレクトリは/public/data で、ファイル名は sample_file.gz です。
  このサーバーは anonymous FTP なので、匿名ユーザーでログインしてください
  ```

- Web と URL の発明以降
  - URI がある現在では、特定のファイルの取得方法を詳しく自然言語で説明する必要はない
  - `htp://example.jp/public/data/sample_file.gz` という URI を一行書いてアクセスするだけで良い
- URI が備える、リソースを簡単に指し示せる性質のことを「アドレス可能性」と呼ぶ
- リソースをアドレス可能な状態、すなわちきちんと名前がついていて、適切な手段でアクセスできる状態にするとプログラムを作りやすくなる

3. **リソースの表現と状態**
   - リソースは「Web 上に存在する情報」という抽象的な表現
   - サーバーとクライアントの間で実際にリソースをやりとりする時には、何らかの具体的なデータを送信し合う
   - サーバーとクライアントの間でやりとりするデータのことを「リソースの表現」と呼ぶ
   - 一つのリソースは複数の表現を持てる
     - リリースの複数の表現に個別の URI を与えてもいい
     - HTTP の仕組みを使えば一つの URI で複数の表現を返すこともできる
   - リソースには状態がある
     - 時間の経過に従ってリソースの状態が変化すると、その表現も変化する

### スタイルを組み合わせて REST を構成する

**クライアント/サーバ**

- Web は、HTTP というプロトコルでクライアントとサーバが通信するクライアント/サーバのアーキテクチャスタイルを採用している
- クライアントはサーバにリクエストを送り、サーバはそれに対してレスポンスを返す

- 利点は、単一のコンピュータ上ですべてを処理するのではなく、クライアントとサーバに分離して処理できること
  - これにより、クライアントをマルチプラットホームにできるため、Web だけでなく、PC やゲーム機からもアクセスできる
- ユーザーインタフェースはクライアントが担当することで、サーバはデータストレージとしての機能だけを提供すればよくなる
  - さらに、複数のサーバを組み合わせて冗長化することで、可用性を上げられる

**ステートレスサーバ**

- クライアント/サーバに最初に追加するアーキテクチャスタイルはステートレスサーバ
  - ここでのステートレスとは、クライアントのアプリケーション状態をサーバで管理しないことを意味する
- サーバがアプリケーション状態を持たないことに利点は、サーバ側の実装を簡略化できること
  - 簡略な実装のサーバは、クライアントからのリクエストに答えた後すぐにサーバの計算機リソースを解放できる
  - しかし、現実にはステートレスでない Web サービスや Web API が多々ある
  - HTTP をステートレスにする代表格は Cookie を使ったセッション管理
  - REST の視点から見ると、Cookie を使ったセッション管理は、間違った HTTP の拡張
  - しかし、REST 的に間違えているからと言って、Cookie を使ったフォーム認証をやめるわけにはいかないことも事実
  - Cookie はステートレスサーバの利点をあえて捨てることを理解した上で、必要最低限活用する
- クライアント/サーバにステートレス性を導入すると、アーキテクチャスタイルは「**クライアント/ステートレスサーバ**」になる

https://qiita.com/mtakehara21/items/efcbbc3ba58a62c10eb6

**キャッシュ**

- キャッシュとは、リソースの鮮度に基づいて、一度取得したリソースをクライアント側で使い回す方式
- キャッシュの利点は、サーバとクライアントの間の通信を減らすことで、ネットワークの帯域の利用や処理時間を縮小し、より効率的に処理できること
  - ただし、古いキャッシュを利用してしまい、情報の信頼性が下がる可能性もある
- キャッシュを追加したアーキテクチャスタイルは、「クライアント/キャッシュ/ステートレス」と呼ぶ

**統一インターフェース**

- 統一インターフェースとは、URI で指し示したリソースに対する操作を、統一した限定的なインターフェースで行うアーキテクチャのこと
- 例えば、HTTP1.1 では、GET や POST など 8 個のメソッドだけが定義されており、これ以上はメソッドが増えない
- メソッドが 8 個に限定されていて拡張できないのは、一般的なプログラミング言語の感覚から考えてとても厳しい制約のように感じるが、
  インターフェースの柔軟性に制限を加えることで、全体のアーキテクチャがシンプルになる
- また、インターフェースを統一することでクライアントとサーバの実装の独立性が向上する
- 統一インターフェースは、REST を最も特徴づけるアーキテクチャスタイル
- 統一インターフェースを追加したアーキテクチャスタイルを「統一/クライアント/キャッシュ/ステートレスサーバ」と呼ぶ

**階層化システム**

- 統一インターフェースの利点の一つに、システム全体が階層化しやすいことがある
- 例えば Web サービスでは、サーバとクライアントの間にロードバランサを設置して負荷分散をしたり、プロキシを設置してアクセス肢を制限したりする
- クライアントからするとサーバもプロキシも同じインターフェースで接続できるので、接続先がプロキシに変わったことを意識する必要はない
  - これは、サーバやプロキシなどの各コンポーネント間のインターフェースを HTTP で統一してるから実現できている
- 基幹のレガシーシステムなど HTTP のインターフェースを実装していないシステムでも、レガシーシステムの前に Web アプリケーションサーバを挟んで HTTP のインターフェースを持たせることで、ブラウザなどのクライアントと接続できるようになる
- システムをいくつかの階層に分離するアーキテクチャスタイルのことを階層化システムという
- 階層化システムを追加したアーキテクチャスタイルを「統一/階層化/クライアント/キャッシュ/ステートレスサーバ」と呼ぶ

**コードオンデマンド**

- コードオンデマンドは、プログラムコードをサーバからダウンロードし、クライアント側でそれを実行するアーキテクチャスタイル
  - JavaScript や Flash、Java アプレットなどがこれに該当する
- コードオンデマンドの利点は、クライアントを後から拡張できること
- クライアントプログラムにあらかじめ用意した機能だけでなく、新しい機能を追加していける
- JavaScript や Flash をふんだんに使った派手な Web サービスはコードオンデマンドの恩恵を受けている
- ただし欠点もある
  - それは、ネットワーク通信におけるプロトコルの視認性が低下すること
  - HTTP というアプリケーションプロトコルに従って通信している間は、通信の意味やアクセスするリソースが明白
  - しかしコードオンデマンドでプログラムをダウンロードし、クライアント側で実行してしまうと、アプリケーションプロトコルの可視性は低下する
- コードオンデマンドを追加したアーキテクチャスタイルを「統一/階層化/コードオンデマンド/クライアント/キャッシュ/ステートレスサーバ」と呼ぶ

**REST =** **ULCODC$SSS**

- クライアント/サーバにコードオンデマンドまでを追加複合アーキテクチャスタイルは「**ULCODC$SSS**」という覚えにくい名前
- このアーキテクチャスタイルに、Fielding は**REST**と名前をつけた
- REST とはつまり、次の 6 つを組み合わせたアーキテクチャスタイルのこと
  1.  クライアント/サーバ: ユーザインタフェースと処理を分離する
  2.  ステートレスサーバ: サーバ側でアプリケーション状態を持たない
  3.  キャッシュ: クライアントとサーバの通信回数と両方を減らす
  4.  統一インターフェース: インタフェースを固定する
  5.  階層化システム: システムを階層に分離する
  6.  コードオンデマンド: プログラムをクライアントにダウンロードして実行する
- REST はアーキテクチャスタイルなので、実際にシステムを設計する際はそのシステムのアーキテクチャを作らなければならない
- REST に基づいたアーキテクチャを構築する場合でも、REST を構成するスタイルのうち、いくつかを除外しても良い
  - 例えば、ステートフルではあるけど、そのほかは REST の制約に従っているアーキテクチャも考えられる
- これはまさに設計作業
- ソフトウェアやシステムの設計ではアーキテクチャスタイルの理想から妥協しなければならないところも出てくる
  理想を念頭におきながら、実際に操作して価値を提供できるシステムを作ることが重要
- 最も、ほとんどの REST スタイルを除外しなければならない場合などは、無理やり REST を採用する必要はない
  - そのようなシステムには、より適した別のアーキテクチャスタイルがあるはずだから

## URI

### URI の重要性

- URL は、Uniform Resource Idetifier の略
  - 直訳すると、「統一リソース識別子」
- つまり URI とは「リソースを統一的に識別する ID」のこと
- 識別子とは全てが同じルールに従っているということで、識別子とはあるものを他のものと区別して指し示すための名前/ID のこと
- URI を使うと Web 上に存在する全てのリソースを一意に示せる
- つまり URI さえあれば、全てのリソースに簡単にアクセスできる。

### URI の構文

**簡単な URI の例**

- `http://blog.example.jp/entries/1`
  - URI スキーム: http
    - URI は URI スキームで始まる
      - URI スキームは、その URI が利用するプロトコルを示すのが一般的
      - 今回の場合は、HTTP でアクセスできることを示している
  - ホスト名: blog.example.jp
    - ホスト名は DNS(Domain Name System)で名前が解決できるドメイン名か IP アドレスで、インターネット上で必ず一意になる
  - パス: /entries/1
    - ホスト名の後には階層を表すパス
    - パスは、そのホストの中でリソースを一意に表す
- インターネット上で一位になるホスト名の仕組みと、ホスト内で必ず一意になる階層的なパスを組み合わせることで、あるリソースの URI が世界中の他のリソースの URI と絶対に重複しないようになっている

**複雑な URI の例**

- `http://yohei:pass@blog.example.jp:8000/search?q=test&debug=true#n10`
  - URI スキーム: http
  - ユーザー情報: yohei:pass
    - ユーザー情報は、このリソースにアクセスする際に利用するユーザー名とパスワードから成る
    - ユーザー名とパスワードは「 : 」で区切る
    - ユーザー情報の次に区切り文字である「@」があり、その後ろにホスト情報が続く
  - ホスト名: blog.example.jp
    - ホスト情報はホスト名とポート番号から成り、両者は「:」で区切られる
  - ポート番号: 8000
    - ポート番号は、このホストに悪せうするときのプロトコルで用いる TCP のポート番号を示す
    - HTTP のデフォルト番号は 80
  - パス: search
  - クエリパラメータ: q=test&debug=true
    - パスの後に「?」がつき、名前=値形式のクエリが続く
    - この例では q=test と debug=true がそれぞれクエリ
    - クエリが複数あるときは「&」で連結する
    - この一つ以上のクエリの集合体を、「クエリパラメータ」または「クエリ文字列」と呼ぶ
    - クエリパラメータは、絵 k ん作サービスや検索キーワードを渡す時など、クライアントから URI を生成する時に利用する
  - URI フラグメント: #n10
    - 「#」で始まる文字列は「URI フラグメント」と言う
    - URI フラグメントは、その前までの文字列で表現する URI が指し示すリソース内部の、さらに細かい部分を特定する時に利用する
    - 例えば、このリソースが HTML 文書だった場合は、id 属性の値が「n10」である要素を示すことになる

## HTTP

- HTTP は TCP/IP をベースにしたプロトコル
  - TCP(Transmission Control Protocol)
  - IP (Internet Protocol)

### 階層型プロトコル

- インターネットのネットワークプロトコルは階層型になっている
- 層ごとに抽象化して実装すれば、物理的なケーブルがメタルなのか光なのかといった下位層の具体的なことに左右されることなく、上位層を実装できる
  1. **ネットワークインターフェース層**
     - 物理的なケーブルやネットワークアダプタに相当する層
  2. **インターネット層**
     - ネットワークインターフェースの上にインターネット層がある
     - この層では、ネットワークでデータを実際にやりとりする部分
     - TCP/IP では IP が相当する
       - IP ではデータの基本的な通信単位を「パケット」と呼ぶ
       - 指定した IP アドレスを送り先としてパケット単位で通信する
       - IP では、自分のネットワークインターフェースでデータを送り出すことだけを保証している
       - 送り出したデータが、多数のルータを経由して最終的な送り先まで届くかどうかは保証しない
  - **トランスポート層**
    - インターネット層の上にトランスポート層がある
    - IP が保証しなかったデータの転送を保証するのが役割
    - TCP/IP では TCP が担当する
      - TCP で接続したコネクションで転送するデータがどのアプリケーションに渡るか決定するのがポート番号
      - ポート番号は 1 ~ 65535 の数値
      - サーバ側のよく使われるポート番号にはデフォルト番号が割り当てられている
        - HTTP はデフォルトで 80 番ポートを使用する
  - **アプリケーション層**
    - トランスポート層の上にアプリケーション層がある
    - アプリケーション層は、具体的なインターネットアプリケーション、、例えばメールや DNS、HTTP を実現する層
    - TCP でプログラムを作るときは、ソケットと呼ばれるライブラリを使うのが一般的
      - ソケットはネットワーク間でのデータのやり取りを抽象化した API
      - 接続、送信、受信、切断などの基本的な機能を備えている
      - HTTP サーバやブラウザはソケットを用いて実装する
    - ほとんどのプログラミング言語には HTTP を実装したライブラリが標準でついているため、ソケットを使って HTTP を独自に実装することはほとんどない
    - ただ、Web サービスや Web API を開発するにあたっては、フレームワークの細かな挙動や設定、パラメータなどがプロトコルレベルでどのように動作するかを把握しておく必要がある

### リクエストとレスポンス

- サーバでの処理に時間がかかる場合でも、リクエストを出したクライアントはレスポンスが返るまで待機する
  - これは HTTP が同期型のプロトコルであるため

### クライアントで行われること

- 一つのリクエストを送信し、レスポンスを受信する際に次のことを行う
  1. リクエストメッセージの構築
  2. リクエストメッセージの送信
  3. (レスポンスが返るまで待機)
  4. レスポンスメッセージの解析
  5. クライアントの目的を達成するために必要な処理

### サーバで行われること

- クライアントからリクエストを受けたサーバは次のことを行う
  1. (リクエストの待機)
  2. リクエストメッセージの受信
  3. リクエストメッセージの解析
  4. 適切なアプリケーションプログラムへの処理の委譲
  5. アプリケーションプログラムから結果を取得
  6. レスポンスメッセージの構築
  7. レスポンスメッセージの送信