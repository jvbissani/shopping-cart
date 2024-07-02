const formatCurrency = (value, currency) => {
  return value.toLocaleString('us', { style: 'currency', currency });
};

export default formatCurrency;