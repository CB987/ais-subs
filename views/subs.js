function subRow(oneSub) {
  return `
    <tr>
    <td>${oneSub.Sub_Name}</td>
    <td>${oneSub.Last_Name}</td>
    <td>${oneSub.First_Name}</td>
    <td>${oneSub.Language}</td>
    <td>${oneSub.Qualifications}</td>
    <td>${oneSub.Email}</td>
    <td>${oneSub.Home_Phone}</td>
    <td>${oneSub.Cell_Phone}</td>
    <td>${oneSub.Comments}</td>
    <td>${oneSub.Daily_Rate}</td>
    <td>${oneSub.Inactive}</td>
    </tr>
    `;
}

function subs(allSubs) {
  return `
        <div id="table_results">
            <table class="shadow">
                <tr>
                    <th>Sub Name<th>
                    <th>Last Name<th>
                    <th>First Name<th>
                    <th>Language<th>
                    <th>Qualifications<th>
                    <th>Email<th>
                    <th>Home Phone<th>
                    <th>Cell Phone<th>
                    <th>Comments<th>
                    <th>Daily Rate<th>
                    <th>Inactive<th>
                    ${allSubs
                      .map(oneSub => {
                        return subRow(oneSub);
                      })
                      .join("")}
                    </tr>
                    </table>
                    </div>
    `;
}

module.exports = subs;
