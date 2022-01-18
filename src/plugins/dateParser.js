const dateParser =(date)=>{
    const months = [
        'Janvier',
        'Février',
        'Mars',
        'Afvril',
        'Mai',
        'Juin',
        'Juillet',
        'Aout',
        'Septembre',
        'Octobre',
        'Novembre',
        'Decembre'
      ]
      
      const theDate = new Date(date)
          const monthIndex = theDate.getMonth()
          const monthName = months[monthIndex]

const day = theDate.getDate()
const year = theDate.getFullYear();
return `${day} ${monthName} ${year} `


}

export default dateParser