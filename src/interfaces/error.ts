export default interface ErrorResponse {
    message: string;
    dateHour: string; // Pode ser ajustado para `Date` se o valor for um timestamp
    status: number;
}
