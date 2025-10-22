// slider section best-seller
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //resposive//
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
// card select color 
let cards = document.querySelectorAll(".cardMain");
cards.forEach(card => {
    let colors = card.querySelectorAll(".selectColor div span");
    let nameColor = card.querySelector(".color p span");
    colors.forEach(ele => {
        ele.addEventListener("click", () => {
            colors.forEach(item => item.classList.remove("active"));
            ele.classList.add("active");
            nameColor.textContent = ele.dataset.color;
            card.style.border = `2px solid ${ele.dataset.color}`;
        });
    });
});
// count on progress
let nums = document.querySelectorAll(".num");
let section = document.querySelector(".progress");
let statred = false;

window.onscroll = function () {
    if (window.scrollY >= 1684) {
        if (!statred) {
            nums.forEach((num) => startCount(num));
        }
        statred = true
    }
}
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// shop fliter 
const filterItem = document.querySelector(".button-group");
const filterCard = document.querySelectorAll(".newCard");

window.onload = () => {
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("control-btn")) {
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active")
            let filterName = selectedItem.target.getAttribute("data-name");
            filterCard.forEach((card) => {
                let filterCards = card.getAttribute("data-name");
                if (filterCards == filterName || filterName == "all") {
                    card.classList.remove("hide");
                    card.classList.add("show")
                } else {
                    card.classList.add("hide");
                    card.classList.remove("show")
                }
            })
        }
    }
}

// Icon fav in page shope 
let favBtns = document.querySelectorAll(".addFav i");

favBtns.forEach((btn) => {
    btn.onclick = () => {
        if (btn.classList.contains("btnActiveFav")) {
            btn.classList.remove("btnActiveFav");
            btn.classList.add("btnNonActiveFav");
            swal({
                text: "تم الحذف من المفضلة",
                icon: "success",
                button: "موافق",
            });
        } else {
            btn.classList.remove("btnNonActiveFav");
            btn.classList.add("btnActiveFav");
            swal({
                text: "تم الأضافة للمفضلة",
                icon: "success",
                button: "موافق",
            });
        }
    }
})

let shopBtns = document.querySelectorAll(" .addShop i");

shopBtns.forEach((btn) => {
    btn.onclick = () => {
        if (btn.classList.contains("btnActiveFav")) {
            btn.classList.remove("btnActiveFav");
            btn.classList.add("btnNonActiveFav");
            swal({
                text: "تم الحذف من سلة التسوق",
                icon: "success",
                button: "موافق",
            });
        } else {
            btn.classList.remove("btnNonActiveFav");
            btn.classList.add("btnActiveFav");
            swal({
                text: "تم الأضافة الى سلة التسوق",
                icon: "success",
                button: "موافق",
            });
        }
    }
})




