export interface BusinessHours {
  label: string
  value: string
}

export const BUSINESS: {
  name: string
  phoneDisplay: string
  whatsapp: string
  email: string
  address: string
  mapsQuery: string
  hours: BusinessHours[]
} = {
  name: "Papelaria Rabisco",
  phoneDisplay: "(11) 90000-0000",
  whatsapp: "5511900000000",
  email: "oi@papelariarabisco.com.br",
  address: "Rua Baeta Neves, 482 — Baeta Neves, São Bernardo do Campo - SP",
  mapsQuery: "Rua Baeta Neves 482, São Bernardo do Campo, SP",
  hours: [
    { label: "Segunda a sexta", value: "9h30 às 19h" },
    { label: "Sábado", value: "9h30 às 17h" },
    { label: "Domingo", value: "fechado" },
  ],
}

export function whatsappLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`
}
