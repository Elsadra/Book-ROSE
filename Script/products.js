class Book {
    constructor(imgBook,nameBook,AuthorName,NameTranslator,price,Discount) {
        this.imgBook = imgBook;
        this.nameBook = nameBook;
        this.AuthorName = AuthorName;
        this.NameTranslator = NameTranslator;
        this.price = price;
        this.Discount = Discount;
    }
}

const book_1 = new Book ("./Image/book-1.jpg","پدرپولدار,پدربی پول","رابرت تی، شارون لچتر","غلامحسین سدیرعابدی","80,000",0);
const book_2 = new Book ("./Image/book-2.jpg","بیشعوری","خاویر کرمنت","محمود فرجامی","50,000",0);
const book_3 = new Book ("./Image/book-3.jpg","در کمال خونسردی","مصراله مرادیانی","ترومن","230,000",0);
const book_4 = new Book ("./Image/book-4.jpg","باشگاه پنج صبحی ها","رابین شارما","رضا اسکندری آذر","45,000",0);

const card_book_1 = document.querySelector(".card-book-1");
const card_book_2 = document.querySelector(".card-book-2");
const card_book_3 = document.querySelector(".card-book-3");
const card_book_4 = document.querySelector(".card-book-4");

card_book_1.innerHTML = `
<div class="card carousel-cell"
data-flickity-bg-lazyload="https://unsplash.it/480/641/?random">
<div class="card-img">
<img src="${book_1.imgBook}" alt="${book_1.nameBook}" title="picture"></div>
<div class="card-info">
    <p class="text-title">${book_1.nameBook}</p>
    <p class="text-body">
        نویسنده : ${book_1.AuthorName}
        <br>
        مترجم : ${book_1.NameTranslator}
    </p>
</div>
<div class="card-footer">
    <span class="text-title">${book_1.price}</span>
    <div class="card-button">
        <label class="like">
            <input checked="checked" type="checkbox">
            <div class="checkmark">
                <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path
                        d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                        stroke-width="20px" stroke="#FFF" fill="none"></path>
                </svg>
            </div>
        </label>
    </div>
</div>
</div>
`;

card_book_2.innerHTML = `
<div class="card carousel-cell"
data-flickity-bg-lazyload="https://unsplash.it/480/641/?random">
<div class="card-img">
<img src="${book_2.imgBook}" alt="${book_2.nameBook}" title="picture"></div>
<div class="card-info">
    <p class="text-title">${book_2.nameBook}</p>
    <p class="text-body">
        نویسنده : ${book_2.AuthorName}
        <br>
        مترجم : ${book_2.NameTranslator}
    </p>
</div>
<div class="card-footer">
    <span class="text-title">${book_2.price}</span>
    <div class="card-button">
        <label class="like">
            <input checked="checked" type="checkbox">
            <div class="checkmark">
                <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path
                        d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                        stroke-width="20px" stroke="#FFF" fill="none"></path>
                </svg>
            </div>
        </label>
    </div>
</div>
</div>
`;

card_book_3.innerHTML = `
<div class="card carousel-cell"
data-flickity-bg-lazyload="https://unsplash.it/480/641/?random">
<div class="card-img">
<img src="${book_3.imgBook}" alt="${book_3.nameBook}" title="picture"></div>
<div class="card-info">
    <p class="text-title">${book_3.nameBook}</p>
    <p class="text-body">
        نویسنده : ${book_3.AuthorName}
        <br>
        مترجم : ${book_3.NameTranslator}
    </p>
</div>
<div class="card-footer">
    <span class="text-title">${book_3.price}</span>
    <div class="card-button">
        <label class="like">
            <input checked="checked" type="checkbox">
            <div class="checkmark">
                <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path
                        d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                        stroke-width="20px" stroke="#FFF" fill="none"></path>
                </svg>
            </div>
        </label>
    </div>
</div>
</div>
`;

card_book_4.innerHTML = `
<div class="card carousel-cell"
data-flickity-bg-lazyload="https://unsplash.it/480/641/?random">
<div class="card-img">
<img src="${book_4.imgBook}" alt="${book_4.nameBook}" title="picture"></div>
<div class="card-info">
    <p class="text-title">${book_4.nameBook}</p>
    <p class="text-body">
        نویسنده : ${book_4.AuthorName}
        <br>
        مترجم : ${book_4.NameTranslator}
    </p>
</div>
<div class="card-footer">
    <span class="text-title">${book_4.price}</span>
    <div class="card-button">
        <label class="like">
            <input checked="checked" type="checkbox">
            <div class="checkmark">
                <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path
                        d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                        stroke-width="20px" stroke="#FFF" fill="none"></path>
                </svg>
            </div>
        </label>
    </div>
</div>
</div>
`;

const card_book = document.querySelector(".card-book");
const error_title = document.querySelector(".error__title");
const error = document.querySelector(".error");

card_book_1.addEventListener("click",function(){
    error.setAttribute("style","position: fixed; top: 5rem; right: 2rem; transition: .7s;")
    error_title.innerHTML = "قسمت مضخصات کتاب ها به زودی ایجاد میشود."
    if(error.hasAttribute("style","position: fixed; top: 5rem; right: 2rem; transition: .7s;")) {
        setTimeout(function () {
            error.setAttribute("style","position: fixed; top: -5rem; right: 2rem; transition: .7s;")
        }, 4500);
    }
},false)

card_book_2.addEventListener("click",function(){
    error.setAttribute("style","position: fixed; top: 5rem; right: 2rem; transition: .7s;")
    error_title.innerHTML = "قسمت مضخصات کتاب ها به زودی ایجاد میشود."
    if(error.hasAttribute("style","position: fixed; top: 5rem; right: 2rem; transition: .7s;")) {
        setTimeout(function () {
            error.setAttribute("style","position: fixed; top: -5rem; right: 2rem; transition: .7s;")
        }, 4500);
    }
},false)

card_book_3.addEventListener("click",function(){
    error.setAttribute("style","position: fixed; top: 5rem; right: 2rem; transition: .7s;")
    error_title.innerHTML = "قسمت مضخصات کتاب ها به زودی ایجاد میشود."
    if(error.hasAttribute("style","position: fixed; top: 5rem; right: 2rem; transition: .7s;")) {
        setTimeout(function () {
            error.setAttribute("style","position: fixed; top: -5rem; right: 2rem; transition: .7s;")
        }, 4500);
    }
},false)

card_book_4.addEventListener("click",function(){
    error.setAttribute("style","position: fixed; top: 5rem; right: 2rem; transition: .7s;")
    error_title.innerHTML = "قسمت مضخصات کتاب ها به زودی ایجاد میشود."
    if(error.hasAttribute("style","position: fixed; top: 5rem; right: 2rem; transition: .7s;")) {
        setTimeout(function () {
            error.setAttribute("style","position: fixed; top: -5rem; right: 2rem; transition: .7s;")
        }, 4500);
    }
},false)

