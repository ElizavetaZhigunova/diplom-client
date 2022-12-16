window.onload=function(){

    const tabs = document.getElementById('tabs');
    const content = document.getElementById('contents');

    const changeClass = el => {
        for (let i=0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove('active');
        }
        el.classList.add('active');
    }

    tabs.addEventListener('click', e => {
        const currTabs = e.target.dataset.btn;
        changeClass(e.target);
        
        for(let i = 0; i < content.children.length; i++) {
            content.children[i].classList.remove('active');
            if (content.children[i].dataset.content === currTabs) {
                content.children[i].classList.add('active');
            }
        } 

    })
  }