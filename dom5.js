const btn = document.querySelector('#btn');
const lang = document.querySelector('#lang')

btn.onclick = (e) => {
    e.preventDefault();
    const selectedValues = [].filter
        .call(lang.options, option => option.selected)
        .map(option => option.text);
    alert(selectedValues);
};