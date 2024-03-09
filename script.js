const tabs = document.querySelector('#tabs');
const tab = document.querySelectorAll('.tab');

const active = document.querySelector('.active');
const tabActive = document.querySelector('.tab.active');

tabs.addEventListener('click', (e) => {
    let targetBtn = e.target;
    let dataTab = targetBtn.dataset.tab;

    for (let iterator of tab) {
        iterator.classList.remove('active');
        if (dataTab === iterator.id) {
            iterator.classList.add('active');
        }
    }
});