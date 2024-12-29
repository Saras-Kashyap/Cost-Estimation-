let dailyCost1;
let requedyear1;

function withoutadd() {
  dailyCost1 = parseFloat(document.getElementById("dailyCost").value);
  console.log(dailyCost1);
  requedyear1 = parseFloat(document.getElementById("requedyear").value);
  console.log(requedyear1);

  monthly.textContent = `Monthly cost: ₹${dailyCost1 * 30}`;
  dailyCost1 = dailyCost1 * 30;
  const outputfun1 = dailyCost1; // monthly cost
  yearly.textContent = `Yearly cost: ₹${dailyCost1 * 12}`;
  dailyCost1 = dailyCost1 * 12;
  totalyear.textContent = `Cost for requed years: ₹${dailyCost1 * requedyear1}`;

  let totalyearcostwithoutreos = dailyCost1 * requedyear1;
  console.log(`total cost for required yrears is: ${totalyearcostwithoutreos}`);
  return outputfun1;
}
function eveydaybikecost() {
  let fuelprice = parseFloat(document.getElementById("fuleCost").value);
  console.log(fuelprice);
  let Mileage1 = parseFloat(document.getElementById("Mileage").value);
  console.log(Mileage1);
  let Distance1 = parseFloat(document.getElementById("Distance").value);
  console.log(Distance1);
  let eveydaybikecost1 = (Distance1 / Mileage1) * fuelprice;
  console.log(eveydaybikecost1); //per day cost only for dis , mileage ang fuelprice
  eveydaybikecost2.textContent = `Everyday cost: ₹${eveydaybikecost1}`;

  dailyCost1 = parseFloat(document.getElementById("dailyCost").value);
  console.log(dailyCost1);

  if (dailyCost1 > eveydaybikecost1) {
    monthly1.textContent = `Monthly cost after reducing form previous(SAVED MONEY): ₹${
      dailyCost1 * 30 - eveydaybikecost1 * 30
    }`;
    let monthlycost = dailyCost1 * 30 - eveydaybikecost1 * 30;
    yearly1.textContent = `Yearly (SAVED MONEY) ₹${monthlycost * 12}`;
    let yearlycost = monthlycost * 12;
    requedyear1 = parseFloat(document.getElementById("requedyear").value);
    console.log(requedyear1);
    totalyear1.textContent = `Total SAVE MONEY in ${requedyear1} Years is: ₹${
      yearlycost * requedyear1
    }`;
  } else {
    monthly1.textContent = `Monthly Cost LOSS We Have: ₹${
      dailyCost1 * 30 - eveydaybikecost1 * 30
    }`;
    let monthlycost = dailyCost1 * 30 - eveydaybikecost1 * 30;
    yearly1.textContent = `Yearly We LOSS: ₹${monthlycost * 12}`;
    let yearlycost = monthlycost * 12;
    requedyear1 = parseFloat(document.getElementById("requedyear").value);
    console.log(requedyear1);
    totalyear1.textContent = `Total LOSS We will have: ${requedyear1} Years is: ₹${
      yearlycost * requedyear1
    }`;
  }
  return eveydaybikecost1 * 30;
}
function calculateCost() {
  let purchasprice = parseFloat(document.getElementById("purchaseCost").value);
  console.log(purchasprice);
  let maintenanceCost1 = parseFloat(
    document.getElementById("maintenanceCost").value
  );
  console.log(maintenanceCost1);
  let timePeriod1 = parseFloat(document.getElementById("timePeriod").value);
  console.log(timePeriod1);
  let sellprice1 = parseFloat(document.getElementById("sellprice").value);
  console.log(sellprice1);
  let addoncost = purchasprice - sellprice1 + maintenanceCost1; //addtitional cost
  console.log(addoncost);
  let numberofmonth = timePeriod1 * 12;
  let instcost = addoncost / numberofmonth; // cost for each month

  let monthvalue = eveydaybikecost(); //month cost with fuel ,mileag and distance
  console.log(monthvalue);
  let finalmonthprice = instcost + monthvalue;
  console.log(finalmonthprice);
  let fun1output = withoutadd();
  console.log(fun1output);
  if (fun1output > finalmonthprice) {
    monthly2.textContent = `Overall Monthly We Will Save(After Interst): ₹${
      fun1output - finalmonthprice
    } `;

    let finaltotalmontcost = fun1output - finalmonthprice;
    yearly2.textContent = `Overall Yearly We Will Save: ₹${
      finaltotalmontcost * 12
    }`;
    totalyear2.textContent = `How Much We Will Save On Our Decision: ₹${
      finaltotalmontcost * 12 * timePeriod1
    }`;
    finalpr.textContent = `WE WILL SAVE MONEY ON OUR DECISION`;
  } else {
    monthly2.textContent = `Overall Monthly We Will Loss(After Interst): ₹${
      fun1output - finalmonthprice
    } `;
    let finaltotalmontcost = fun1output - finalmonthprice;
    yearly2.textContent = `Overall Yearly We Will Loss: ₹${
      finaltotalmontcost * 12
    }`;
    totalyear2.textContent = `How Much We Will Loss On Our Decision: ₹${
      finaltotalmontcost * 12 * timePeriod1
    }`;
    finalpr.textContent = `WE WILL LOSS MONEY ON OUR DECISION`;
  }
}

//! next stuff...
document
  .getElementById("openPrompt")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("sidePrompt").style.width = "25%";
  });

document.getElementById("closePrompt").addEventListener("click", function () {
  document.getElementById("sidePrompt").style.width = "0";
});
//
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth", // Smooth scrolling animation
  });
}
//? next stuff
document
  .getElementById("openPrompt1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("sidePrompt1").style.width = "25%";
  });
document.getElementById("closePrompt1").addEventListener("click", function () {
  document.getElementById("sidePrompt1").style.width = "0";
});
//
function savedeatils() {
  let email1 = document.getElementById("emailinput");
  console.log(email1);
}
