'use strict';

/* ..:: transportation system ::.. */


// Context
class Transportation {
  calculation(company) {
    return company.calculation()
  }
}

//Strategy
class CompanyStrategy {

  calculation() {
    return this.calculationTransport()
  }
}


// Company's implementation
class CompanyA extends CompanyStrategy {
  calculationTransport() {
    //all rules for implementation
    return "5.99"
  }
}

class CompanyB extends CompanyStrategy {
  calculationTransport() {
    //all rules for implementation
    return "10.00"
  }
}

class CompanyC extends CompanyStrategy {
  calculationTransport() {
    //all rules for implementation
    return "2.55"
  }
}

const company = new Transportation()

console.log("CompanyA: " + company.calculation(new CompanyA()));
console.log("CompanyB: " + company.calculation(new CompanyB()));
console.log("CompanyC: " + company.calculation(new CompanyC()));