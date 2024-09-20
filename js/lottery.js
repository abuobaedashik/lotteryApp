const lotteryTickets = [
    { id: 1, ticketNumber: 'A102345' },
    { id: 2, ticketNumber: 'A102346' },
    { id: 3, ticketNumber: 'A102347' },
    { id: 4, ticketNumber: 'A102348' },
    { id: 5, ticketNumber: 'A102349' },
    { id: 6, ticketNumber: 'B207653' },
    { id: 7, ticketNumber: 'B207654' },
    { id: 8, ticketNumber: 'B207655' },
    { id: 9, ticketNumber: 'B207656' },
    { id: 10, ticketNumber: 'B207657' },  
    { id: 11, ticketNumber: 'C300128' },
    { id: 12, ticketNumber: 'C300129' },
    { id: 13, ticketNumber: 'C300130' },
    { id: 14, ticketNumber: 'C300131' },
    { id: 15, ticketNumber: 'C300132' },
    { id: 16, ticketNumber: 'D401933' },
    { id: 17, ticketNumber: 'D401934' },
    { id: 18, ticketNumber: 'D401935' },
    { id: 19, ticketNumber: 'D401936' },
    { id: 20, ticketNumber: 'D401937' },
    { id: 21, ticketNumber: 'E502873' },
    { id: 22, ticketNumber: 'E502874' },
    { id: 23, ticketNumber: 'E502875' },
    { id: 24, ticketNumber: 'E502876' },
    { id: 25, ticketNumber: 'E502877' },
    { id: 26, ticketNumber: 'F609341' },
    { id: 27, ticketNumber: 'F609342' },
    { id: 28, ticketNumber: 'F609343' },
    { id: 29, ticketNumber: 'F609344' },
    { id: 30, ticketNumber: 'F609345' },
    { id: 31, ticketNumber: 'G703652' },
    { id: 32, ticketNumber: 'G703653' },
    { id: 33, ticketNumber: 'G703654' },
    { id: 34, ticketNumber: 'G703655' },
    { id: 35, ticketNumber: 'G703656' }
    // { id: 8, ticketNumber: 'H804276' },
    // { id: 9, ticketNumber: 'I905384' },
    // { id: 10, ticketNumber: 'J106572' }
  ];

const Button=document.getElementById('button');
const clickbtn=document.addEventListener('click',
 function(){
    const p =document.getElementById('winner');
    const span=document.getElementById('number');
    // p.innerText ="Wait 20 minute"
    //  console.log(winner)
    const random=Math.round(Math.random()*lotteryTickets.length);
    const str ="Is winner"
    // console.log(lotteryTickets[random]);

    span.innerText=lotteryTickets[random].id;
    p.innerText=lotteryTickets[random].ticketNumber;
 }
)