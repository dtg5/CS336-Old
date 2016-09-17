// Daniel Garcia
// CS 336 - Lab 2: Javascript

//ENCAPSULATION

//Person object prototype definition
function Person(name,birthday,friends) {
    this.myName = name;
    this.mybirthDate = birthday;
    this.myFriends = [ friends ];
}

//Person object prototype function and setter/getter definitions
Person.prototype.setName = function(newname) {
    this.myName = newname;
}

Person.prototype.setBirthDate = function(newdate) {
    this.mybirthDate = newdate;
}

Person.prototype.addFriend = function(newfriend) {
//	var friendList = ;
	if (this.myFriends[0] == undefined) {
		this.myFriends[0] = newfriend;
	} else {
	this.myFriends.push(newfriend);
	}
}

Person.prototype.getName = function() {
    return this.myName;
}

Person.prototype.getBirthDate = function() {
    return this.mybirthDate;
}

Person.prototype.getFriends = function() {
	var allfriends = "";
	var myFriends = this.myFriends;
	if (myFriends[0] == undefined) {
		allfriends = "None.";
	} else if (myFriends.length == 1) {
		allfriends += myFriends[0].myName + ".";
	} else if (myFriends.length == 2) {
		allfriends += myFriends[0].myName + " and " + myFriends[1].myName + ".";
	} else {
		for (i = 0; i < myFriends.length-1; i++) {
			allfriends += myFriends[i].myName + ", ";
		}
		allfriends += "and " + myFriends[myFriends.length-1].myName + ".";
	}
	return allfriends;
}

Person.prototype.getAge = function() {
    var today = new Date();
    var birthDate = new Date(this.mybirthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

Person.prototype.sayHello = function() {
	if (this.myFriends[0] == undefined) {
		console.log("Hi, my name is " + this.myName + ", and I am " + this.getAge() + " years old. I have no friends.");
	} else if (this.myFriends.length == 1) {
		console.log("Hi, my name is " + this.myName + ", and I am " + this.getAge() + " years old. My friend's name is " + this.getFriends());
	} else {
		console.log("Hi, my name is " + this.myName + ", and I am " + this.getAge() + " years old. My friends are " + this.getFriends());
	}
}


// Testing begins below.
var p1 = new Person("Jerry","1979/6/23"); // New person, no friends yet.
console.log(p1);
p1.sayHello();
console.log(p1.myName + "'s age is: " + p1.getAge()); // Person 1's current age.
var p2 = new Person("Bob","1985/5/25",p1); // Another Person, and he evidently see's Person 1 as a friend.
console.log(p2);
p2.sayHello();
p1.setName("Gary"); // Person 1 name change.
p1.setBirthDate("1982/09/15"); // Person 1 birth date set.
p1.addFriend(p2);  // Person 1 returns friendship.
p1.getAge();
console.log(p1.mybirthDate);
console.log(p1);
console.log(p1.myName + " is " + (p1.getAge()-p2.getAge()) + " years older than " + p2.myName + ".");
var p3 = new Person("Joe");
var p4 = new Person("Tom");
var p5 = new Person("Evan");
var p6 = new Person("Ted");
p1.addFriend(p3);
p1.addFriend(p4);
p1.addFriend(p5);
p1.addFriend(p6);
console.log(p1.myName + " is friends with: " + p1.getFriends()); // Person 1 has many friends now.
p1.sayHello();

//INHERITANCE AND POLYMORHPISM

function Student(name, birthday, friends, subject) {
    Person.call(this, name, birthday, friends);
    this.myMajor = subject;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.setMajor = function(subject) {
	this.myMajor = subject;
}

Student.prototype.getMajor = function(subject) {
	return this.myMajor;
}

Student.prototype.sayHello = function() {
	if (this.myFriends[0] == undefined) {
		console.log("Hi, my name is " + this.myName + ", and I am student of " + this.myMajor + ".  I am " + this.getAge() + " years old, and I haven't made any friends yet.");
	} else if (this.myFriends.length == 1) {
		console.log("Hi, my name is " + this.myName + ", and I am student of " + this.myMajor + ".  I am " + this.getAge() + " years old, and my friend's name is " + this.getFriends());
	} else {
		console.log("Hi, my name is " + this.myName + ", and I am student of " + this.myMajor + ".  I am " + this.getAge() + " years old, and my friends are " + this.getFriends());
	}
}

// Testing begins here.
var s1 = new Student("Harry", "1998", p2, "German");
console.log(s1);
s1.sayHello();
s1.addFriend(p3);
s1.sayHello();
var s2 = new Student("Billy", "2000", s1, "Engineering");
s2.sayHello();

console.log("Is s1 an instance of both a Person and a Student?");
console.log(s1 instanceof Person);
console.log(" and ");
console.log(s1 instanceof Student);

// Way too much effort was put into grammatical correctness. Alas.
