let CourseBut = document.querySelector('.courses')
let ReviewsBut = document.querySelector('.feedback')
let FAQBut = document.querySelector('.FAQA')

let AnchorCourse  = document.querySelector('.BlueContainerBody')
let AnchorReviews  = document.querySelector('.GLDivReviews')
let AnchorFAQ = document.querySelector('.GlFAQContainer')
CourseBut.addEventListener('click',function(){
    AnchorCourse.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
ReviewsBut.addEventListener('click',function(){
    AnchorReviews.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}) 
FAQBut.addEventListener('click',function(){
    AnchorFAQ.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}) 