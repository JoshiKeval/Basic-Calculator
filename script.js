// This is Addition() it is used for sum of two numbers
//In this function we define Operater 1 & Operater 2
//This 2 operater take value from the input tag.
//All the values convert in parseFloat
function Addition() {
  //Operaters Declaretion
  let Operater1 = parseFloat(document.getElementById("input1").value);
  let Operater2 = parseFloat(document.getElementById("input2").value);

  // If value is not a number then error throw.
  if (isNaN(Operater1 && Operater2)) {
    alert("Enter Valid Number!!");
  }

  // Addition Operation is performed
  let Operation_Result = Operater1 + Operater2;
  document.getElementById("result").value = Operation_Result;
}

// This is Subtract() it is used for sum of two numbers
//In this function we define Operater 1 & Operater 2
//This 2 operater take value from the input tag.
//All the values convert in parseFloat
function Subtract() {
  //Operaters Declaretion
  let Operater1 = parseFloat(document.getElementById("input1").value);
  let Operater2 = parseFloat(document.getElementById("input2").value);

  // If value is not a number then error throw.
  if (isNaN(Operater1 && Operater2)) {
    alert("Enter Valid Number!!");
  }

  // Subtract Operation is performed
  let Operation_Result = Operater1 - Operater2;
  document.getElementById("result").value = Operation_Result;
}

// This is Multiply()it is used for sum of two numbers
//In this function we define Operater 1 & Operater 2
//This 2 operater take value from the input tag.
//All the values convert in parseFloat
function Multiply() {
  //Operaters Declaretion
  let Operater1 = parseFloat(document.getElementById("input1").value);
  let Operater2 = parseFloat(document.getElementById("input2").value);

  // If value is not a number then error throw.
  if (isNaN(Operater1 && Operater2)) {
    alert("Enter Valid Number!!");
  }

  // Multiply Operation is performed
  let Operation_Result = Operater1 * Operater2;
  document.getElementById("result").value = Operation_Result;
}

// This is Divied()it is used for sum of two numbers
//In this function we define Operater 1 & Operater 2
//This 2 operater take value from the input tag.
//All the values convert in parseFloat
function Divied() {
  //Operaters Declaretion
  let Operater1 = parseFloat(document.getElementById("input1").value);
  let Operater2 = parseFloat(document.getElementById("input2").value);

  // If value is not a number then error throw.
  if (isNaN(Operater1 && Operater2)) {
    alert("Enter Valid Number!!");
  }

  // Subtract Operation is performed
  let Operation_Result = Operater1 / Operater2;
  document.getElementById("result").value = Operation_Result;
}
