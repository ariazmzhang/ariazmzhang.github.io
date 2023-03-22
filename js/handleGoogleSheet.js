const scriptURL = 'https://script.google.com/macros/s/AKfycbwy0z_2-tj_PKsde-2kZnHNTuw1m1OqirV2LXBdNif1nsObsl1b3x8jv_H4iH7696XC4w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = decument.getElementById('msg')
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function(){
        msg.innerHTML = ''
    }, 5000)
    form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})