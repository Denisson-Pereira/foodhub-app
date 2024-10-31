export const fillAllFields = (...fields: string[]): string | null => {
    const allFieldsFilled: boolean = fields.every(field => field.trim() !== '');
    return allFieldsFilled ? null : "Please fill in all fields!"; 
};