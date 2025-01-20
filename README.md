# Jestの導入と設定
まずプロジェクトを始めます。***Node.jsを初期化***します。
```
npm init -y
```
この後に```TypeScriptを導入```します。
```
 npm i -D typescript
```
tsconfig.jsonの導入
```
npx tsc --init
```
jestとjestの型定義、DSJestのインストール
```
npm i -D jest @types/jest ts-jest
```

jestはそのままでTypeScriptを直接テストできないので、追加の設定。
```
 npx ts-jest config:init
```
jest.config.jsが設定される。
```package.json
"scripts": {
    "test": "jest"//jestに変更
  },
```
テストを実行
```
npm test
```
現段階ではテストを実行していない。
