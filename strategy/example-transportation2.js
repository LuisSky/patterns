
/* ..:: transportation system ::.. */

class TransportStrategy {
  constructor(object) {
    this.object = object
  }
  getPay() {
    return this.getPriceTransport(this.object)
  }
}

class Transport {
  getPay(processor) {
    return processor.getPay()
  }
}

class companyA extends TransportStrategy {
  getPriceTransport(object) {
    const value = object.weight * 8.6
    return `R$ ${value.toFixed(2)}`
  }
}

class companyB extends TransportStrategy {
  getPriceTransport(object) {
    const value = object.weight * 9.5
    return `R$ ${value.toFixed(2)}`
  }
}

const transport = new Transport();
console.log("CompanyA: " + transport.getPay(new companyA({ weight: 30 })))
console.log("CompanyB: " + transport.getPay(new companyB({ weight: 30 })))