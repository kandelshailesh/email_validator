//Regular expression for email 
var email_regex= /^[a-zA-Z#$%_{}-]+(\.?[a-zA-Z0-9#$%_{}-]+)*@([a-zA-Z]+[a-zA-Z]*\.)*[a-zA-Z]+$/gm;

const testemail = (email1) =>
{
var a = email_regex.test(email1);
email_regex.lastIndex = 0;
return a; 
}

const testmultipleemail = (email_list) =>
{
const multiple_result =[];
email_list.forEach((result,i)=>
{
multiple_result.push(testemail(result))
})
return multiple_result;
}

// var email = ["sha@gmail.com","123shaileshkandel123@gmail.com"];
// var result =  testmultipleemail(email);
// console.log(result);


