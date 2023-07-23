let roll_number_close_friend = [45,47,56,23,12,656.888,"my name is", !true]
// in this we can write different data type values in one variables
console.log(roll_number_close_friend)

// differeniate thing array- mutable and we can store multiple data type values
roll_number_close_friend[5]= 45.666
console.log(roll_number_close_friend[5])
roll_number_close_friend[6]="bhenchod kam kar lee money need to be earn"
console.log(roll_number_close_friend[6])
console.log( roll_number_close_friend)

// we have some methods in array as similar as string

// 1.method to convert array into string but on a tempoary basis
let garbage = [34,45,12,78,09]
let c = garbage.toString()
console.log(typeof c)
console.log(typeof garbage)

// 2. method join - in which element of array will join by a symobol or whatever we use in inverted comas 
// and it will make it string as a default

let kkk = [33,45,343,545]
let something =kkk.join("%")
console.log(something)
console.log(typeof something)
console.log(kkk)

// 3. popup method to remve end element of the array

let delhi = [34,87,56564,54876,767654]
let removal = delhi.pop()
console.log(removal)
delhi.pop();
console.log(delhi)

// in this method we can see permanent change in the element of the array

// 4. push method to add a new element at the end of the array

let yoo =[654,676,4544,46]
let juot =yoo.push(45455)
console.log(yoo)

console.log(juot)
// in this method we can see permanent change in the element of the array

// 5. method shift  will remove first element of the array
let old = [45,65764,7687,6576]
old.shift
console.log(old)

// it will modify orginal array

// 6. unshift is the opposite of  above one by using this we can add one Element in the starting of the array

let hooo =[ 34534,345,3535,45]
hooo.unshift(111111)
let nnnn = hooo.unshift()
console.log(hooo)
console.log(nnnn)

// it will modify orginal array it also return lenght of the array

7.

let www= [534,000,002,767,8]
delete www[3]


console.log(www)
// it will modify orginal array it also return lenght of the array
//  for further information go through your copy

// 8. concatiation is just like fuction of the string its used to join two or more array at one place

let zz =[2000,199,333,65,54,65]
let zx = [900,800,700,600,500]
let zu= [444,22,33,777,999]

let hgl =zz.concat(zx,zu)
console.log(hgl)

console.log(zx)
// orginality of the array will noteffect

let milf = [34,45,39,37,561,43,12,329,5433]
let milf2 = milf.sort()
console.log(milf2)
console.log(milf)

// if you use sort fuction  then orignality of the array will effect

milf.reverse()
console.log(milf)
console.log(milf2)
// orginality will effect

// another fuction splice 

let slice = [34,545,34,34,7,575]
slice.splice(1,3,1111,2222,3333,8888,666)
console.log(slice)

// orginity will effect and no need of  another array for this purpose

let maza =[23,45,11,8,675,56,655,76776,3354]
maza.slice(2)
// for the true fuction of type you need to create a new array

console.log(maza)
let penis = maza.slice(3)
console.log(penis)
let clit =maza.slice(1,5)
console.log(clit)