



### Raku - クラスレスCSSフレームワーク 仕様書

#### 概要
Rakuはシンプルで直感的なクラスレスCSSフレームワークです。ダークモードを基調とし、モダンなデザインを提供します。基本的なレイアウト、タイポグラフィ、フォーム、ボタン、カード、アラートなどのUIコンポーネントをサポートします。

#### カラー
- 背景色: #2c3e50
- 前景色: #ecf0f1
- プライマリカラー: #3498db
- セカンダリカラー: #2ecc71
- エラーカラー: #e74c3c
- 警告カラー: #f39c12
- 情報カラー: #8e44ad
- 境界色: #34495e

#### タイポグラフィ
- フォントファミリー: 'Arial', sans-serif
- 行間: 1.6

#### レイアウト
- コンテナ: 最大幅 1200px、中央寄せ
- マージン: 1rem
- パディング: 1rem
- ボーダー半径: 0.5rem

#### コンポーネント

##### 見出し
- `h1` から `h6` までの標準的な見出しスタイル

##### 段落
- 標準的な段落スタイル

##### リンク
- デフォルトのリンクスタイル: テキストはプライマリカラーで、ホバー時に下線表示

##### ボタン
- デフォルトのボタンスタイル: プライマリカラーの背景、前景色のテキスト、ボーダーなし、ボーダー半径
- ホバー時にセカンダリカラーに変更

##### フォーム
- `input` と `textarea`: 背景色、前景色、1pxの境界、ボーダー半径、フォーカス時にプライマリカラーの境界

##### カード
- 背景色: #34495e
- ボーダー半径、パディング、マージン、ボックスシャドウ

##### アラート
- プライマリ、セカンダリ、エラー、警告、情報の各種アラート
- 背景色、前景色、ボーダー半径、パディング、マージン

#### 追加機能

##### グリッドレイアウトシステム
- 12カラムのグリッドシステム
- レスポンシブデザイン対応

##### ナビゲーションバー
- 固定/スクロール対応
- ドロップダウンメニュー対応

##### モーダルダイアログ
- ダイアログの表示/非表示の制御
- オーバーレイのカスタマイズ

##### ツールチップ
- ホバー時の表示
- カスタマイズ可能な位置とデザイン

##### ドロップダウンメニュー
- シンプルなドロップダウン
- 多階層のドロップダウン対応

##### テーブルスタイル
- ストライプ付きテーブル
- ホバー時の行ハイライト
- レスポンシブデザイン対応

#### 改善点

##### アクセシビリティの向上
- キーボード操作のサポート
- ARIA属性の追加

##### テーマカスタマイズ
- ユーザーが独自のテーマを作成できるようにする
- ダークモードとライトモードの切り替え

##### ユーティリティクラスの追加
- スペーシング、テキストアラインメント、表示/非表示などのユーティリティクラス

##### アニメーション
- トランジションやアニメーションの簡単な設定
- CSSアニメーションのプリセット

##### アイコンセットの統合
- フォントアイコンのサポート（例: Font Awesome）

#### 使用方法
HTMLに以下のようにリンクして使用します。

## HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Raku - クラスレスCSSフレームワーク</title>
  <link rel="stylesheet" href="dist/bundle.js">
</head>
<body>
  <header>
    <h1>ようこそ</h1>
    <p>これはRakuクラスレスCSSフレームワークの例です。</p>
  </header>
  <main>
    <section>
      <h2>セクションタイトル</h2>
      <p>セクションの内容です。</p>
      <a href="#">リンク</a>
      <button>ボタン</button>
      <input type="text" placeholder="テキスト入力">
    </section>
    <aside>
      <div alert-type="primary">プライマリアラート</div>
      <div alert-type="secondary">セカンダリアラート</div>
      <div alert-type="error">エラーアラート</div>
      <div alert-type="warning">警告アラート</div>
      <div alert-type="info">情報アラート</div>
    </aside>
    <table>
      <thead>
        <tr>
          <th>ヘッダー1</th>
          <th>ヘッダー2</th>
          <th>ヘッダー3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>データ1</td>
          <td>データ2</td>
          <td>データ3</td>
        </tr>
        <tr>
          <td>データ4</td>
          <td>データ5</td>
          <td>データ6</td>
        </tr>
      </tbody>
    </table>
  </main>
</body>
</html>
```



```bash
git switch <branch-name>
```