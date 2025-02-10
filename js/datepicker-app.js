let dayWeek = [
   "Понедельник",
   "Вторник",
   "Среда",
   "Четверг",
   "Пятница",
   "Суббота",
   "Воскресение",
]

let shortDayWeek = [
   "Пн",
   "Вт",
   "Ср",
   "Чт",
   "Пт",
   "Сб",
   "Вс",
]

let month = [
   "Январь",
   "Февраль",
   "Март",
   "Апрель",
   "Май",
   "Июнь",
   "Июль",
   "Август",
   "Сентябрь",
   "Октябрь",
   "Ноябрь",
   "Декабрь",
]
let footerButton = [
   "Применить"
]


function Datepicker(name) {
   this.datepickerButton = document.querySelector(name);
   this.rangeDate = [];
   this.cellStart = ' dp-cell-start';
   this.cellEnd = ' dp-cell-end';
   this.cellMarked = ' dp-cell-marked';
   this.cellSelected = ' dp-cell-selected';
   this.buildDadepicker = () => {
      this.datepickerButton.insertAdjacentHTML(
         'beforeend',
         `<div class="dp-open-${name.replace('.', '')}">Дата</div>`
      )
      document.body.insertAdjacentHTML(
         'beforeend',
         `         
         <div class="dp-wrapper-${name.replace('.', '')}">
         <div class="dp-body">
         <div class="dp-block-left">
            <button type="button" class="dp-month-button" data-monthbutton="0">${month[0]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="1">${month[1]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="2">${month[2]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="3">${month[3]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="4">${month[4]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="5">${month[5]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="6">${month[6]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="7">${month[7]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="8">${month[8]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="9">${month[9]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="10">${month[10]}</button>
            <button type="button" class="dp-month-button" data-monthbutton="11">${month[11]}</button>
         </div>
         <div class="dp-block-right">
            <div class="dp-header-top">
               <div class="dp-input-shell"><input type="date" class="dp-input-start"></div>
               <div class="dp-input-hyphen"></div>
               <div class="dp-input-shell" ><input type="date" class="dp-input-end"></div>
            </div>
            <div class="dp-header-bottom">
               <button type="button" class="dp-button-prev">
               <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0.060936 6.50002C0.060936 6.73301 0.167519 6.96597 0.380239 7.1436L7.07746 12.7333C7.50348 13.0889 8.19421 13.0889 8.62006 12.7333C9.04592 12.3779 9.04592 11.8015 8.62006 11.4459L2.694 6.50002L8.61986 1.55414C9.04571 1.19856 9.04571 0.622221 8.61986 0.266815C8.194 -0.0889367 7.50327 -0.0889367 7.07725 0.266815L0.380033 5.85645C0.167278 6.03416 0.060936 6.26712 0.060936 6.50002Z" fill="#1843BF"/>
               </svg>
               </button>
               <div class="dp-block-date">
                  <div class="dp-month"></div>
                  <div class="dp-year"></div>
               </div>
               <button type="button" class="dp-button-next">
               <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8.93906 6.49998C8.93906 6.26699 8.83248 6.03403 8.61976 5.8564L1.92254 0.266684C1.49652 -0.0888947 0.805791 -0.0888947 0.379937 0.266684C-0.0459166 0.62212 -0.0459166 1.19851 0.379937 1.55412L6.306 6.49998L0.380144 11.4459C-0.0457101 11.8014 -0.0457102 12.3778 0.380143 12.7332C0.805997 13.0889 1.49672 13.0889 1.92275 12.7332L8.61997 7.14355C8.83272 6.96584 8.93906 6.73288 8.93906 6.49998Z" fill="#1843BF"/>
               </svg>
               </button>
            </div>
            <div class="dp-week">
               <span class="dp-day-week" data-deyweek="1">${shortDayWeek[0]}</span>
		      	<span class="dp-day-week" data-deyweek="2">${shortDayWeek[1]}</span>
		      	<span class="dp-day-week" data-deyweek="3">${shortDayWeek[2]}</span>
		      	<span class="dp-day-week" data-deyweek="4">${shortDayWeek[3]}</span>
		      	<span class="dp-day-week" data-deyweek="5">${shortDayWeek[4]}</span>
		      	<span class="dp-day-week" data-deyweek="6">${shortDayWeek[5]}</span>
		      	<span class="dp-day-week" data-deyweek="7">${shortDayWeek[6]}</span>
            </div>
            <div class="dp-shell"></div>
            <div class="dp-footer">
               <button class="dp-footer-button" type="button">${footerButton[0]}</button>
            </div>
         </div>
		</div>
      </div>
      `
      )
   }
   this.buildDadepicker();
   this.nowDate = new Date();
   this.dbWrapper = document.querySelector(`.dp-wrapper-${name.replace('.', '')}`);
   this.dpOpen = document.querySelector(`.dp-open-${name.replace('.', '')}`);
   this.datepickerRoot = this.dbWrapper.querySelector('.dp-body');
   this.inputStart = this.datepickerRoot.querySelector('.dp-input-start');
   this.inputEnd = this.datepickerRoot.querySelector('.dp-input-end');
   this.buildCell = (numberYear, numberMonth, numberDate) => {
      numberYear = Number.isInteger(numberYear) ? numberYear : this.nowDate.getFullYear();
      //  numberMonth = numberMonth >= 0 && numberMonth <= 11 ? numberMonth : this.nowDate.getMonth();
      numberDate = Number.isInteger(numberDate) ? numberDate : this.nowDate.getDate();
      this.datepickerShell = this.datepickerRoot.querySelector('.dp-shell');
      this.createMonth = new Date(numberYear, numberMonth, numberDate);
      this.thisMonth = this.createMonth.getMonth();
      this.thisYear = this.createMonth.getFullYear();
      this.createMonth.setDate(1);
      /* запись названия месяца */
      this.datepickerRoot.querySelector('.dp-month').innerHTML = month[this.createMonth.getMonth()];
      this.datepickerRoot.querySelector('.dp-year').innerHTML = this.createMonth.getFullYear();
      this.datepickerShell.innerHTML = '';
      /* построение дней месяца */
      for (let i = this.createMonth.getMonth(), q = this.createMonth.getDate(); i == this.createMonth.getMonth(); this.createMonth.setDate(++q)) {
         let thisCellDate = Date.parse(new Date(this.createMonth.getFullYear(), this.createMonth.getMonth(), this.createMonth.getDate()));
         if (this.nowDate.toDateString() !== this.createMonth.toDateString()) {
            this.datepickerShell.insertAdjacentHTML('beforeend',
               `<div class="dp-cell${thisCellDate == Date.parse(this.rangeDate[0]) && !this.rangeDate[1] ? this.cellMarked : ''}${thisCellDate == Date.parse(this.rangeDate[0]) && this.rangeDate[1] ? this.cellStart : ''}${thisCellDate == Date.parse(this.rangeDate[1]) ? this.cellEnd : ''}${thisCellDate > Date.parse(this.rangeDate[0]) && thisCellDate < Date.parse(this.rangeDate[1]) ? this.cellSelected : ''}"
            data-date="${this.createMonth.getDate()}"
            data-month="${this.createMonth.getMonth()}"
            data-year="${this.createMonth.getFullYear()}">
            ${this.createMonth.getDate()}</div>`);
         } else {
            this.datepickerShell.insertAdjacentHTML('beforeend',
               `<div class="dp-cell dp-now-date${thisCellDate == Date.parse(this.rangeDate[0]) && !this.rangeDate[1] ? this.cellMarked : ''}${thisCellDate == Date.parse(this.rangeDate[0]) && this.rangeDate[1] ? this.cellStart : ''}${thisCellDate == Date.parse(this.rangeDate[1]) ? this.cellEnd : ''}${thisCellDate > Date.parse(this.rangeDate[0]) && thisCellDate < Date.parse(this.rangeDate[1]) ? this.cellSelected : ''}" 
            data-date="${this.createMonth.getDate()}"
            data-month="${this.createMonth.getMonth()}"
            data-year="${this.createMonth.getFullYear()}">
            ${this.createMonth.getDate()}</div>`);
         }
      }
      /* построение дней следующего месяца */
      while (this.createMonth.getDay() !== 1) {
         let thisCellDate = Date.parse(new Date(this.createMonth.getFullYear(), this.createMonth.getMonth(), this.createMonth.getDate()));
         this.datepickerShell.insertAdjacentHTML('beforeend',
            `<div class="dp-cell dp-cell-next${thisCellDate == Date.parse(this.rangeDate[0]) && !this.rangeDate[1] ? this.cellMarked : ''}${thisCellDate == Date.parse(this.rangeDate[0]) && this.rangeDate[1] ? this.cellStart : ''}${thisCellDate == Date.parse(this.rangeDate[1]) ? this.cellEnd : ''}${thisCellDate > Date.parse(this.rangeDate[0]) && thisCellDate < Date.parse(this.rangeDate[1]) ? this.cellSelected : ''}" 
            data-date="${this.createMonth.getDate()}"
            data-month="${this.createMonth.getMonth()}"
            data-year="${this.createMonth.getFullYear()}">
            ${this.createMonth.getDate()}</div>`);
         this.createMonth.setDate(this.createMonth.getDate() + 1)
      }
      /* построение дней предыдущего месяца */
      this.createMonth = new Date(this.thisYear, this.thisMonth, 1);
      while (this.createMonth.getDay() !== 1) {
         this.createMonth.setDate(this.createMonth.getDate() - 1);
         let thisCellDate = Date.parse(new Date(this.createMonth.getFullYear(), this.createMonth.getMonth(), this.createMonth.getDate()));
         this.datepickerShell.insertAdjacentHTML('afterbegin',
            `<div class="dp-cell dp-cell-prev${thisCellDate == Date.parse(this.rangeDate[0]) && !this.rangeDate[1] ? this.cellMarked : ''}${thisCellDate == Date.parse(this.rangeDate[0]) && this.rangeDate[1] ? this.cellStart : ''}${thisCellDate == Date.parse(this.rangeDate[1]) ? this.cellEnd : ''}${thisCellDate > Date.parse(this.rangeDate[0]) && thisCellDate < Date.parse(this.rangeDate[1]) ? this.cellSelected : ''}" 
            data-date="${this.createMonth.getDate()}"
            data-month="${this.createMonth.getMonth()}"
            data-year="${this.createMonth.getFullYear()}">
            ${this.createMonth.getDate()}</div>`);
      }
      this.createMonth = new Date(this.thisYear, this.thisMonth, 1)
   }
   this.buildCell(this.nowDate.getFullYear(), this.nowDate.getMonth(), this.nowDate.getDate());
   /* функция обмена данными из инпута */
   this.inputRange = (event) => {
      let s = this.inputStart.value;
      let e = this.inputEnd.value;
      let dateInputStart = this.inputStart.value.split('-');
      let dateInputEnd = this.inputEnd.value.split('-');
      if (dateInputStart.length == 3) {
         this.rangeDate[0] = new Date(+dateInputStart[0], +dateInputStart[1] - 1, +dateInputStart[2]);
         this.rangeDate[1] = '';
      }
      if (dateInputEnd.length == 3) {
         this.rangeDate[1] = new Date(+dateInputEnd[0], +dateInputEnd[1] - 1, +dateInputEnd[2]);
      }
      if (Date.parse(this.rangeDate[0]) > Date.parse(this.rangeDate[1])) {
         this.rangeDate.reverse();
         this.inputStart.value = e;
         this.inputEnd.value = s;
      };
      if (Date.parse(this.rangeDate[0]) == Date.parse(this.rangeDate[1])) {
         this.rangeDate[1] = '';
      };
      if (this.rangeDate[0] && !this.rangeDate[1]) {
         this.buildCell(+dateInputStart[0], +dateInputStart[1] - 1);
      } else if (this.rangeDate[0] && this.rangeDate[1]) {
         this.buildCell(+dateInputEnd[0], +dateInputEnd[1] - 1);
      }
   }



   /* событие клика */
   this.dpOpen.addEventListener('click', (event) => {
      /* отрыть календарь */
      if (event.target.closest(`.dp-open-${name.replace('.', '')}`)) {
         this.dbWrapper.classList.add('dp-open-active')
         document.documentElement.style.overflow = 'hidden';
      }
   })

   this.dbWrapper.addEventListener('click', (event) => {
      /* листание следующий месяц */
      if (event.target.closest('.dp-button-next')) {
         this.buildCell(this.createMonth.getFullYear(), this.createMonth.getMonth() + 1);
      }
      /* листание предыдущий месяц */
      if (event.target.closest('.dp-button-prev')) {
         this.buildCell(this.createMonth.getFullYear(), this.createMonth.getMonth() - 1);
      }
      /* выбор периода, заполнение масива ограничивающих период дат */
      if (event.target.closest('.dp-cell') && !this.rangeDate[0] && !this.rangeDate[1]) {
         let getDateCell = event.target.closest('.dp-cell');
         this.rangeDate[0] = new Date(getDateCell.dataset.year, getDateCell.dataset.month, getDateCell.dataset.date);
         this.inputStart.value = this.rangeDate[0].getFullYear();
         this.buildCell(this.createMonth.getFullYear(), this.createMonth.getMonth());
      } else if (event.target.closest('.dp-cell-marked')) {
         /* ничего не делать */
      } else if (event.target.closest('.dp-cell') && this.rangeDate[0] && !this.rangeDate[1]) {
         let getDateCell = event.target.closest('.dp-cell');
         this.rangeDate[1] = new Date(getDateCell.dataset.year, getDateCell.dataset.month, getDateCell.dataset.date);
         if (Date.parse(this.rangeDate[0]) > Date.parse(this.rangeDate[1])) { this.rangeDate.reverse() };
         this.buildCell(this.createMonth.getFullYear(), this.createMonth.getMonth());
      } else if (event.target.closest('.dp-cell') && this.rangeDate[0] && this.rangeDate[1]) {
         let getDateCell = event.target.closest('.dp-cell');
         this.rangeDate[0] = new Date(getDateCell.dataset.year, getDateCell.dataset.month, getDateCell.dataset.date);
         this.rangeDate[1] = '';
         this.inputEnd.value = '';
         this.buildCell(this.createMonth.getFullYear(), this.createMonth.getMonth());
      }
      if (event.target.closest('.dp-month-button')) {
         this.buildCell(this.createMonth.getFullYear(), event.target.closest('.dp-month-button').dataset.monthbutton);
      }
      /* ручной ввод даты в поле, инициализация после нажатия "применить" */
      if (event.target.closest('.dp-footer-button')) {
         this.inputRange(event);
         this.dbWrapper.classList.remove('dp-open-active');
         document.documentElement.style.overflow = '';
      }
      /* отображение даты в полях */
      if (event.target.closest('.dp-cell')) {
         if (this.rangeDate[0]) {
            let ys = `${this.rangeDate[0].getFullYear()}`;
            let ms = `${this.rangeDate[0].getMonth() + 1}`;
            let ds = `${this.rangeDate[0].getDate()}`;
            this.inputStart.value = ys + '-' + (ms.length != 2 ? '0' + ms : ms) + '-' + (ds.length != 2 ? '0' + ds : ds);
         }
         if (this.rangeDate[1]) {
            let ye = `${this.rangeDate[1].getFullYear()}`;
            let me = `${this.rangeDate[1].getMonth() + 1}`;
            let de = `${this.rangeDate[1].getDate()}`;
            this.inputEnd.value = ye + '-' + (me.length != 2 ? '0' + me : me) + '-' + (de.length != 2 ? '0' + de : de);
         }
      }
      /* отображение даты в поле открытия календаря */
      if (this.rangeDate[0] && !this.rangeDate[1]) {
         this.dpOpen.innerHTML =
            (`${this.rangeDate[0].getDate()}`.length != 2 ? '0' + `${this.rangeDate[0].getDate()}` : this.rangeDate[0].getDate()) + '.'
            + (`${this.rangeDate[0].getMonth() + 1}`.length != 2 ? '0' + `${this.rangeDate[0].getMonth() + 1}` : (this.rangeDate[0].getMonth() + 1)) + '.'
            + this.rangeDate[0].getFullYear();
      } else if (this.rangeDate[0] && this.rangeDate[1]) {
         let l =
            (`${this.rangeDate[0].getDate()}`.length != 2 ? '0' + `${this.rangeDate[0].getDate()}` : this.rangeDate[0].getDate()) + '.'
            + (`${this.rangeDate[0].getMonth() + 1}`.length != 2 ? '0' + `${this.rangeDate[0].getMonth() + 1}` : (this.rangeDate[0].getMonth() + 1)) + '.'
            + this.rangeDate[0].getFullYear();
         let r =
            (`${this.rangeDate[1].getDate()}`.length != 2 ? '0' + `${this.rangeDate[1].getDate()}` : this.rangeDate[1].getDate()) + '.'
            + (`${this.rangeDate[1].getMonth() + 1}`.length != 2 ? '0' + `${this.rangeDate[1].getMonth() + 1}` : (this.rangeDate[1].getMonth() + 1)) + '.'
            + this.rangeDate[1].getFullYear();
         this.dpOpen.innerHTML = l + '-' + r;
      }
      /* закрытие календаря */
      if (event.target.closest(`.dp-wrapper-${name.replace('.', '')}`) && !event.target.closest('.dp-body')) {
         console.log('test');
         this.dbWrapper.classList.remove('dp-open-active')
         document.documentElement.style.overflow = '';
      }
   })
   this.inputStart.addEventListener('input', (event) => {
      this.inputRange(event);
   })
   this.inputEnd.addEventListener('input', (event) => {
      this.inputRange(event);
   })
   /* событие клавиш стрелок впрерёд, назад, листание месяцев  */
   document.addEventListener('keydown', (event) => {
      if (event.code == 'ArrowRight') {
         this.buildCell(this.createMonth.getFullYear(), this.createMonth.getMonth() + 1);
      }
      if (event.code == 'ArrowLeft') {
         this.buildCell(this.createMonth.getFullYear(), this.createMonth.getMonth() - 1);
      }
   })
}


let datepicker = new Datepicker('.datepicker');
/* === datepicker.rangeDate массив с предельными датами === */

let datepicker2 = new Datepicker('.datepicker2');
/* =========== */

