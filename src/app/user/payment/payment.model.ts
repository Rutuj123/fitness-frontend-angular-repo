export interface CreatePaymentRequest{
    memberId: number;
    amount: number;
    paymentMethod: 'UPI' | 'CARD' | 'CASH'
}