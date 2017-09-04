function fruitgame(){
    var list = ["apple", "pear", "peach", "banana", "cherry", "melon", "lemon", "strawberry", "mango", "papaya"];
    var rightFruit = 0;
    var fruit;
    var fruitStored = [];
    for(var i = 0; i < 5; i++){
        fruit = prompt('You have still ' + (5 - i) + ' attempts and we have ' + (list.length - rightFruit) + ' different fruits. You have ' + rightFruit * 10 + ' points');
        var fruitinlist = false;
        for (var f=0; f< list.length; f++){
            if(fruit == list[f]){
                var check = false;
                fruitinlist = true;
                for (var j=0; j< fruitStored.length; j++){
                    if(fruit == fruitStored[j]){
                        check = true;
                        alert(fruit + ' is already in your list');
                    }
                }
                if(check == false){
                    alert('We have ' + fruit + '. Bravo! +10 points')
                    fruitStored.push(fruit);
                    rightFruit++;
                    break;
                }
            }
        }
        if(!fruitinlist)
                alert("We don't have the " + fruit + " fruit");
    }
    alert("Your final score is " + rightFruit * 10 + " points!");
}
                     



function numbergame(){

var secret = Math.floor((Math.random() * 100) + 1);
var l = false;
var level;
while(l != true){
    level = parseInt(prompt('Choose the level between 1(very easy) and 5(extreme)'));
    if(isNaN(level))
        alert("You didn't insert a integer number");
    else if(level > 5 || level < 1)
        alert("You didn't insert a number between 1 and 5");
    else
        l = true;
}
var attempts;
switch(level) {
    case 1:
        attempts = 15
        break;
    case 2:
        attempts = 10
        break;
    case 3:
        attempts = 8
        break;
    case 4:
        attempts = 6
        break;
    case 5:
        attempts = 4
        break;
    default:
        break;
}    

var guess;
var finished = false;
var max = 100;
var min = 1;
var c = 0;
while(finished != true){
    guess = parseInt(prompt('Guess the secret number [' + min + '-' + max + ']       You have other ' + (attempts - c) + ' attempts'));
    if(isNaN (guess))
        alert("You did not insert a integer number");
    else{
        c++;
        if (guess == secret){
            alert("You won! You did it with " + c + " attempts");
            finished = true;
        }
        else
            {
            if(c>=attempts){
                alert("You lose! You didn't find the secret number! The secret number was " + secret);
                finished = true;
            }
            else if(max >= guess & guess > secret){
                max = guess - 1;
                alert("The secret number is less than " + guess);
            }
            else if(min <= guess & guess < secret){
                min = guess + 1;
                alert("The secret number is more than " + guess);
            }
            else{
                alert(guess + " is not in the possible range");
            }
            }
    }
}
}


function game(event){
    if(this.options[this.selectedIndex].text == 'Fruit')
        fruitgame();
    else
        numbergame();
}