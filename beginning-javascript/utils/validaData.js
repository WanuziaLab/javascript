export function validateDate(data){
   var regex = '^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]d{4}$)'
   var fullDate = data.replace(regex);
   var segRegex = '/^([1-2][0-9]|3[0-1]|0?[1-9])([-./ ])(1[0-2]|0?[1-9])(\0)([d]{4}|[d]{2})$/'
   var segundo = data.replace(segRegex)
   var thirdReg = "^(?:(?:31(/|-|.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\0|(?:(?:29|30)(/|-|.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\0))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:29(/|-|.)(?:0?2|(?:Feb))\0(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1d|2[0-8])(/|-|.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\0(?:(?:1[6-9]|[2-9]d)?d{2})$"
   var third = data.replace(thirdReg)
   // const year = data.getDate()

   // if(data_array[0].length !== 4){
   //    date = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; 
   // }
   console.log("fullYear " + fullDate)
   console.log("segundo " + segundo)
   console.log("terceiro " + third)

   return fullDate
}
export function formataData(data) {
  var data_array0 = data?.split("T");
   var date = data_array0[0]?.replace(/\//g, "-"); 
   console.log('date0: ' + date)
  
   var data_array = date?.split("-");

   if( data_array && data_array[0].length !== 2){
      date = data_array[2]+"/"+data_array[1]+"/"+data_array[0]; 
   }
  //  console.log(date && date.getMonth())
  console.log('date: ' + date)
   return date

}

export function getYear(data) {
  var date = data?.replace(/\//g, "-"); 
  var data_array = date?.split("-");
  var year = data_array && data_array[0]

  if( data_array && data_array[0].length !== 4){
     year = data_array[2]; 
  }
  console.log(year)
  return year
}

