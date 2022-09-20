var today = moment();

const timeConverter = h => (h%12||12)+(h<12?'AM':'PM');

const storePlans = JSON.parse(localStorage.scheduler||'{}');

const template_schedule = h => <div class="scheduler">

  <div class="schedule-time">${timeConverter(h)}</div>

  <textarea class="schedule-desc" data-h="${h}">${storePlans[h]||''}</textarea>

  <div class="schedule-save">SAVE</div>

  </div>;

  for (let h=from; h <= today; h++) {

    EL_scheduler.insertAdjacentHTML('beforeend', template_schedule(h));

  }

  const save = ev => {

    const h = ev.target.getAttribute('data-h');// Get the hour
      
    LS[h] = ev.target.value;       // Update Object
                   
    localStorage.scheduler = JSON.stringify(LS); // Store into localStorage as string 
  };
  
  EL_scheduler.querySelectorAll('.Schedule-desc').forEach(el => {

    el.addEventListener('blur', save);
    
  });

$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));