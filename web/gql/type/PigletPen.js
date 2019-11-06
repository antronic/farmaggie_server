module.exports = `
  type PigletPenVaccineInjection {
    _id: String
    fmd: String
    csf: String
    pseudo: String
    created_at: String
    updated_at: String
  }

  type PigletPen {
    _id: String
    pig_amount: Int
    vaccine_injection: [PigletPenVaccineInjection]
    coop_number: Int
    created_at: String
    updated_at: String
  }

`