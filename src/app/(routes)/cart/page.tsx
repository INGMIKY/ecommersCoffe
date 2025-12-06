"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./component/CartItem";
import { makePaymentRequest } from "@/api/payment";

const Page = () => {
  const { items } = useCart();
  const prices = items.map((product) => product.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  const buyStripe = async () => {
    try {
      const res = await makePaymentRequest.post("/api/orders", {
        products: items,
      });

      const url = res.data?.url;
      if (!url) {
        console.error("❌ No se recibió la URL de Stripe desde el backend");
        return;
      }

      // ✅ Nueva forma oficial
      window.location.href = url;
    } catch (error) {
      console.error("Error al procesar el pago", error);
    }
  };
  

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shopping cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No hay productos en el carrito</p>}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-semibold">Order Summary</p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Order total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={buyStripe}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
