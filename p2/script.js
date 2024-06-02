document.addEventListener('DOMContentLoaded', function() {
    let currentSet = 0;
    let sets = document.querySelectorAll('.set');
    const footer = document.getElementById('footer');
    const nextSetButton = document.getElementById('nextSetButton');
    const resultButton = document.getElementById('resultButton');

    sets[currentSet].classList.add('active');

    nextSetButton.addEventListener('click', function() {
        sets[currentSet].classList.remove('active');
        currentSet++;
        if (currentSet < sets.length) {
            sets[currentSet].classList.add('active');
        }
        if (currentSet === sets.length - 1) {
            nextSetButton.style.display = 'none';
            resultButton.style.display = 'block';
        }
    });

    resultButton.addEventListener('click', function() {
        let results = [0, 0, 0];
        for (let i = 1; i <= 3; i++) {
            results[0] += parseInt(document.getElementById(`slider1-${i}`).value);
            results[1] += parseInt(document.getElementById(`slider2-${i}`).value);
            results[2] += parseInt(document.getElementById(`slider3-${i}`).value);
        }
        alert(`첫 번째 질문들 총합: ${results[0]}\n두 번째 질문들 총합: ${results[1]}\n세 번째 질문들 총합: ${results[2]}`);
    });

    document.querySelectorAll('.slider').forEach(slider => {
        slider.addEventListener('change', function() {
            if (Array.from(slider.closest('.set').querySelectorAll('.slider')).every(s => s.value !== '0')) {
                footer.classList.add('active');
            }
        });
    });
});