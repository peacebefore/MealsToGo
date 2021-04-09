import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51IGZh2CBMSD9L0WHM0EbwT2BIk1r1bjq4B4tWjkobf2u0GPkQZ3VVRTZGx6df3ZW3G9Msnxn6wRyMilRqYyRcyA800blYIYark"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
