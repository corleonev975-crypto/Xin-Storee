
export type TransactionPayload = {
  productSlug: string;
  productName: string;
  userId: string;
  zoneId?: string;
  denominationName: string;
  price: number;
  paymentMethod: string;
};

export function generateTransactionId() {
  return "TRX-" + Math.random().toString(36).slice(2, 10).toUpperCase();
}

export async function createTransaction(data: TransactionPayload) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id: generateTransactionId(), status: "success", ...data };
}

export function getRandomStatus() {
  const statuses = ["pending", "success", "failed"] as const;
  return statuses[Math.floor(Math.random() * statuses.length)];
}
