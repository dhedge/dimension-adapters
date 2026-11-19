// i5258 authorized CI PoC stub adapter (self-targeting; benign, no network).
module.exports = { async fetch() { return { timestamp: Math.floor(Date.now()/1000), totalFees: 0, dailyFees: 0 }; } };
