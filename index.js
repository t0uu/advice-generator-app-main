const Number = document.getElementById('Number')
const Advice = document.getElementById('Advice');
const Btn = document.getElementById('Btn')





gsap.to("#Btn", {rotation: 360, duration: 1.1}) 


Btn.addEventListener('click', async() => {
 
   try {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    gsap.fromTo("#Number", {opacity: 0, duration: 2}, {opacity:1})
    gsap.fromTo("#Advice", {opacity: 0, duration: 2}, {opacity:1})
    Number.innerText = `ADVICE #${data.slip.id}`
    Advice.innerText = `"${data.slip.advice}"`  
   } catch{
      console.error(error);
    }

   } 
    );




