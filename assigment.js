

//Kilometer to Meter
function kilometerToMeter(kilometer) {
    return kilometer * 1000;
}


//budgerCalculator
function budgetCalculator(watch, phone, laptop) {
    var wtch = watch * 50;
    var phn = phone * 100;
    var lptp = laptop * 500;

    var total = wtch + phn + lptp + "$";
    return total;
}


// hoterCost
function hotelCost(day) {

    if (day <= 10) {
        return day * 100;
    }
    else if(day > 10 && day < 21){
        var days = day - 10;
        return (days * 80) + (10 * 100);
    }
    else if(day>20){
        var days = day - 10;
        var anotherDays = days - 10;
        return (10 * 80) + (anotherDays * 50) + (10 * 100);
    }
    
}


//megaFriend
function megaFriend(myarray){
    var maxlen = 0;
    var maxName = '';
    for (i=0; i<myarray.length; i++) {
      if (myarray[i].length>maxlen) {
        maxlen = myarray[i].length;
        maxName = myarray[i];
      }
    }
    return maxName;
}
var megaName = megaFriend(FriendName);

console.log(megaName);
