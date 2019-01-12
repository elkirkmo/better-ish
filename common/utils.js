// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function convertHourToText(j) {
  const a = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three'];
  
  return a[Math.abs(j)];
}

export function convertMinuteToText(l) {
    const rounded = Math.round(l / 10) * 10;
    const b = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
  } 
   return b[rounded];
}

export function monthName(num) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[num];
}

export function showHide(arr) {
  arr.forEach(v => v.style.display === "none" ? v.style.display = "inline" : v.style.display = "none");
}