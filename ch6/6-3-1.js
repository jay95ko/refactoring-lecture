// eslint-disable-next-line import/prefer-default-export
export function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const discountByQuantity = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shippingPrice = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - discountByQuantity + shippingPrice;
}
