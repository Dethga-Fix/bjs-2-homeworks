function getArrayParams(...arr) {
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };
  
  let mn = arr[0];
  let mx = arr[0];
  let s = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mn) mn = arr[i];
    if (arr[i] > mx) mx = arr[i];
    s += arr[i];
  }
  
  const avg = Number((s / arr.length).toFixed(2));
  
  return { min: mn, max: mx, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let mn = arr[0];
  let mx = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mn) mn = arr[i];
    if (arr[i] > mx) mx = arr[i];
  }
  
  return mx - mn;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sEven = 0;
  let sOdd = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sEven += arr[i];
    } else {
      sOdd += arr[i];
    }
  }
  
  return sEven - sOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sEven = 0;
  let cEven = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sEven += arr[i];
      cEven++;
    }
  }
  
  if (cEven === 0) return 0;
  
  return sEven / cEven;
}

function makeWork(arrOfArr, func) {
  let mxRes = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const res = func(...arrOfArr[i]);
    
    if (res > mxRes) mxRes = res;
  }
  
  return mxRes;
}