var output = "1 1";
var n = 20, f=0, s=1, sum=0;

for(var i=2; i<=n; i++) {
  sum = f + s;
  output += ' ' + sum;
  f = s;
  s = sum;
}

document.write(output);