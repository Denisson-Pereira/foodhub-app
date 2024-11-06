export function pattersValues(value: string) {
    const amount = Number(value) / 100;
    return amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}
