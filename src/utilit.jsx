function GetDayStr ({ numberofweek }) {
  const date = new Date();
  const week = [];
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  let startDate = null;
  
  if (firstDate.getDay() !== 1) {
     const firstWeekDate = lastDayOfMonth - firstDate.getDay() + 2;
     startDate = new Date(date.getFullYear(), date.getMonth() - 1, firstWeekDate);
   } else {
      startDate = new Date(date.getFullYear(), date.getMonth(), 1);
   }

  //  debugger   
 if (numberofweek === 1) {
   for (let i = 0; i < 7; i++) {
     
     if (startDate.getMonth() !== date.getMonth()) {
       week.push(`<td className="ui-datepicker-other-month">${startDate.getDate()}</td>`);
        
     } else {
      if (startDate.getDate() === date.getDate()) {
        week.push(`<td className="ui-datepicker-today">${startDate.getDate()}</td>`);
      } else {
        week.push(`<td>${startDate.getDate()}</td>`);
      }
       
     }
      
     startDate.setDate(startDate.getDate() + 1);
     
   }
 } 

  if (numberofweek === 2) {
    startDate.setDate(startDate.getDate() + 7);
    
     for (let i = 0; i < 7; i++) {
      if (startDate.getDate() === date.getDate()) {
        week.push(`<td className="ui-datepicker-today">${startDate.getDate()}</td>`);
      } else {
        week.push(`<td>${startDate.getDate()}</td>`);
      }
       startDate.setDate(startDate.getDate() + 1);
     }
   } 

  if (numberofweek === 3) {
    startDate.setDate(startDate.getDate() + 14);

     for (let i = 0; i < 7; i++) {
      if (startDate.getDate() === date.getDate()) {
        week.push(`<td className="ui-datepicker-today">${startDate.getDate()}</td>`);
      } else {
        week.push(`<td>${startDate.getDate()}</td>`);
      }
       startDate.setDate(startDate.getDate() + 1);
     }
   }

  if (numberofweek === 4) {
    startDate.setDate(startDate.getDate() + 21);

     for (let i = 0; i < 7; i++) {
      if (startDate.getDate() === date.getDate()) {
        week.push(`<td className="ui-datepicker-today">${startDate.getDate()}</td>`);
      } else {
        week.push(`<td>${startDate.getDate()}</td>`);
      }
       startDate.setDate(startDate.getDate() + 1);
     }
   }

  if (numberofweek === 5) {
    startDate.setDate(startDate.getDate() + 28);

     for (let i = 0; i < 7; i++) {
       if (startDate.getMonth() !== date.getMonth()) {
            week.push(`<td className="ui-datepicker-other-month">${startDate.getDate()}</td>`);

          } else {
            if (startDate.getDate() === date.getDate()) {
              week.push(`<td className="ui-datepicker-today">${startDate.getDate()}</td>`);
            } else {
              week.push(`<td>${startDate.getDate()}</td>`);
            }
          }

          startDate.setDate(startDate.getDate() + 1);        
     }
   }

  //  debugger
 return (week.join(''))

}

export default GetDayStr