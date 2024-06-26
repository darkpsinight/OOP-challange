// Tasks:

// - Create an employee class with id, name

// - Extends to 2 classes Manager and contractor (and push them to the array of employees)

// - Manager (+ 200) and contractor (+ 100) will have different salaries property

// - Create a button to create Employees

// - Display the employees with a button to add role

// - use the Manager and contractor classes to create new employees with a specific role

// disclaimer: I taught about it but I did not planned, it just came to my mind so feel free to add , remove or change any task, the idea is that should be something useful

// --------

// Solution:

// --------

const input_name = document.getElementById("input_name");
const input_id = document.getElementById("input_id");
const button_form = document.getElementById("button");
const employee_div = document.getElementById("employees_list");
const select = document.getElementById("select_role");

const employees = [];

class Employees {
  constructor(id, name, salary = 700) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  // methods
  addEmployee(object) {
    employees.push(object);
  }
}

class Manager extends Employees {
  constructor(id, name, salary) {
    super(id, name, salary);
  }

  increaseSalary() {
    this.salary += 200;
  }
}

class Contractor extends Employees {
  constructor(id, name, salary) {
    super(id, name, salary);
  }

  increaseSalary() {
    this.salary += 100;
  }
}

// button's "Create Employee" event listener
const buttonTest = button_form.addEventListener("click", () => {
  if (
    input_id.value === "" ||
    input_name.value === "" ||
    input_id.value <= 0 ||
    isNaN(input_id.value)
  ) {
    alert("Please enter valid Id and Name");
    return false;
  }

  if (employees.some((element) => element.id === input_id.value)) {
    alert("Id already exists");
    return false;
  } else if (select.value == "manager_role") {
    const manager = new Manager(input_id.value, input_name.value);
    manager.increaseSalary();
    manager.addEmployee(manager);

    //   document.getElementById("employees_list").innerHTML(employee);

    employee_div.innerHTML = ""; // fix duplication in the list (clear the list before append)

    // if (employees.length === 0) {
    //   const noEmployeeMessage = document.createElement("p");
    //   noEmployeeMessage.textContent = "No employees added";
    //   employee_div.appendChild(noEmployeeMessage);
    // } else {
    employees.map((element) => {
      // display employees list
      const newItem = document.createElement("li");
      newItem.textContent = `Id: ${element.id} - Name: ${element.name} - Salary: ${element.salary}`;
      employee_div.appendChild(newItem);

      // add role button
      /* const addButton = document.createElement("button");
        addButton.textContent = "Add Role";
        newItem.appendChild(addButton); */

      // clear the inputs field
      input_id.value = "";
      input_name.value = "";
    });
    // }
  } else if (select.value == "contractor_role") {
    const employee = new Contractor(input_id.value, input_name.value);
    employee.increaseSalary();
    employee.addEmployee(employee);

    employee_div.innerHTML = "";
    employees.map((element) => {
      const newItem = document.createElement("li");
      newItem.textContent = `Id: ${element.id} - Name: ${element.name} - Salary: ${element.salary}`;
      employee_div.appendChild(newItem);
      input_id.value = "";
      input_name.value = "";
    });
  } else {
    const employee = new Employees(input_id.value, input_name.value);
    employee.addEmployee(employee);

    employee_div.innerHTML = "";

    employees.map((element) => {
      // display employees list
      const newItem = document.createElement("li");
      newItem.textContent = `Id: ${element.id} - Name: ${element.name}`;
      employee_div.appendChild(newItem);

      input_id.value = "";
      input_name.value = "";
    });
  }
});
