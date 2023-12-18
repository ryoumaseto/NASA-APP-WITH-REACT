import React from 'react'

const Memo = () => {
    return (
        <div>
            <h1>今からでも遅くない生成AIについて</h1>
            <p>主催：アジアクエスト</p>
            <p>参加企業：アジアクエスト、ソフトバンク、エニシアス</p>
            <h2>各社の生成AIサービスを比較してみた</h2>
            <h1>基盤モデルによって出力が異なる</h1>
            <p>生成AI元年2023年</p>
            <p>OpenAi</p>
            <ul>
                <li>GPT-3</li>
                <li>CLIP</li>
                <li>DALL-E</li>
                <li>whisper</li>
            </ul>
            <p>基盤モデルはとてもシンプル、モデルの選定をそこまで要さない</p>
            <p>従来必要であったラベル付けを行わなくてよくなった、個々のタスクに対してモデルが必要であったが、基盤モデルは様々なタスクに対応できるようになっている</p>
            <p>ulタグの中の説明:</p>
            <p>GPT-3: OpenAIの生成AIモデル</p>
            <p>CLIP: OpenAIの画像とテキストの関連付けモデル</p>
            <p>DALL-E: OpenAIの画像生成モデル</p>
            <p>whisper: OpenAIの音声生成モデル</p>
            <p>Microsoft</p>
            <p>基盤モデルはOpenAi、Azure Model Cattalog Vison Custom Vison Face Video ZIOndexer </p>
            <p>MLプラットフォーム、Copilot for Microsoft 365</p>
            <p></p>
            <p>AWS</p>
            <p>いろんな基盤モデルがある。そのほかにもMLプラットフォームサービスがある</p>
            <p>すでにいろんな場面に対応するものが作られている</p>
            <p>Amazon　Sagemaker:モデルのチューニングとかを簡単にしてくれる、</p>
            <p>Amazon bedrock：様々なアプリケーションに簡単に反映できる</p>
            <p></p>
            <p>Amazon Q：業務効率化を行ってくれる</p>
            <p>google</p>
            <p>Gemini,MLプラットフォーム、VERTEXAI、Duet　AI</p>
            <p>Gemini:
                人間の専門家を超えている初のモデル、ウルトラ、プロ、ナノ
                vertexAiとは
                Duet AIとは
                グーグルワークスペースとの相性バッチ。
                対話形式で作れるようになるよノーコードが
            </p>
        <h2>プラグインとは</h2>
        <p>プラグインとは、既存のソフトウェアに追加機能を追加するためのプログラムのことです。</p>
        <p>学習の陳腐化問題、今日の天気は？という質問には答えられないように学習後のことは答えられないようになっている</p>
        <p>学習の陳腐化問題を解決するために、プラグインを作っている</p>
        <p>プラグインを作ることで、学習の陳腐化問題を解決することができる</p>
        <p>生成AIにおけるプラグインとは</p>
        <p>やりたいことをやりやすくするもの？</p>
        <p>プラグインの種類</p>
        <p>プラグインを行うとデータ連携を行い、特化したAIを作ったみたいなことが出来る。サービスとの連携を行える。</p>
        <p>ChatGptsで簡単に自分用AIを作れる、ない情報は自分が与えた情報から引っ張ってくれる</p>

        </div>
    )
}

export default Memo