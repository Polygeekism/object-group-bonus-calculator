$(document).ready(function(){
var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
$("button").click(function(){
    bonusLoop(employees);
});
function bonusCalculator(employee){
    var percentage;
    switch(employee.reviewRating) {
        case 0:
        case 1:
        case 2:
            percentage = 0;
            break;
        case 3:
            percentage = 0.04;
            break;
        case 4:
            percentage = 0.06;
            break;
        case 5:
            percentage = 0.10;
            break;
        default:
        console.log("someone dun broke it");    
    } 
    if (employee.employeeNumber.length ===4){
        percentage +=.05;
    }
    if (employee.annualSalary > 65000){
        percentage -= .01
    }
    if (percentage <0){

        percentage =0;
    }
    else if(percentage > .13){
        percentage = .13;
    }
    var totalBonus = Math.round((employee.annualSalary)*(percentage));
    var totalCompensation = parseInt(employee.annualSalary) + totalBonus;
    percentage *= 100;
    
    var bonus ={
        name: employee.name,
        bonusPercentage: percentage,
        totalCompensation: totalCompensation,
        totalBonus: totalBonus,
    };
    return bonus;
    
}

var bonusLoop = function(employeeArr) {
    var bonusArray = [];
    for (i = 0; i < employeeArr.length; i++) {
        var employee = bonusCalculator(employeeArr[i]);
        var employeeStr = JSON.stringify(employee);
        //console.log(employeeStr);
        var str = '<p>' + employeeStr + '</p>';
        console.log(str);
        $('#results').append(str);
    };
};
//console.log(employees);
//console.log(bonusCalculator(jem));
//var result = bonusLoop(employees);
//result = JSON.stringify(result, null, 4);

//$('h3').html(result);
});