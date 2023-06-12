# 
<img width="412" alt="image" src="https://github.com/Next-Connect-Project/Frontend/assets/70136320/362a7929-9f2d-4859-82e2-b35e36c578ce">


### 프로젝트 개요

- 사이드 프로젝트 , 스터디 팀원을 자유롭게 구할 수 있는 플랫폼

### 기획배경

- 프로젝트나 스터디를 진행하고 싶은데 팀원을 어디에서 구해야할지 고민이되는 경우가 많습니다.
- 따라서 원하는 포지션의 팀원을 쉽게 구할 수 있는 플랫폼을 기획했습니다.

### 해결방법

- 사용자는 본인이 필요한 유형에 맞춰, 두 가지 유형의 게시물을 작성할 수 있습니다.
    - 모집 - 필요한 팀원의 role, 기술 스택, 진행 기간, 진행 방식 등을 기재한 프로젝트 ,스터디 팀원 모집글
    - 홍보 - 다양한 주제로 소통하고 싶거나 홍보가 필요한 소재를 자유롭게 올리는 홍보글

**Demo link:** 

**팀 노션:** [NextConnect](https://www.notion.so/ea86bb2be7484da699f9b5c91c2b502f?pvs=21)

## 🕰️ 개발 기간

- 23.03.28 - 23.06.08

</br>

## 🛠️ Skills
### Front-End
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> 
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=sasReact Routers&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Scss-cc6699?style=for-the-badge&logo=sass&logoColor=white"> 


### Back-End

<img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white">  <img src="https://img.shields.io/badge/spring boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/spring batch-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/spring security-6DB33F?style=for-the-badge&logo=spring security&logoColor=white"> <img src="https://img.shields.io/badge/gradle-2D4999?style=for-the-badge&logo=gradle&logoColor=white">

<img src="https://img.shields.io/badge/JPA-6DB33F?style=for-the-badge"> <img src="https://img.shields.io/badge/QueryDql-7957D5?style=for-the-badge&logo=QueryDql&logoColor=white"> <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"> <img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"> 

<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"> <img src="https://img.shields.io/badge/Server Sent Event-B5314C?style=for-the-badge&logo=net%20web%20tokens">

### Infrastructure
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white"> <img src="https://img.shields.io/badge/Amazon S3-569A31.svg?style=for-the-badge&logo=Amazon S3&logoColor=white"> <img src="https://img.shields.io/badge/Git Action-181717.svg?style=for-the-badge&logo=Git&logoColor=white">


### Collaboration tool
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-4A154B?style=for-the-badge&logo=GitHub&logoColor=white">

</br>

## ⚒️ 프로젝트 주요 기능
<details>
<summary> 회원가입 & 소셜 로그인</summary>
<div markdown="1">
<ul>
<li>소셜 로그인은 JWT 인증 방식으로 구현</li>
<li>OAuth 로그인 : 네이버 계정을 통해 로그인
<ul>
<li>Front 에서 Authorization code 발급받아 Server 로 전달</li>
<li>Back 에서 Authorization code 를 받아 네이버 서버로부터 Access Token 및 유저 정보를 요청</li>
<li>응답받은 유저 정보로 Database 를 검색하여 회원 정보 생성</li>
<li>로그인 성공 시 Access, Refresh Token을 발급하여 응답</li>
</ul>
</li>
</ul>
</div>
</details>
<details>
<summary> 친구찾기 & 추가</summary>
<div markdown="1">
<ul>
<li>email, name, nickname 타입을 기반으로 회원가입된 전체 유저 목록을 검색</li>
<li>검색 전 인기 유저 추천</li>
<li>검색 후 기준에 맞는 검색 결과가 있으면 검색 결과
<ul>
<li>이미 친구인 경우 친구 삭제 버튼</li>
<li>친구가 아닌 경우 친구 추가 버튼</li>
</ul>
</li>
</li>
<li>검색 결과가 없으면 “검색 결과가 없습니다.” 텍스트 띄움</li>
<li>친구 기능은 단방향으로 추가 가능, 별도의 수락 없음
<ul>
<li>일반 로그인으로 회원가입한 유저의 경우 비밀번호 분실 시 비밀번호를 변경 가능</li>
</ul>
</li>
</ul>
</div>
</details>
<details>
<summary> 친구목록</summary>
<div markdown="1">
<ul>
<li>Access Token을 기반으로 로그인한 유저를 판단하여 해당 유저의 친구 목록을 조회</li>
<li>친구 리스트 hover 시에 삭제 버튼 노출</li>
<li>삭제 버튼 이외 영역 클릭 시 친구의 펀딩 내역, 찜 목록 확인 가능</li>
<li>비로그인 상태에서 클릭하면 로그인 페이지로 연결</li>
</ul>
</div>
</details>
<details>
<summary> 상품</summary>
<div markdown="1">
<ul>
<li>상품 조회 기능
<ul>
<li>카테고리별(의류, 가전제품, 완구, 전자기기, 장신구, 가구, 기타 ) 상품 조회가 가능</li>
<li>매일 바뀌는 오늘의 베스트 상품을 메인 페이지에서 확인 가능</li>
</ul>
</li>
<li>상품 추가 기능
<ul>
<li>(관리자 페이지) 에서 상품 데이터를 추가</li>
</ul>
</li>
<li>기타
<ul>
<li>베스트 상품 데이터는 매일 새벽 2시에 상품의 추천수를 기준으로 업데이트</li>
</ul>
</li>
<li>상품검색
<ul>
<li>Parameter로 전달된 Keyword로 상품을 검색</li>
<li>페이징처리로 한번에 전달되는 상품개수를 제한</li>
</ul>
</li>
</li>
<li>상품 상세정보 조회
<ul>
<li>URL 경로로 전달된 ProductId로 해당 상품에 대한 상세정보 조회</li>
</ul>
</li>
<li>상품 리뷰 조회
<ul>
<li>Parameter로 전달된 ProductId로 해당 상품 리뷰 조회</li>
<li>페이징처리로 한번에 전달되는 상품개수를 제한</li>
</ul>
</li>
</ul>
</div>
</details>
<details>
<summary> 찜목록</summary>
<div markdown="1">
<ul>
<li>찜목록 추가
<ul>
<li>사용자는 원하는 상품을 본인의 찜목록에 자유롭게 추가</li>
</ul>
</li>
<li>찜목록 조회
<ul>
<li>찜목록에 추가한 상품을 조회</li>
<li>친구의 찜목록을 조회하여 친구가 무슨 상품을 좋아하는지 확인 가능</li>
</ul>
</li>
<li>찜목록 삭제
<ul>
<li>찜목록에 추가한 상품은 삭제 가능</li>
</ul>
</li>
</ul>
</div>
</details>
<details>
<summary> 펀딩</summary>
<div markdown="1">
<ul>
<li>펀딩 시작
<ul>
<li>사용자는 원하는 상품, 펀딩 기간, 금액, 펀딩을 받을 대상자를 선택해 펀딩을 시작</li>
<li>사용자는 다른 유저들이 진행중인 펀딩에 추가로 참여</li>
</ul>
</li>
<li>펀딩 조회
<ul>
<li>사용자는 본인이 참여한(시작한) 펀딩목록을 조회</li>
<li>사용자는 본인이 대상자인 펀딩목록을 조회</li>
<li>친구가 참여한 펀딩목록을 조회</li>
<li>메인 페이지에서 인기유저(인플루언서) 유저를 대상으로 진행중인 펀딩들을 조회</li>
</ul>
</li>
<li>펀딩 상세정보 조회
<ul>
<li>펀딩에 참여한 사람들의 수, 유저, 내가 펀딩한 금액, 남은 금액 등 상세정보를 조회</li>
</ul>
</li>
<li>펀딩이 완료된 대상자는 주소와 후기(코멘트)를 남겨 펀딩상품 수령</li>
</ul>
</div>
</details>
<details>
<summary> 포인트</summary>
<div markdown="1">
<ul>
<li>포인트 충전
<ul>
<li>Access Token으로 전달된 UserId로 본인의 포인트를 10000증가</li>
</ul>
</ul>
</div>
</details>


</br>

## ⚙️ Architecture
### System Architecture
![시스템 아키텍처](https://user-images.githubusercontent.com/79897135/224329187-51fa48a5-2d51-44b7-9d0b-144f67ca6026.png)




### Batch
![배치 구조](https://user-images.githubusercontent.com/79897135/224329205-44fe09be-1f77-4807-b2c9-4d2be27f0e67.png)

<br><br>

## 📄ERD
[ERD-Cloud](https://www.erdcloud.com/d/vLR6JdRk3a6ZdrRhL)

![erd](https://user-images.githubusercontent.com/79897135/224329255-8a880e52-f79c-459a-b033-a7da57703759.png)

</br>

## 🚀Demo
###
|Sign Up|Log In|
|---|---|
|<img src ="https://user-images.githubusercontent.com/111720709/224335202-39ea9f53-863d-427c-9174-a4e83dc4508f.gif" width="100%" height="200"/>|<img src ="https://user-images.githubusercontent.com/111720709/224335433-2ba00579-dff6-4d9e-b11f-62a9cd6a4061.gif" width="100%" height="200"/>|
|Products|Wish List|
|<img src ="https://user-images.githubusercontent.com/111720709/224335558-ece03f08-f32c-4080-ba8c-bc51d77085e2.gif" width="100%" height="200"/>|<img src ="https://user-images.githubusercontent.com/111720709/224335682-6260aa67-9ad1-4a8f-9d91-15122d5a717a.gif" width="100%" height="200"/>|
|Funding Start|Funding Attend|
|<img src ="https://user-images.githubusercontent.com/111720709/224335787-d9ff230d-dd66-4d09-838d-5feaef37d5fd.gif" width="100%" height="200"/>|<img src ="https://user-images.githubusercontent.com/111720709/224335804-e45be96a-e575-41c2-bc22-aeeab5fd4620.gif" width="100%" height="200"/>|
|Find Friends|Friends List|
|<img src ="https://user-images.githubusercontent.com/111720709/224335947-f2aece9e-b356-4534-8cd4-4dd280f913ce.gif" width="100%" height="200"/>|<img src ="https://user-images.githubusercontent.com/111720709/224335958-7ed7a245-f8d2-4b08-b86b-eb8ee26c1afe.gif" width="100%" height="200"/>|
|Profile|Gift|
|<img src ="https://user-images.githubusercontent.com/111720709/224336125-fcaa770a-b23d-462f-b0e8-37bfeeed67d4.gif" width="100%" height="200"/>|<img src ="https://user-images.githubusercontent.com/111720709/224336116-7ba29de9-b1d7-43c6-8ad6-fde5df684599.gif" width="100%" height="200"/>|

</br>


## 👥 팀원소개
- 최송희(Back-end) : 
- 한희나(Back-end) : 
- 송지수(Front-end) : 
- 조혜준(Front-end) : 
