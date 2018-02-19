class Atm {
  constructor(ownerName, type) {
    this.ownerName = ownerName
    this.type = type
    this.money = 0
    this.transactionHistory = []
  }

  withdraw(amount){
    if (this.money - amount < 0 && this.type !== "credit"){
      console.log("withdrawal failed")
      return
    }

    this.money -= amount
    this.transactionHistory.push(new HistoryItem("withdraw",amount))
  }

  deposit(amount){
    this.money += amount
    this.transactionHistory.push(new HistoryItem("deposit",amount))
  }

  showBalance(){
    console.log("your " + this.type + " balance is " + this.money)
  }

  showHistory(){
    console.log(this.ownerName + " transaction history : ")
    this.transactionHistory.forEach(function(t){
      t.show()
    })
  }
}

class HistoryItem {
  constructor(type, amount) {
    this.type = type
    this.amount = amount
  }

  show(){
    console.log(this.type + ": " + this.amount)
  }
}

var miaAcc = new Atm("Mia", "saving")
var marleyAcc = new Atm("Marley", "checking")
var tuituiAcc = new Atm("TuiTui", "checking")
var mellyAcc = new Atm("Melly", "credit")
// miaAcc.deposit(1000)
// miaAcc.deposit(12000)
// miaAcc.withdraw(1)
// marleyAcc.withdraw(100)
// tuituiAcc.deposit(1)
// tuituiAcc.withdraw(10)

mellyAcc.withdraw(100)
mellyAcc.withdraw(1000)
mellyAcc.showBalance()
mellyAcc.showHistory()

// miaAcc.showBalance()
// tuituiAcc.showBalance()
// marleyAcc.showBalance()

// miaAcc.showHistory()