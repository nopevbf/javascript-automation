# JavaScript Automation Training
  
---
## Installation Configuration
* [Download Node.js](https://nodejs.org/en/)
* Setelah install open cmd.exe (command prompt) / terminal untuk macOs dan linux
```
$ node --version
```
* Jika sudah terinstall akan mendapatkan info versi node js yang diinstall cth : ``` v19.1.0 ```
* Check versi dari ``` npm ```
```
$ npm --version
```
* Jika sudah terinstall akan mendapatkan info versi npm, cth : ``` 9.2.0 ```

---
## Package Installation
```
$ mkdir javascript-automation
$ cd javascript-automation
$ npm i -g mocha
$ npm init
$ npm i supertest
$ npm i chai
$ npm i jsonschema
```

---
## Case Study
* Buatlah automation test untuk API dibawah ini
  * [API documentation](https://www.apimatic.io/apidocs/petstoresampleapi/v/1_0_5#/http/api-endpoints/pet/overview)
  * Cobalah buat untuk endpoint ``` Get Pet Information ``` dan ``` Create User ```
  * Silakan membuat automate untuk API lain untuk portofolio kamu dari API dibawah ini :
  * [reqres.in](https://reqres.in/)

---
## Reporting (optional)
* Install mochawesome
```
$ npm install mochawesome
```
* Kemduian ketikkan code berikut ganti sesuai lokasi
```
$ npx --spec test/api/chaiAssert.js --reporter mochawesome
```
<img src="/data/Screenshot 2023-02-09 172436.png">
