import Faq from "@/modules/FAQ/Faq";
import Layout from "@/layouts/Layout";
import React, { useState } from "react";
const faqData = [
  {
    id: 0,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
  {
    id: 1,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
  {
    id: 2,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
  {
    id: 3,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
  {
    id: 4,
    question: "Which payment methods do you accept?",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other crypto currencies.",
  },
];
function index() {
  return (
    <Layout>
      <div
        style={{ background: "url('/background/hero.svg')" }}
        className="!bg-no-repeat !bg-contain xl:w-[1216px]  w-11/12 min-h-[1000px] mx-auto  pt-20 pb-24 "
      >
        <div className="flex flex-col mx-auto items-center text-center justify-start mt-20 mb-20 md:w-4/5">
          <h1 className="text-white md:text-42 text-2xl mb-5 font-semibold uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-secondaryPurple  md:w-[713px]  font-moderat text-lg  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          {faqData.map((item) => (
            <Faq key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default index;
