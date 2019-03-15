function teacherName(teacher) {
  // let names =
  return `
        <option value="${teacher.id}">${teacher.Last_Name}, ${
    teacher.First_Name
  }</option>
    `;
}

function leaveRequest(allTeachers) {
  // allTeachers.sort((a, b) => {
  //     let lastNameA = a.Last_Name
  //     compare
  // })
  return `
        <h2>Enter Leave Request Information</h2>
        <form action="/my-handling-form-page" method="post">
        <button class="dropbtn">Select Teacher Name</button>
        <div class="dropdown-content">
            <select name="teacherName">${allTeachers
              .map(teacher => {
                return teacherName(teacher);
              })
              .join("")}<select>
        </div>
            <div>
                <label for="hours">Hours Requested:</label>
                <input type="number" id="hours" name="hours">
            </div>
            <div>
                <label for="comments">Comments:</label>
                <textarea id="comments" name="comments"></textarea>
            </div>
            <div class="button">
                <button type="submit">Enter</button>
            </div>
        </form>
        
    `;
}

module.exports = leaveRequest;
