// Contact details assembled at runtime to prevent static scraping.
// Bots parse HTML/source; they don't execute JS to reconstruct these values.

const p1 = ["03", "5242", "8307"].join(" ")
const p2 = ["0404", "724", "145"].join(" ")
const p1Raw = p1.replace(/\s/g, "")
const p2Raw = p2.replace(/\s/g, "")

const emailUser = ["sjd", "autotrust"].join(".")
const emailDomain = ["gmail", "com"].join(".")
const email = `${emailUser}@${emailDomain}`

const SMS_BODY = encodeURIComponent(
  "Hi SJD Automotive, I'd like to enquire about a service. My vehicle is: [Make / Model / Year]. I'm available: [preferred time]. Thanks!"
)

const EMAIL_SUBJECT = encodeURIComponent("Service Request — SJD Automotive")
const EMAIL_BODY = encodeURIComponent(
  "Hi SJD Automotive,\n\nI would like to book a service / enquire about the following:\n\nService type:\n(e.g. Logbook Service / Roadworthy Certificate / Brake & Suspension / Tyre Fitting / Other)\n\nVehicle details:\n- Make & Model:\n- Year:\n- Odometer (approx.):\n- Registration number (optional):\n\nPreferred date & time:\n\nAdditional details or concerns:\n\nBest contact number:\n\nThank you,\n[Your name]"
)

export const contact = {
  phone1: { display: p1, href: `tel:${p1Raw}` },
  phone2: { display: p2, href: `tel:${p2Raw}` },
  sms:    { href: `sms:${p2Raw}?body=${SMS_BODY}` },
  email:  { display: email, href: `mailto:${email}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}` },
  maps:   {
    embed: "https://maps.google.com/maps?q=1%2F25%20Rodney%20Road%2C%20North%20Geelong&t=m&z=15&output=embed&iwloc=near",
    link:  "https://maps.google.com/?q=1/25+Rodney+Road,+North+Geelong+VIC+3215",
    display: "1/25 Rodney Rd, North Geelong VIC 3215",
  },
  facebook:  "https://www.facebook.com/SJD-Automotive-108170801468329/",
  instagram: "https://www.instagram.com/sjd_automotive/",
}
