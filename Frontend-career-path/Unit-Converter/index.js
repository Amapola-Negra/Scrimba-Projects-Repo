const number = document.getElementById("number")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const newNumber= document.getElementById("newNumber")
let myNum=20;
length.innerHTML=`${myNum} meters = ${(3.280839895013123).toFixed(4) * myNum} feet | ${myNum} feet = ${(0.3048).toFixed(4) * myNum} meters`;
volume.innerHTML=`${myNum} liters = ${(0.2641720523581484).toFixed(4)* myNum} gallons | ${myNum} gallons = ${(3.785411784).toFixed(4)* myNum} liters`;
mass.innerHTML=`${myNum} kilos = ${(2.204622621848776).toFixed(4)* myNum} pounds | ${myNum} pounds = ${(0.45359237).toFixed(4)* myNum} kilos`;

number.innerHTML=myNum;

const prueba= 65.61679790026247;
const prueba2= prueba.toFixed(3)
console.log(prueba2)
function changeNumber(){
    console.log("change!!")
    myNum=newNumber.value;
     length.innerHTML=`${myNum} meters = ${(3.280839895013123 * myNum).toFixed(3)} feet |  ${myNum} feet = ${(0.3048* myNum).toFixed(3)}`
    volume.innerHTML=`${myNum} liters = ${(0.2641720523581484 * myNum).toFixed(3)} gallons | ${myNum} gallons = ${(3.785411784 * myNum).toFixed(3)} liters`;
    mass.innerHTML=`${myNum} kilos = ${(2.204622621848776 * myNum).toFixed(3)} pounds | ${myNum} pounds = ${(0.45359237 * myNum).toFixed(3)} kilos`;

    number.innerHTML=myNum;
    
}
/*_____________EQIVALENCES____________________*/
// 1 metro----3.280839895013123 pies
// 1 pie -----0.3048 metros
//-------------
// 1 litro ---- 0.2641720523581484 galones
// 1 galón __________ 3.785411784 litros
//------------
// 1 kg ----------- 2.204622621848776 libra
// 1 libra __________ 0.45359237 kg

//console.log((3.280839895013123 *20).toFixed(3))

/*
_____OPTION 2 NoT WORKING____________________
let unitOne=0;
let unitTwo=0;
let resultLength=0;
let resultVolume=0;
let resultMass=0;
function length(){
    unitOne=3.280839895013123*20;
    unitTwo=0.3048*20;
    unitOne=unitOne.toString();
    unitOne=unitOne.slice(0, (unitOne.indexOf("."))+4);
    unitTwo=unitTwo.toString();
    unitTwo=unitTwo.slice(0, (unitOne.indexOf("."))+4);
    resultLength=`20 meters = ${unitOne} feet | 20 feet = ${unitTwo} meters`;
    return resultLength;
}
length();
function volume(){
    unitOne=0.2642*20;
    unitTwo=3.7854*20;
    unitOne=unitOne.toString();
    unitOne=unitOne.slice(0, (unitOne.indexOf("."))+4);
    unitTwo=unitTwo.toString();
    unitTwo=unitTwo.slice(0, (unitOne.indexOf("."))+4);
   resultVolume=`20 liters = ${unitOne} gallons | 20 gallons = ${unitTwo} liters`;
    return resultVolume;
}
volume();
function mass(){
    unitOne=2.204622621848776*20;
    unitTwo=0.45359237*20;
    unitOne=unitOne.toString();
    unitOne=unitOne.slice(0, (unitOne.indexOf("."))+4);
    unitTwo=unitTwo.toString();
    unitTwo=unitTwo.slice(0, (unitOne.indexOf("."))+4);
    resultMass=`20 kilos = ${unitOne} pounds | 20 pounds = ${unitTwo} kilos`;
    return resultMass;
}
mass();
console.log(resultLength)
console.log(resultVolume)
console.log(resultMass)*/
/*num=0.3048*20
num=num.toString();
num=num.slice(0, (num.indexOf("."))+4)
console.log(3.280839895013123-(3.280839895013123 %.01))
console.log(num)*/
