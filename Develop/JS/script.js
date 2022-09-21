var today = moment();

$(document).ready(function() {

  var saveButton = $(".saveBtn");

  saveButton.on("click", function() {

    var value = $(this).parent().siblings(".description").children(".userInput").val();

    
    var time = $(this).parent().siblings(".description").siblings(".hour").text();

    console.log("value ", time);

    localStorage.setItem(time, value);

  })

  $("#0.userInput ").val(localStorage.getItem("7 AM"));
  
  $("#1.userInput ").val(localStorage.getItem("8 AM"));

  $("#2.userInput ").val(localStorage.getItem("9 AM"));

  $("#3.userInput ").val(localStorage.getItem("10 AM"));

  $("#4.userInput ").val(localStorage.getItem("11 AM"));

  $("#5.userInput ").val(localStorage.getItem("12 PM"));

  $("#6.userInput ").val(localStorage.getItem("1 PM"));

  $("#7.userInput ").val(localStorage.getItem("2 PM"));

  $("#8.userInput ").val(localStorage.getItem("3 PM"));

  $("#9.userInput ").val(localStorage.getItem("4 PM"));

  $("#10.userInput ").val(localStorage.getItem("5 PM"));

  $("#11.userInput ").val(localStorage.getItem("6 PM"));

  $("#12.userInput ").val(localStorage.getItem("7 PM"));

  var hour = moment().hours()

  console.log(hour) //to extract the number from id and compare it against current hour within a for loop; if statements(use this keyword to grab ids) add or remove classes; use of this keyword in for loop

})

// const timeConverter = h => (h%12||12)+(h<12?'AM':'PM');

// const storePlans = JSON.parse(localStorage.scheduler||'{}');

// const template_schedule = h => <div class="scheduler">

//   <div class="schedule-time">${timeConverter(h)}</div>

//   <textarea class="schedule-desc" data-h="${h}">${storePlans[h]||''}</textarea>

//   <div class="schedule-save">SAVE</div>

//   </div>;

//   for (let h=from; h <= today; h++) {

//     EL_scheduler.insertAdjacentHTML('beforeend', template_schedule(h));

//   }

//   const save = ev => {

//     const h = ev.target.getAttribute('data-h');// Get the hour
      
//     LS[h] = ev.target.value;       // Update Object
                   
//     localStorage.scheduler = JSON.stringify(LS); // Store into localStorage as string 
//   };
  
//   EL_scheduler.querySelectorAll('.Schedule-desc').forEach(el => {

//     el.addEventListener('blur', save);

//   });

$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));