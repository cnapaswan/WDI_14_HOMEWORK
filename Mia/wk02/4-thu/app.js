var balanceSaving = document.querySelector('span')
var enterAmountS = document.querySelector('.enterAmount')
var withdrawS = document.querySelector('.withdraw')
var depositS = document.querySelector('.deposit')

function addMoneyS (){
  balanceSaving.textContent = Number(balanceSaving.textContent) + Number(enterAmountS.value)
/*  var result = balanceSaving.textContent
  if (isNan(result)){
  alert('what?')
  }*/
}

function minusMoneyS (){
  balanceSaving.textContent = Number(balanceSaving.textContent) - Number(enterAmountS.value)
}

depositS.addEventListener('click',addMoneyS)
withdrawS.addEventListener('click',minusMoneyS)

var balanceChecking = document.querySelectorAll('span')[1]
var enterAmountC = document.querySelectorAll('.enterAmount')[1]
var depositC = document.querySelectorAll('.deposit')[1]
var withdrawC = document.querySelectorAll('.withdraw')[1]

function addMoneyC (){
  balanceChecking.textContent = Number(balanceChecking.textContent) + Number(enterAmountC.value)
}

function minusMoneyC (){
  balanceChecking.textContent = Number(balanceChecking.textContent) - Number(enterAmountC.value)
}

depositC.addEventListener('click',addMoneyC)
withdrawC.addEventListener('click',minusMoneyC)

/*if (balanceSaving.textContent === NAN){
  return alert('What?')
}*/