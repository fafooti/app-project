import Faq from "@/components/FAQ/Faq";
import Layout from "@/layouts/Layout";
import React, { useState } from "react";
const faqData = [
  {
    id:0,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
  {
    id:1,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
  {
    id:2,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
  {
    id:3,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
  {
    id:4,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
];
function index() {
  const [openFaqId, setOpenFaqId] = useState(null);
  const handleToggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <Layout>
      <div
        style={{ background: "url('/background/hero.svg')" }}
        className="!bg-no-repeat !bg-contain h-screen  mx-auto  "
      >
        <div className="flex flex-col mx-auto items-center text-center justify-start pt-24 md:w-4/5">
          <p className="text-white md:text-5xl text-3xl mb-5 font-semibold uppercase">
            our products
          </p>
          <p className="text-secondaryPurple  md:max-w-2/5 mb-8 font-moderat text-lg  ">
            SSZ Solutions offers high-quality, reliable products for amazing
            prices and the best customer
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          {faqData.map((item) => (
            <Faq
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openFaqId === item.id}
              toggleFAQ={() => handleToggleFaq(item.id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default index;
