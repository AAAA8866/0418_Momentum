# 0418_Momentum

Javascript 사용한 Chrome Extention Momentum 클론코딩

--------------------------------------------------------

작업기간: 04.18 - 04.23 <br>
사용언어: html, Javascript, CSS

--------------------------------------------------------

login.js
 - username의 submit event가 발생할 시, localstorage의 key와 value에 유저 정보 저장
 - 유저 정보 저장 유무에 따라 css의 hidden클래스로 display:none, 이후 greeting message를 보이게 함
 - "HELLO" + => `Hello ${savedUsername}`; 으로 코드 간소화
 - input을 form안에 위치시키고, input요소(required, max-lenght)를 사용하여 사용자 입력 제어
 - preventDefault를 활용하여 submit  제어 


background.js + quotes.js
 - 행렬을 형성하여 랜덤 백그라운드, 송출 문구 지정
 - Math.random, Math.floor 기능을 사용한 행렬 순번 randomize

clock.js
 - Date 객체를 사용하여 날짜, 시간 관련 정보 표현
 - setInterval, setTimeout: 일정주기, 일정 시간 이후로 실행되는 타이머 설정

todo.js
 - 유저로부터 submit된 value를 localstorage에 string화한 객체(id와 todo)배열로 저장
 - localstorage에 저장된 정보의 유무로 li 표현 
 - li의 추가 및 삭제 기능

weather.js
 - openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현
<br>
