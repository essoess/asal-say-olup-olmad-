//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 1) {
      console.log("En küçük asal sayı 2 dir.Girilen sayı : " + numbers[i]);
      i += 1;
    }
    let count = 0;

    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        count++;
      }
    }
    if (count == 0) {
      console.log(numbers[i] + " asal sayıdır");
    } else {
      console.log(numbers[i] + " asal sayı degildir");
    }
  }
}