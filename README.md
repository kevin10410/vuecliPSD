# 切版練習

> Vue-cli 引入 Bootstrap & SASS & Fontawesome

## Use SASS/SCSS
1. vue init webpeck-simple 會詢問是否使用 sass
Yes => npm 會幫忙安裝 sass-loader node-sass
Module 中會自動加入以下 rule
```javascript=
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
```
2. 在要使用的 component 中設定 style 為
```javascript=
<style lang="scss"></style>
<style lang="sass"></style>
```

## Use Bootstrap4
1. install 相關套件
-- npm install bootstrap@4.1.1
-- npm install jquery
-- npm install popper.js

2. 在 `webpack.config.js`中加入 plugin 設定
```javascript=
plugins: [
    new webpack.ProvidePlugin({
        '$': "jquery",
        'jQuery': "jquery",
        'Popper': 'popper.js'
    })
],
```

3. 在 `main.js` 中引入 bootstrap
```javascript=
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'
```

## Fontawesome
1. install 相關套件
```javascript=
npm i --save @fortawesome/fontawesome
npm i --save @fortawesome/fontawesome-free-solid
npm i --save @fortawesome/fontawesome-free-regular
npm i --save @fortawesome/fontawesome-free-brands
```

2. import 相關套件到 `main.js`
* 一個子套件中，使用一個 icon 可以這樣寫
```javascript=
import fontawesome from '@fortawesome/fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
fontawesome.library.add(faUser)
fontawesome.library.add(faCircle)
fontawesome.library.add(faFacebook)
```
* 一個的小套件中，使用很多個 icon 寫法
```javascript=
import {faFacebook, faGooglePlus, faTwitter} from '@fortawesome/fontawesome-free-brands'
```

