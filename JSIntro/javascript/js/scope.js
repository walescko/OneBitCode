let variable = "variavel externa";

function scopeInner() {
  variable = "variavel interna";
}

console.log(variable);
scopeInner();
console.log(variable);

function animale() {
  let animale = "cat";
}

animale();
console.log(animale);
