a=1
for i in *.jpg; do
  new=$(printf "%01d.jpg" "$a") #04 pad to length of 4
  mv -- "$i" "$new"
  let a=a+1
done
