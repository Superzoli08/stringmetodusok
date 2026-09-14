let txt = "zolialegjobbesezbiztos";
console.log(txt.slice(0, 5)); // elso 5 karakter
console.log(txt.slice(3, 8)); // 4. és 8. karakter között
console.log(txt.slice(5)); // 5. karaktertol
console.log(txt.toUpperCase()); // nagybetusiteslet result = "";
let result = "";
for (let i = 0; i < txt.length; i++) {
  if (i % 2 === 1) { 
    result += txt[i].toUpperCase(); // Minden 2. betű nagybetű
  } else {
    result += txt[i].toLowerCase(); // A többi kisbetű
  }
}
console.log(result);
console.log(txt.replaceAll("e", "E"));
const tomb = txt.split("e");
console.log(tomb);
