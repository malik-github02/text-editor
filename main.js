let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let bold = document.querySelector('#bold');
let italic = document.querySelector('#italic');
let textInput = document.querySelector('.text-input');
let result = document.querySelector('.result');
let reverse = document.querySelector('#reverse');
let palind = document.querySelector('#palind');
let charCount = document.querySelector('#char-count');
let wordCount = document.querySelector('#word-count');
let searchInput = document.querySelector('#search-input');
let searchBtn = document.querySelector('#search-btn');
let counter = document.querySelector('.counter');
let maxLength = textInput.getAttribute('maxlength');
let i = 16;

counter.innerHTML = maxLength;
plus.onclick = function () {
       if (i < 30) {
              i += 1;
              minus.classList.remove('unclick');
       } else {
              plus.classList.add('unclick');
       }

       textInput.style.fontSize = `${i}px`;
};
minus.onclick = function () {
       if (i > 10) {
              i -= 1;
              plus.classList.remove('unclick');
       } else {
              minus.classList.add('unclick');
       }

       textInput.style.fontSize = `${i}px`;
};
bold.onclick = function () {
       bold.classList.toggle('clicked');
       if (bold.classList.contains('clicked')) {
              textInput.style.fontWeight = 'bold';
       } else {
              textInput.style.fontWeight = 'normal';
       }
};
italic.onclick = function () {
       italic.classList.toggle('clicked');
       if (italic.classList.contains('clicked')) {
              textInput.style.fontStyle = 'italic';
       } else {
              textInput.style.fontStyle = 'normal';
       }
};
textInput.oninput = function () {
       counter.innerHTML = maxLength - textInput.value.length;
       if (counter.innerHTML == '0') {
              counter.classList.add('zero');
       } else {
              counter.classList.remove('zero');
       }
};
reverse.onclick = function () {
       if (textInput.value == '') {
              result.innerHTML = 'please write some word';
       } else {
              result.innerHTML = `The reversed text is: <span class="text">${textInput.value
                     .split('')
                     .reverse()
                     .join('')}</span>`;
       }
};
palind.onclick = function () {
       if (textInput.value == '') {
              result.innerHTML = 'please write some word';
       } else {
              let inputValue = textInput.value;
              let inputValueReversed = textInput.value
                     .split('')
                     .reverse()
                     .join('');
              if (inputValue == inputValueReversed) {
                     result.innerHTML = `It is <span class="text">Palindrome</span>`;
              } else {
                     result.innerHTML = `It is <span class="text">Not Palindrome</span>`;
              }
       }
};
charCount.onclick = function () {
       if (textInput.value == '') {
              result.innerHTML = 'please write some word';
       } else {
              result.innerHTML = `The character count is: <span class="text">${textInput.value.length}</span>`;
       }
};
wordCount.onclick = function () {
       if (textInput.value == '') {
              result.innerHTML = 'please write some word';
       } else {
              result.innerHTML = `The character count is: <span class="text">${
                     textInput.value.split(' ').length
              }</span>`;
       }
};
searchBtn.onclick = function () {
       if (searchInput.value == '' || textInput.value == '') {
              result.innerHTML = 'Eeither Or Both input Fields are empty';
       } else {
              let searchWord = searchInput.value;
              let inputValue = textInput.value.split(' ');
              if (inputValue.includes(searchWord)) {
                     result.innerHTML = `The text contains '<span class="text">${searchWord}'</span>`;
              } else {
                     result.innerHTML = `The text does Not contains '<span class="text">${searchWord}'</span>`;
              }
       }
};
