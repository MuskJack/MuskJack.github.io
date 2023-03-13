import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import { useTranslation } from 'react-i18next';

const BasicStack = () => {
  const {t} = useTranslation();
  const listItems = [
    {
      id: 0,
      title: t("1. How do I buy cryptos?"),
      body:
        t("During the face-to-face transaction processes, you give us cash and confirm the amount, we will transfer cryptos to your address. You will receive an invoice.")
    },
    {
      id: 1,
      title: t("2. Do I need to provide identity verification documents?"),
      body:
        t("Transaction amount <= 80,000 HKD: No identity verification are required. Transaction amount >80,000 HKD: You are required to provide your HKID / valid passport. You may be required to provide address proof (recent 2 months).")
    },
    {
      id: 3,
      title: t("3. How long will I receive the bitcoins?"),
      body:
        t("It depends on the blockchain network. While the transaction is waiting to be confirmed on blockchains, it obtains number of confirmations. 3 confirmations is assumed to be safe and irreversible in general. Each confirmation generally takes 10 minutes on average. Therefore, normally in total 30 minutes is required to complete the transaction. However, if blockchain congestion occurs, it could take up to a few hours to finish a transaction.")
    },
    {
      id: 4,
      title: t("4. What payment method do you accept?"),
      body:
        t("We accept cash / bank transfer / fps.")
    },
    {
      id: 5,
      title: t("5. Why should I choose BB Squid?"),
      body:
        t("We will try our best to provide customers with low prices to buy and sell cryptocurrencies without additional fees, and even if you are a customer who has just joined the currency market, we will try our best to assist.")
    },
    {
      id: 6,
      title: t("6. Is it legal to purchase Bitcoins in Hong Kong?"),
      body:
        t("Yes, it is absolutely legal, as long as your funds are legally obtained.")
    },
    {
        id: 7,
        title: t("7. What is the minimum transaction volume?"),
        body:
          t("We does not set a minimum transaction volume, customers can buy any amount of cryptocurrency.")
    },
    {
        id: 8,
        title: t("8. In addition to usdt, which cryptocurrencies can be traded?"),
        body:
          t("We support trading mainstream cryptocurrencies, you can check the supported cryptocurrencies on the homepage.")
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <>
      <section className="list">
        {listItems.map(item => (
          <button
            key={item.id}
            className="list-item"
            open={active === item.id || false}
            onClick={e => {
              e.preventDefault();
              if (active === item.id) {
                setActive(null);
              } else {
                setActive(item.id);
              }
            }}
          >
            <header className="list-item-title">
              <p style={{fontSize: '20px', color: 'orange', fontWeight: 'bold'}}>{item.title}</p>
              <i className="list-item-plus-icon" />
            </header>
            <div className="list-item-body">
              <article  className="list-item-article">{item.body}</article>
            </div>
            {/* <div className="list-item-body">
              <article  className="list-item-article">{item.body}</article>
            </div> */}
          </button>
        ))}
      </section>
      <footer className="credits" />
    </>
  );
};

export default BasicStack;