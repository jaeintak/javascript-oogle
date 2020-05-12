# Oogle 검색사이트 자동완성 기능 만들기

- 본 프로젝트는 Fast campus의 Byte Degree Javascript 강의 수강생을 대상으로 한 과제입니다.

---

## 프로젝트 소개
구글 / 네이버 / 다음 등 우리가 사용하는 다양한 검색창에 검색어를 입력할 때, 검색어 입력란 하단에 검색어 자동완성란을 보신 적이 있으신가요?
Oogle 검색 서비스의 프론트엔드 개발자가 되어 사이트에 검색어 자동완성 기능을 추가해보세요!

## 프로젝트 목표
- 'study' 라는 최종 키워드를 입력해 나갈 때 검색창 하단에 추천 검색어 리스트를 보여줍니다.
  참고: 's', 'st', 'stu', 'stud', 'study' 키워드에 대해서만 서버 응답값이 전달됩니다.
- 추천 검색어를 선택하면 Input 창의 입력값이 해당 키워드로 변경됩니다.

## 프로젝트용 서버 동작시키기
1. 해당 프로젝트를 클론하고 npm install을 해주세요.
2. 터미널에서 프로젝트 디렉토리로 이동하여 'npm start'를 입력하면 서버가 동작합니다.
3. 'http://localhost:3000' 에 브라우져로 접속하면 oogle 사이트가 동작하는 것을 볼 수 있습니다!

## api 요청하기
- 검색어 추천 리스트는 위 서버의 '/autocomplete' 경로로 요청하면 됩니다.
- input창에 입력한 검색어를 'keyword'라는 query parameter 로 요청하면 됩니다.
  ex) study라는 검색어가 입력되면 http://localhost:3000/autocomplete?keyword=study' 라고 요청하시면 됩니다.
- 서버응답값은 배열로 전달됩니다.
- api 요청은 fetch api를 사용해보세요!
  참고: https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95

## 과제 제출 방식

[과제 제출 가이드](./submission_guide.md)를 참고해 주세요.

## 프로젝트 참고하기
- client/index.js 에서 코드를 구현하세요!
- api로 전달받은 결과값들은 li 태그로 각각 감싸서 class name 'autocomplete-results' ul 태그 하단에 넣어주시면 됩니다.
- 검색어 입력 input의 id 는 'search-field' 입니다.
- data.json 에서 검색어와 결과를 추가해 볼 수 있습니다!