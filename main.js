// Q13:
// Your Own Array:Think or your favorite mode of transportation, such as a motorcycle
// or a car, and make a list that stories several examples. Use your list to print a
// series a statements about these items, such as "I would like to own Honda 
// motorcycle."
var myTransport = ["Car", "Bus", "Bike", "Train", "Aroplane"];
for (var i = 0; i < myTransport.length; i++) {
    console.log('I would like to own a ${myTransport[i]}');
}
myTransport.map(function (i) {
    console.log('I would like to own a ${i}');
});
//Q14:
// Guest List: if you could invite anyone, Living or deceased, to dinner, who would you 
// invite? make a list that includes at least three people you'd like to invite to dinner.
// then use your list to print a message to each person, inviting them to dinner.
// const guest: string[] = ["Ayesha","Aiman","Rubab","Farwa"];
// // for (let i=0;i<guest.length;i++){
// //     console.log('Dear ${guest[i]}! I would like to invite you for dinner on Sunday');
// // } 
// guest.map((i)=>{
//     console.log('Dear ${i}! I would like to invite you for dinner on Sunday.');
// })
// Q15:
// changing Guest List: You just heard one of your guests can't make Use dinner, so 
// you need so send out a new set of invitations. You'll have to think of someone 
// else to invite.
// Start with your program from Exercise 14. Add a print statement at tha end of your
// program stating the name of the guest who can't make it.
// Modify your list, replacing the name of the guest who can't make it with the  name
// of the new person you inviting.
// print a second set of invitation messages, one for each person who is still in your
// list.
var guest1 = ["Ayesha", "Aiman", "Rubab", "Farwa"];
console.log('Due to some reosone ${guest1[1]} will not come on my dinner');
guest1[1] = "Hudaim";
for (var i = 0; i < guest1.length; i++) {
    console.log('Dear ${guest1[i]}! I would like to invite yuo for dinner on sunday.');
}
