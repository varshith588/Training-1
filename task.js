// Take an array of employee objects, where each object contains properties such as epmid, empname, empcompany, empsalary and empaddress where empaddress is further having two more properties of object such as empcity and emparea.
// Print these properties in the form of a table on the ui by using JavaScript.

let empDetails = [
    {
      empId: 588,
      empName: "Varshith",
      empCompany: "google",
      empSalary: 77,
      empAddress: {
        empArea: "Bowenpally",
        empCity: "Hyderabad",
      },
    },
    {
      empId: 420,
      empName: "Divyansh Jain.v",
      empCompany: "Deepseek",
      empSalary: 70,
      empAddress: {
        empArea: "vyshupur",
        empCity: "Hyderabad",
      },
    },
    {
      empId: 547,
      empName: "vikas.P",
      empCompany: "Flipkart",
      empSalary: 71,
      empAddress: {
        empArea: "pukatpally",
        empCity: "Hyderabad",
      },
    },
  ];
  
  let empTable = document.getElementById("emp");
  empDetails.map((emp) => {
    empTable.innerHTML += `<tr>
      <td>${emp.empId}</td>
      <td>${emp.empName}</td>
      <td>${emp.empCompany}</td>
      <td>${emp.empSalary}</td>
      <td>${emp.empAddress.empArea}</td>
      <td>${emp.empAddress.empCity}</td>
    </tr>`;
  });
  
  document.body.appendChild(empTable);