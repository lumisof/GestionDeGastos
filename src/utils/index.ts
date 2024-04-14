
export function formatCurrency(amount: number){
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency:'ARS' }).format(amount)
}

export function formatDate(dateStr: string):string{
    const dateObj = new Date(dateStr);
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year:'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Intl.DateTimeFormat('es-Es', options).format(dateObj)

}
