export const printAmount = (currency, amount, sdefault = null) => {
  let printedAmountString;
  if (amount === undefined || amount === null) {
    printedAmountString = sdefault;
  } else {
    let hasNegativeSign = false;
    if (amount < 0) {
      hasNegativeSign = true;
    }
    printedAmountString =
      (hasNegativeSign ? "-" : "") +
      currency +
      amount.toLocaleString(navigator.language, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      });
  }
  return printedAmountString;
};

export const formatTime = (datetemp) => {
  const tempDate = datetemp ? new Date(datetemp) : null;
  let tempHr,
    tempMin,
    tempSec = "";
  if (tempDate) {
    tempHr = tempDate.getHours().toString();
    tempHr = tempHr.length < 2 ? "0" + tempHr : tempHr;
    tempMin = tempDate.getMinutes().toString();
    tempMin = tempMin.length < 2 ? "0" + tempMin : tempMin;
    tempSec = tempDate.getSeconds().toString();
    tempSec = tempSec.length < 2 ? "0" + tempSec : tempSec;
    return `${tempHr} : ${tempMin} : ${tempSec}`;
  } else {
    return `00 : 00 : 00`;
  }
};
