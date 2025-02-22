export const formatPhone = (phone: string) : string => {
    let digits = phone.replace(/[^\d+]/g, "");

    return digits.replace(/^(\+\d{1,2})?(\d{3})?(\d{3})?(\d{3,4})?/, 
        (_, p1, p2, p3, p4) => {
            return [p1, p2, p3, p4].filter(Boolean).join(" ");
        }
    );
}