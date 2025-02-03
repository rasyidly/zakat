export function toRupiah(value: number): string {
    const number = Math.abs(Number(value))

    const options: object = {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    };

    return new Intl.NumberFormat('id-ID', options).format(number);
}
