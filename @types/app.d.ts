interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  slug: string;
}

interface FilterOptions {
  productName: string;
  minPrice: number;
  maxPrice: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface Order {
  paymentId: string;
}

type CheckoutPayload = {
  billing_details: {
    address: {
      city: string;
      country: string;
      line1: string;
      state: string;
      postal_code: string;
    };
    email: string;
    name: string;
  };
};
