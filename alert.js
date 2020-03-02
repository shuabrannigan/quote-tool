

const alertbox = document.querySelector('.alert')
const okBtn = document.getElementsByClassName('okbtn');
const closeBtn = document.getElementsByClassName('closebtn');

alertbox.style.display = 'none'

function closebtn() {
alertbox.style.display = 'none'
}

function okbtn() {
const allItems = document.getElementsByClassName("measurement");
    for (let i = allItems.length - 1; i >= 0; i--) {
        allItems[i].remove();    
      }
      alertbox.style.display = 'none'
      totalIs();
      totalSM();
      showDiv.style.display = 'none'
      showDivBtn.style.display = 'none'


}


