# Shiftgenerator (GUI)

## 使い方

### セットアップ
git cloneでこのリポジトリをクローンします。

```
cd ~/shiftgenerator  
```  

上のコマンドでクローンしたディレクトリに移動し、以下の依存ライブラリをインストールしてください。

```
pip install -upgrade pip
pip install openpyxl
npm install electron
```

これでセットアップ完了です。

### 使用方法

shiftgeneratorディレクトリ直下で、以下のコマンドを入力することでアプリが立ち上がります。

```
electron .
```

画面の指示に従い、必要な情報を入力していきます。

全従業員分の情報入力が終了したら、下のボタンをクリックしてください。そうすると完成したExcelファイルがダウンロードできます。
