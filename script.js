const display = document.getElementById('display');
const buttons = document.querySelectorAll('#buttons .btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-value');
    if (val === 'C') {
      display.value = '';
    } else if (val === '=') {
      try {
        display.value = eval(display.value) ?? '';
      } catch {
        display.value = 'Erro';
      }
    } else {
      display.value += val;
    }
  });
});
