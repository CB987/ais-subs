function teacherRow(teacher) {
  return `
    <tr>
    <td>${teacher.Faculty_Name}</td>
    <td>${teacher.Last_Name}</td>
    <td>${teacher.First_Name}</td>
    <td>${teacher.Job_Title}</td>
    <td>${teacher.Grade}</td>
    <td>${teacher.Track}</td>
    <td>${teacher.Room}</td>
    </tr>`;
}

function teachers(allTeachers) {
  return `
                    <div id="table_results">
                        <table class="shadow">
                        <thead>
                            <tr>
                                <th>Faculty Name</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Job Title</th>
                                <th>Grade</th>
                                <th>Track</th>
                                <th>Room</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                ${allTeachers
                                  .map(teacher => {
                                    // console.log(teacher);
                                    return teacherRow(teacher);
                                  })
                                  .join("")}
                            </tr>
                            </tbody>
                        </table>   
                    </div>
    `;
}

module.exports = teachers;
