let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function print(arr){
    for(var i=0; i<arr.length; i++){
        console.log('name: ' + students[i].name + ', cohort: '+students[i].cohort);
    }
}
print(students);


let users = {
	employees: [
        {first_name: 'Miguel', last_name: 'Jones'},
        {first_name: 'Ernie', last_name: 'Bertson'},
        {first_name: 'Nora', last_name: 'Lu'},
        {first_name: 'Sally', last_name: 'Barkyoumb'}
	],
	managers: [
       {first_name: 'Lillian', last_name: 'Chambers'},
       {first_name: 'Gordon', last_name: 'Poe'}
	]
};

function list(arr){
	
    for (i in users){
		counter = 1;
		console.log(i.toUpperCase());
	    for (j in users[i]) {
		    
		    firstName = users[i][j].first_name.toUpperCase();
		    lastName = users[i][j].last_name.toUpperCase();
            nameCount = firstName.length + lastName.length;
            
		    console.log(`${counter++} - ${firstName}, ${lastName} - ${nameCount}`);
		}
	
	}

}
list(users);