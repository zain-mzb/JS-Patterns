function Fedex(){
    this.calculate = package =>{
        // fedex calculations
        return 2.45
    }
}

function UPS(){
    this.calculate = package =>{
        //UPS Calculations
        return 1.56
    }
}

function USPS(){
    this.calculate = package =>{
        //USPS Calculations
        return 4.5
    }
}


const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

const package = {from :"Alabama", to :"Georgia", weight : 1.56} 

// Without Strategy pattern
// fedex.calculate(package)

// ups.calculate(package)

// usps.calculate(package)

function Shipping(){
    this.company = ""
    this.setStrategy = (company)=>{
        this.company = company
    }
    this.calculate = package =>{
        return this.company.calculate(package)
    }
}

const shipping = new Shipping()

shipping.setStrategy(fedex)
console.log('Fedex: ' + shipping.calculate(package));

shipping.setStrategy(ups)
console.log('UPS: ' + shipping.calculate(package));

shipping.setStrategy(usps)
console.log('USPS: ' + shipping.calculate(package));