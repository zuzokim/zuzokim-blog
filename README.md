# zuzokim new blog 

- Azure Static Web App
- Github Actions
- Leonids Gatsby starter

made during [HackaLearn2021 Korea](https://github.com/devrel-kr/HackaLearn)

โค๏ธโ๐ฅ https://www.zuzokim.xyz โค๏ธโ๐ฅ

## ์ค์น ๋ฐ ๋ฐฐํฌ ๋ฐฉ๋ฒ
### 1. nodejs & npm ์ค์น 
  - node version v14.17.1
  - npm version v6.14.13
### 2. Gatsby ์ค์น & ์ฌ์ฉ
  - npm install gatsby-cli -g
  - gatsby new `my-blog` https://github.com/renyuanz/leonids
  - cd `my-blog`
  - gatsby develop -> `localhost:8000`์ผ๋ก ๋ก์ปฌ ์คํ ๋ฐ ๊ฐ๋ฐ ๊ฐ๋ฅ
### 3. Github ๋ฆฌ๋ชจํธ ๋ ํฌ์งํ ๋ฆฌ์ ์ฌ๋ฆฌ๊ธฐ
  - Github ์ ๋ ํฌ์งํ ๋ฆฌ `my-blog` ์์ฑ
  - git add .
  - git commit -m"init blog"
  - git remote add origin `๋ ํฌ์งํ ๋ฆฌ ์ฃผ์`
  - git remote set-url origin `๋ ํฌ์งํ ๋ฆฌ ์ฃผ์` (๊ถํ ์ค์ )
  - git push -u origin master
### 4. Azure Static Web Apps ๋ฐฐํฌ & Github ์ฐ๋
  - Azure ํฌํ `์ ์  ์น์ฑ` ์น์ - ๋ฆฌ์์ค ๊ทธ๋ฃน ์์ฑ - ์ฑ ์ด๋ฆ ์ค์  - ์ง์ญ์ค์  
  - Github ๊ณ์ , 3๋ฒ์์ ์์ฑํ ๋ ํฌ์งํ ๋ฆฌ, ๋ธ๋์น ๋ถ๊ธฐ ์ค์ 
  - `๊ฒํ  + ๋ง๋ค๊ธฐ` ํด๋ฆญํ `๋ฆฌ์์ค๋ก ์ด๋`
### 5. Github Actions
  - ๋ก์ปฌ ๊ฐ๋ฐ ํ ์ค์ ์ ๋ฐ๋ผ `Github Actions ์์ ์คํ`์ ํตํด Azure Static Web Apps์ ์๋ ๋ฐฐํฌ ๊ณผ์  ํ์ธ ๊ฐ๋ฅ
  - URL ํด๋ฆญํ์ฌ ๋ฐฐํฌ ์ฌ์ดํธ ํ์ธ ๊ฐ๋ฅ
### 6. ์ปค์คํ ๋๋ฉ์ธ ์ฐ๊ฒฐ ๋ฐ DNS ์ค์ 
  - ๋๋ฉ์ธ ๊ตฌ๋งค (๊ธฐํ DNS)
  - Azure ํฌํ `์ ์  ์น์ฑ` ์น์ - ์ฌ์ฉ์ ์ง์  ๋๋ฉ์ธ - ๋๋ฉ์ธ ์ด๋ฆ ์ค์  - `๋ค์`์ ๋๋ฌ `์ ํจ์ฑ ๊ฒ์ฌ + ๊ตฌ์ฑ ๋จ๊ณ` ์ด๋
  - ๋ ์ฝ๋ ํ์ CNAME ์ ํ: ์๋ธ ๋๋ฉ์ธ(www) ์ค์ 
  - ๋ ์ฝ๋ ํ์ TXT ์ ํ: ๋ฃจํธ ๋๋ฉ์ธ(@) ์ค์  
  - value ๊ฐ ๋ณต์ฌ - ํด๋น ๋๋ฉ์ธ ๊ณต๊ธ์ DNS ์ค์  ์น์์ ์ฐพ์ ๋ ์ฝ๋ ํ์, ํธ์คํธ(๋ฃจํธ,์๋ธ) value ๊ฐ ์ถ๊ฐ
  - Azure ํฌํ `์ ํจ์ฑ ๊ฒ์ฌ + ์ถ๊ฐ` ํด๋ฆญ ํ ๋๋ฉ์ธ ์ฐ๊ฒฐ ํ์ธ (์ฐ๊ฒฐ ์๋ฃ์๊น์ง ์๊ฐ์ด ๋ค์ ๊ฑธ๋ฆด ์ ์์)

---
### ์ฐธ๊ณ  ์ฌ์ดํธ ๋งํฌ
- [Microsoft Learn - Static Web App](https://docs.microsoft.com/ko-kr/learn/paths/azure-static-web-apps/)
- [Microsoft Learn - Github Actions](https://docs.microsoft.com/ko-kr/learn/paths/automate-workflow-github-actions/)
- [Azure Documentation- Custom Domain in Azure Static Web App](https://docs.microsoft.com/ko-kr/azure/static-web-apps/custom-domain?tabs=other-dns#prerequisites)
- [Leonids Gatsby starter](https://github.com/renyuanz/leonids)
