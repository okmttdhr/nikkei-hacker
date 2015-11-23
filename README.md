# nikkei-hacker

## 概要

nikkei-hacker(日経ハッカー)は、<a href="http://www.nikkei.com/" target="_blank">日本経済新聞電子版</a>有料記事の類似記事を検索し、同じ内容の記事を無料で読むことができるChrome拡張アプリです。

## 使い方

### ①有料記事のページヘゆき、`全文表示`の隣に出現した`無料で読む`ボタンをクリック

![](img/sample3.png)

### ② 記事タイトルを選択し、出現した`類似記事を検索`ボタンをクリック

こちらの機能は、<a href="http://www.nikkei.com/" target="_blank">日経電子版</a>、<a href="https://twitter.com/" target="_blank">Twitter</a>、<a href="https://newspicks.com/" target="_blank">NewsPicks</a>、<a href="http://www.huffingtonpost.jp/" target="_blank">ハフィントンポスト</a>、<a href="http://www.sankei.com/" target="_blank">産経ニュース</a>、<a href="http://www.asahi.com/?iref=com_gnavi_top" target="_blank">朝日新聞デジタル</a>、<a href="http://mainichi.jp/" target="_blank">毎日新聞</a>、<a href="http://www.yomiuri.co.jp/" target="_blank">読売新聞</a>、<a href="http://www3.nhk.or.jp/news/" target="_blank">NHKニュース</a>上のすべてのページに対応しています。

![](img/sample4.png)



## インストール

```bash
git clone https://github.com/okmttdhr/nikkei-hacker.git && cd nikkei-hacker
```

`config/secret.js`に以下の様なファイルを作成してください。`あなたのappid`は<a href="https://e.developer.yahoo.co.jp/register" target="_blank">こちら</a>から発行できます。

```javascript
// config/secret.js

const config = new Map();
config.set('appid',  'あなたのappid');
export default config;
```

作成したら、以下を実行してください。

```bash
npm run build
```

以下の、`ステップ 2: アプリをテストする`に従い、`パッケージ化されていない拡張機能`を読み込んでください。

* <a href="https://support.google.com/chrome/a/answer/2714278?hl=ja" target="_blank">チュートリアル: Chrome アプリを作成する - Chrome for Work ヘルプ</a>



## License

MIT
