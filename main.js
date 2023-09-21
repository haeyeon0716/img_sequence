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

//백분율 구하는 공식
//현재 수치값 / 전체수치값 * 100 (백분율)
//현재 수치값 / 전체수치값 * 200 (이백분율)

const section = document.querySelector('section');
const imgs = createImgs(section, 200);
console.log(imgs);

window.addEventListener('mousemove' , (e)=>{
    const curPos = e.pageX;
    const wid = window.innerWidth;
    const percent = parseInt((curPos/wid) *200);
    console.log(percent);

    //parseInt(숫자) : 실수에서 소수점 아랫값을 버려서 정수 반환
    //parseFloat(숫자) : 소수점 아래까지 있는 실수 반환
})

//인수로 갯수를 받아 동적으로 Img 생성해 주는 함수
function createImgs(target, num){
    for(let i=0; i < num; i++){
        const img = document.createElement('img');
        const src = document.createAttribute('src');
        src.value = `img/pic${i}.jpg`;
        img.setAttributeNode(src);
        target.append(img);
    }
    return target.querySelectorAll('img');  
}
