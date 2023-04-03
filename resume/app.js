function create_resume() {
  let name = document.getElementById("name").value;
  let father_name = document.getElementById("fname").value;
  let age = document.getElementById("age").value;
  let college = document.getElementById("college").value;
  let qualification = document.getElementById("qualification").value;
  let address = document.getElementById("address").value;

  let str = `<table>
  <tr>
    <th>Name</th>
    <th>Father name</th>
    <th>Age</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>${name}</td>
    <td>${father_name}</td>
    <td>${age}</td>
    <td>${address}</td>
  </tr>
</table>`;

  document.write(str);
}
