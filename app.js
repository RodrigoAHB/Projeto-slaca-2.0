const sideNav = document.querySelector('.sidenav');
const verMais = document.querySelector('.read-more');
const verMenos = document.querySelector('.read-less');
const resumoLess = document.querySelector('.resumo-content-less');
const resumoMore = document.querySelector('.resumo-content-more');
const resumoContainer = document.querySelector('.resumo-container');
const disContainerClosed = document.querySelector('.dis-container-closed');
const createTopic = document.querySelector('.create-topic');
const disContainerOpen = document.querySelector('.dis-container-open');
const send = document.querySelector('.send');
const footer = document.querySelector('#footer');
const subjectCard = document.querySelector('.subject-card');
const disContainerSent = document.querySelector('.dis-container-sent');
const createNewTopic = document.querySelector('.new-topic-btn');
const seePosted = document.querySelector('.posted-subject-btn');
const disPosted = document.querySelector('.dis-container-posted');

//Event Listeners
verMais.addEventListener('click', readMore);
verMenos.addEventListener('click', readLess);
createTopic.addEventListener('click', openCreateTopic);
send.addEventListener('click', sendTopic);
createNewTopic.addEventListener('click', createTopicNew);
seePosted.addEventListener('click', seePostedSubject);

//Functions
function readMore () {
    resumoLess.style.display = 'none';
    resumoMore.style.display = 'block';
    resumoContainer.style.height = '490px';
    sideNav.style.height = '2074px';
}

function readLess () {
    resumoLess.style.display = 'block';
    resumoMore.style.display = 'none';
    resumoContainer.style.height = '187px';
    sideNav.style.height = '1773px';
    if (disContainerSent.style.display === 'block') {
        sideNav.style.height = '1853px';
    }
}

function openCreateTopic() {
    disContainerClosed.style.display = 'none';
    disContainerOpen.style.display = 'block';
    if (resumoMore.style.display === 'block') {
        sideNav.style.height = '2090px';
    } else {
        sideNav.style.height = '1790px';
    }
}

function sendTopic(){
    disContainerClosed.style.display = 'none';
    disContainerOpen.style.display = 'none';
    disContainerSent.style.display = 'block';
    if (resumoMore.style.display === 'block') {
        sideNav.style.height = '2170px';
    } else {
        sideNav.style.height = '1865px';
    }
}

function createTopicNew(){
    disContainerSent.style.display = 'none';
    disContainerClosed.style.display = 'none';
    disContainerOpen.style.display = 'block';
    if (resumoLess.style.display === 'block') {
        sideNav.style.height = '1805px';
    } else {
        sideNav.style.height = '2090px';
    }
}

function seePostedSubject(){
    disContainerSent.style.display = 'none';
    disContainerClosed.style.display = 'none';
    disContainerOpen.style.display = 'none';
    disPosted.style.display = 'block'
    sideNav.style.height = '2370px'
}