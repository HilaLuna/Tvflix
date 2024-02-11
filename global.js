//burda her yerde kullanacağımız kısımları yapacağız 

"use strict"
/*
    * use strict: Strict mode, js'te potansiyel hataları yakalamak için daha katı
kuralları uygulayan bir özelliktir. Performans iyileştirmesi gibi, kodun güvenliğini sağlıyor ve 
doğruluğunu artırmayı hedefliyor. 
*/
const addEventOnElements = function(elements, eventType, callback) {
    console.log(elements, eventType, callback)
    /*
        * element: Her bir öğe, olay dinleyicisi eklenecek bir DOM öğesini temsil eder. html kısmından aldığımız element
        *eventType: Bu parametre olay türünü belirtir. Örneğin, click, mouseover, keydown gibi olay türüdür.
        *callback: Bu parametre belirtilen olay türü gerçekleştiğinde çalıştırılan bir fonksiyon olmalıdır. 
    */
    for(const elem of elements){ //!burda forof kullandık
        //console.log(elem)
        elem.addEventListener(eventType, callback) //! Bunu yaptığımız için projede search-box'ın sağındaki büyüteçe 
        //!tıkladığımızda bize o loading gibi dönen kısmın olduğu search çubuğuna götürüyor. Çarpıya basınca tekrar tvflix'in 
        //!olduğu yere gidiyoruz. Yani burdaki eventType "click", callback de o çalıştırdığımız fonksiyon olmuş oluyor.
        }
    }
const searchBox = document.querySelector(".search-box")
const searchTogglers = document.querySelectorAll(".search-toggler")

addEventOnElements(searchTogglers, "click", function(){
    searchBox.classList.toggle("active") /*Burda toggle'ı vererek o search-box'ın 'active' özelliğine geçişi sağlatıcaz. */
})


// /*forof'un nasıl çalıştığını görmek için örnek */
// const numbers = [1, 2, 3, 4, 5]
// for(const number of numbers) {
//     console.log(number)
// }