# zuzokim new blog 

- Azure Static Web App
- Github Actions
- Leonids Gatsby starter

made during [HackaLearn2021 Korea](https://github.com/devrel-kr/HackaLearn)

[❤️‍🔥 zuzokim blog link ❤️‍🔥](https://www.zuzokim.xyz)

## 설치 및 배포 방법
### 1. nodejs & npm 설치 
  - node version v14.17.1
  - npm version v6.14.13
### 2. Gatsby 설치 & 사용
  - npm install gatsby-cli -g
  - gatsby new `my-blog` https://github.com/renyuanz/leonids
  - cd `my-blog`
  - gatsby develop -> `localhost:8000`으로 로컬 실행 및 개발 가능
### 3. Github 리모트 레포지토리에 올리기
  - Github 새 레포지토리 `my-blog` 생성
  - git add .
  - git commit -m"init blog"
  - git remote add origin `레포지토리 주소`
  - git remote set-url origin `레포지토리 주소` (권한 설정)
  - git push -u origin master
### 4. Azure Static Web Apps 배포 & Github 연동
  - Azure 포탈 `정적 웹앱` 섹션 - 리소스 그룹 생성 - 앱 이름 설정 - 지역설정 
  - Github 계정, 3번에서 생성한 레포지토리, 브랜치 분기 설정
  - `검토 + 만들기` 클릭후 `리소스로 이동`
### 5. Github Actions
  - 로컬 개발 후 설정에 따라 `Github Actions 작업 실행`을 통해 Azure Static Web Apps에 자동 배포 과정 확인 가능
  - URL 클릭하여 배포 사이트 확인 가능
### 6. 커스텀 도메인 연결 및 DNS 설정
  - 도메인 구매 (기타 DNS)
  - Azure 포탈 `정적 웹앱` 섹션 - 사용자 지정 도메인 - 도메인 이름 설정 - `다음`을 눌러 `유효성 검사 + 구성 단계` 이동
  - 레코드 타입 CNAME 선택: 루트 도메인(@) 설정 
  - 레코드 타입 TXT 선택: 서브 도메인(www) 설정
  - value 값 복사 - 해당 도메인 공급자 DNS 설정 섹션을 찾아 레코드 타입, 호스트(루트,서브) value 값 추가
  - Azure 포탈 `유효성 검사 + 추가` 클릭 후 도메인 연결 확인 (연결 완료시까지 시간이 다소 걸릴 수 있음)

---
### 참고 사이트 링크
- [Microsoft Learn - Static Web App](https://docs.microsoft.com/ko-kr/learn/paths/azure-static-web-apps/)
- [Microsoft Learn - Github Actions](https://docs.microsoft.com/ko-kr/learn/paths/automate-workflow-github-actions/)
- [Azure Documentation- Custom Domain in Azure Static Web App](https://docs.microsoft.com/ko-kr/azure/static-web-apps/custom-domain?tabs=other-dns#prerequisites)
- [Leonids Gatsby starter](https://github.com/renyuanz/leonids)
