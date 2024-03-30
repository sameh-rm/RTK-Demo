'use client';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import CheckoutCartItems from './CheckoutCartItems';

const stripePromise = loadStripe(process?.env?.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CheckoutPage = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 content-between w-full mx-auto px-4 py-10 bg-white border-b border-gray-200 items-start  justify-between my-4 rounded-md md:px-8 ">
      <div className="grid grid-cols-1 gap-4 mx-auto">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        <CheckoutCartItems />
      </div>
      <div className=" w-full">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
