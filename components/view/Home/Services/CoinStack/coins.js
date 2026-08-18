/**
 * Decorative coin data for the home hero illustration.
 *
 * Nothing here is a real quote — `price` is only a reference level that the
 * component jitters around, and `trend` is a notional day-change so the
 * percentages stay varied. No network calls are involved.
 *
 * vol   how far a roll may land from `price`, as a fraction
 * dp    decimal places — cheap coins need more or they look frozen
 * trend notional day-change added to the rolled deviation
 */
const COINS = [
  {
    id: "btc",
    name: "Bitcoin",
    sym: "BTC",
    amount: 0.025,
    price: 96384.2,
    vol: 0.022,
    dp: 2,
    trend: 16.2,
    paths: [
      { d: "M9.1 3.4h1.8v2.2h1.3V3.4h1.8v2.3c2 .3 3.3 1.3 3.3 3 0 1.2-.6 2-1.6 2.4 1.4.4 2.2 1.3 2.2 2.8 0 2-1.5 3.2-3.9 3.4v2.3h-1.8v-2.2h-1.3v2.2H9.1v-2.2H6.3v-1.9h1.2c.4 0 .6-.2.6-.6V8.2c0-.4-.2-.6-.6-.6H6.3V5.7h2.8V3.4Zm1.7 5.9h2.1c1 0 1.6-.4 1.6-1.2s-.6-1.2-1.6-1.2h-2.1v2.4Zm0 5h2.4c1.1 0 1.8-.5 1.8-1.3s-.7-1.3-1.8-1.3h-2.4v2.6Z" },
    ],
  },
  {
    id: "eth",
    name: "Ethereum",
    sym: "ETH",
    amount: 1.28,
    price: 3412.65,
    vol: 0.025,
    dp: 2,
    trend: 3.2,
    paths: [
      { d: "M12 2.2 5.6 12.1 12 15.8l6.4-3.7L12 2.2Z", opacity: 0.55 },
      { d: "M12 2.2v13.6l6.4-3.7L12 2.2Z" },
      { d: "M12 17.2 5.6 13.5 12 21.8l6.4-8.3-6.4 3.7Z", opacity: 0.8 },
    ],
  },
  {
    id: "usdt",
    name: "Tether",
    sym: "USDT",
    amount: 256,
    price: 1,
    vol: 0.004,
    dp: 4,
    trend: 0,
    paths: [
      { d: "M4 4h16v3.4h-6.1v2.2c3.5.2 6.1 1 6.1 1.9s-2.6 1.7-6.1 1.9v6.1h-3.8v-6.1C6.6 13.2 4 12.4 4 11.5s2.6-1.7 6.1-1.9V7.4H4V4Z" },
    ],
  },
  {
    id: "sol",
    name: "Solana",
    sym: "SOL",
    amount: 12.4,
    price: 214.83,
    vol: 0.03,
    dp: 2,
    trend: 5.4,
    paths: [
      { d: "M5.6 15.9c.1-.1.3-.2.5-.2h12.6c.3 0 .4.3.2.5l-2.5 2.5c-.1.1-.3.2-.5.2H3.3c-.3 0-.4-.3-.2-.5l2.5-2.5Z" },
      { d: "M5.6 5.3c.1-.1.3-.2.5-.2h12.6c.3 0 .4.3.2.5L16.4 8.1c-.1.1-.3.2-.5.2H3.3c-.3 0-.4-.3-.2-.5l2.5-2.5Z" },
      { d: "M16.4 10.6c-.1-.1-.3-.2-.5-.2H3.3c-.3 0-.4.3-.2.5l2.5 2.5c.1.1.3.2.5.2h12.6c.3 0 .4-.3.2-.5l-2.5-2.5Z" },
    ],
  },
  {
    id: "xrp",
    name: "XRP",
    sym: "XRP",
    amount: 480,
    price: 2.41,
    vol: 0.035,
    dp: 4,
    trend: -2.8,
    paths: [
      { d: "M6.6 5.2 12 10.6l5.4-5.4 1.9 1.9-5.4 5.4 5.4 5.4-1.9 1.9-5.4-5.4-5.4 5.4-1.9-1.9 5.4-5.4-5.4-5.4 1.9-1.9Z" },
    ],
  },
  {
    id: "ton",
    name: "Toncoin",
    sym: "TON",
    amount: 150,
    price: 5.62,
    vol: 0.032,
    dp: 3,
    trend: 1.9,
    paths: [
      { d: "M12 2.2 2.9 8.5 12 21.8l9.1-13.3L12 2.2Zm-1.1 3.9v9.2L5.5 8.9l5.4-2.8Zm2.2 0 5.4 2.8-5.4 6.4V6.1Z" },
    ],
  },
];

export const formatMoney = (value, dp = 2) =>
  "$" +
  value.toLocaleString("en-US", {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  });

export const formatAmount = (value, sym) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: value < 1 ? 3 : 2,
    maximumFractionDigits: value < 1 ? 3 : 2,
  }) +
  " " +
  sym;

export default COINS;
