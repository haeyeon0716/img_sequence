/*
1. 이미지 동적으로 200개 생성
2. 이미지 소스가 로딩이 될때가 에러가 발생하는 시스템이벤트 설정
3. 브라우저에서 마우스 움직일 때마다 마우스 좌표값 구하기
4. 특정수치값을 백분율화 하는 로직처리
5. 이미지 소스가 모두 로딩되는 상태를 백분율로 변환
*/

//img 노드 생성
//src속성 노드 생성
//src속성노드에 value = img/pic0~100.jpg
//위 작업을 100번 반복 돌리면서
//append로 이미지 요소 반복추가

const section = document.querySelector('section');



for(let i=0; i<=200; i++){
    const img = document.createElement('img');
    const src = document.createAttribute('src');
    src.value = `img/pic${i}.jpg`;
    img.setAttributeNode(src);
    section.append(img);
}