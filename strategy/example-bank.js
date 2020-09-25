/* ..:: Bank System ::.. */

// Context

class Payment {
  pay(processor) {
    return processor.pay()
  }
}


// Strategy

class Bank {

  constructor(ammount, account) {
    this.ammount = ammount
    this.account = account
  }
  pay() {
    return this.processPayment()
  }
}

// Bank's

class BankA extends Bank {
  processPayment() {
    console.log(`Payment ${this.ammount} for ${this.account} by BankA`)
  }
}

class BankB extends Bank {
  processPayment() {
    console.log(`Payment ${this.ammount} for ${this.account} by BankB`)
  }
}

class BankC extends Bank {
  processPayment() {
    console.log(`Payment ${this.ammount} for ${this.account} by BankC`)
  }
}

// Usability

const payment = new Payment()

payment.pay(new BankA(100, "00123456789"))
payment.pay(new BankB(200, "00123456789"))
payment.pay(new BankC(300, "00123456789"))