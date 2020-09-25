

/* ..:: transportation system ::.. */



//Strategy
class Transportation {
  constructor(company) {
    this.company = company
  }
  calculation(package) {
    return this.company.calculation(package)
  }
}


// Company's implementation
class CompanyA extends Transportation {
  calculation(package) {
    //all rules for implementation
    return 5.99
  }
}

class CompanyB extends Transportation {
  calculation(package) {
    //all rules for implementation
    return 10.00
  }
}

class CompanyC extends Transportation {
  calculation(package) {
    //all rules for implementation
    return 2.55
  }
}

const company = new Transportation(new CompanyA())

console.log("CompanyA: " + company.calculation({ test: 10 }));