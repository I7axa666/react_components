import GetDayStr from './utilit'
import parse from 'html-react-parser'

function Calendar ({ date }) {
  const months = {
    1: ['Января', 'Январь'],
    2: ['Февраля', 'Февраль'],
    3: ['Марта', 'Март'],
    4: ['Апреля', 'Апрель'],
    5: ['Мая', 'Май'],
    6: ['Июня', 'Июнь'],
    7: ['Июля', 'Июль'],
    8: ['Августа', 'Август'],
    9: ['Сетября', 'Сетябрь'],
    10: ['Октября', 'Октябрь'],
    11: ['Ноября', 'Ноябрь'],
    12: ['Декабря', 'Декабрь']
  }
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

  function GetTr(numberofweek) {
    const tr = document.createElement('tr')
    
    tr.innerHTML = GetDayStr(numberofweek)
    // console.log(tr);
    return (tr)
  } 

  const week1 = GetTr(1)

  // const exp = `
  // <td>6</td>
  // <td>7</td>
  // <td className="ui-datepicker-today">8</td>
  // <td>9</td>
  // <td>10</td>
  // <td>11</td>
  // <td>12</td>
  // `

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{date.toLocaleDateString('ru-RU',{weekday: 'long'})}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{months[date.getMonth() + 1][0]}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[date.getMonth() + 1][1]}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>    
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>        
          <tr>
            { parse(GetDayStr({numberofweek:1})) }
          </tr>
          <tr>
          { parse(GetDayStr({numberofweek:2})) }
          </tr>
          <tr>
          { parse(GetDayStr({numberofweek:3})) }
          </tr>
          <tr>
          { parse(GetDayStr({numberofweek:4})) }
          </tr>
          <tr>
          { parse(GetDayStr({numberofweek:5})) }
          </tr>
        </tbody> 
      </table>
    </div>
  )
}

export default Calendar