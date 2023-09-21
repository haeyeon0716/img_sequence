const num =200;
const section = document.querySelector('section');
const imgs = createImgs(section, num);



window.addEventListener('mousemove' , (e)=>{
    const percent = getPercent(e, 200)
    activation(imgs, percent);
})

function getPercent(e, num){
    const curPos = e.pageX;
    const wid = window.innerWidth;
    return parseInt((curPos/wid) * num);
}

function createImgs(target, num){
    for(let i=0; i < num; i++){
        const img = document.createElement('img');
        const src = document.createAttribute('src');
        src.value = `img/pic${i}.jpg`;
        img.setAttributeNode(src);
        target.append(img);
    }
    const imgs = target.querySelectorAll('img');
    let count =0;
    imgs.forEach((img)=>{
        //해당 도메 수반되는 소스 이미지가 로딩완료시 실행되는 이벤트
        img.onload =()=>{
            count++;
            console.log('현재 로딩된 소스 이미지', count);
            if(count === num){
                //동적으로 만들어진 img 요소의 소스 이미지가 렌더링 완료된 시점
                console.log('모든 소스이미지 로딩 완료')
            }
        };
    });
    return imgs;  
}

function activation(arr , index){
    arr.forEach((el)=>(el.style.display = 'none'));
    arr[index].style.display = 'block';
}
