'use client';
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { createOrder, getCartTotal } from '@/redux/slices/cart.slice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StripeCardElement } from '@stripe/stripe-js';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import CustomInput from '@/components/forms/CustomInput';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  billing_details: Yup.object().shape({
    address: Yup.object().shape({
      city: Yup.string().required('city required!'),
      country: Yup.string()
        .required('country required!')
        .max(2, 'Please enter Country Code instead'),
      line1: Yup.string().required('street required!'),
      postal_code: Yup.string().required('postal_code required!')
    }),
    email: Yup.string().required('email required!'),
    name: Yup.string().required('name required!')
  })
});

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useAppSelector(getCartTotal);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const formik = useFormik<CheckoutPayload>({
    initialValues: {
      billing_details: {
        address: {
          city: '',
          country: '',
          line1: '',
          state: '',
          postal_code: ''
        },
        email: '',
        name: ''
      }
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = async (values: CheckoutPayload) => {
    if (!stripe || !elements) {
      return;
    }
    console.log('values', values);
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) as StripeCardElement,
      billing_details: values.billing_details
    });

    if (result.error) {
      console.error(result.error.message);
      Notify.failure(result.error.message!);
    } else {
      Notify.success(
        `Payment Done, with payment ID {${result.paymentMethod.id}}`
      );
      setTimeout(() => {
        router.push('/');
        dispatch(createOrder({ paymentId: result.paymentMethod.id }));
      }, 2000);
      // Send paymentMethod.id to your server to complete the payment
    }
  };
  return (
    <div className="leading-loose">
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 w-full mx-auto right-0 max-w-xl m-4 p-10 bg-white rounded"
      >
        <h1 className="text-gray-800 text-2xl font-bold my-3">
          Customer information
        </h1>
        <CustomInput
          labelText="Name"
          name="billing_details.name"
          type="text"
          required
          placeholder="Your Name"
          aria-label="Name"
          formik={formik}
        />

        <CustomInput
          labelText="Email"
          name="billing_details.email"
          type="email"
          required
          placeholder="Your Email"
          aria-label="Email"
          formik={formik}
        />

        <CustomInput
          labelText="Address"
          name="billing_details.address.line1"
          type="text"
          required
          placeholder="Street"
          aria-label="Address"
          formik={formik}
        />

        <CustomInput
          labelText="City"
          name="billing_details.address.city"
          type="text"
          required
          placeholder="City"
          aria-label="City"
          formik={formik}
        />

        <div className="grid grid-cols-2 w-full gap-3">
          <CustomInput
            labelText="Country Code"
            name="billing_details.address.country"
            type="text"
            required
            placeholder="Country Code"
            aria-label="Country Code"
            formik={formik}
          />
          <CustomInput
            labelText="Zip Code"
            name="billing_details.address.postal_code"
            type="text"
            required
            placeholder="Zip Code"
            aria-label="Zip Code"
            formik={formik}
          />
        </div>

        <hr className="my-4" />
        <div className="">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold">Total:</p>
            <p>${cartTotal}</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold">Discount:</p>
            <p>${0}</p>
          </div>
        </div>
        <hr className="my-4" />

        <CardElement className="border border-gray-300 rounded-md p-2 mb-4" />
        <div className="mt-4">
          <button
            className="px-4 py-2 text-white font-light tracking-wider bg-gray-900 rounded w-full"
            type="submit"
            disabled={!stripe}
          >
            Confirm Payment ${cartTotal}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
