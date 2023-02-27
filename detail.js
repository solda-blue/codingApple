// 버튼 0 누르면 
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에  show 클래스명 추가

let list = document.querySelector('.list');
list.addEventListener('click', function(e) {
    let num = Number(e.target.dataset.id);
    tabOpen(num);
});

let count = document.querySelectorAll('.tab-button').length
console.log(count);

// for(let i = 0; i < count; i++) {
//     tabOpen(i);
// }
function tabOpen(i) {
    // document.querySelectorAll('.tab-button')[i].addEventListener('click', function() {
            document.querySelectorAll('.tab-button').forEach((el) => {
                el.classList.remove('orange');
            })
            document.querySelectorAll('.tab-content').forEach((el) => {
                el.classList.remove('show');
            }) 
            
        document.querySelectorAll('.tab-button')[i].classList.add('orange');
        document.querySelectorAll('.tab-content')[i].classList.add('show');
    // });
}