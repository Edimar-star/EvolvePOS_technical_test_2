export const formatPhone = (phone: string) : string => phone
    .replace(/[^\d+]/g, "")
    .replace(/(\+\d{2})?(\d{0,3})?(\d{0,3})?(\d{0,4})?/, 
        (_, a, b, c, d) => [a, b, c, d].filter(Boolean).join(" "))
    .trim();