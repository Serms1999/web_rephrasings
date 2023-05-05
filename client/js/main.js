const sentenceButton = document.getElementById('sentences');
const examButton = document.getElementById('exam');

sentenceButton.addEventListener('click', ev => {
    window.location.href = 'html/sentences.html';
});

examButton.addEventListener('click', ev => {
    window.location.href = 'html/exam.html';
});
