const testemail = (email1) =>
{

    
    var a = email_regex.test(email1);
    email_regex.lastIndex = 0;

    console.error(a);
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

var email = ["sha@gmail.com","123shaileshkandel123@gmail.com"];
var result =  testmultipleemail(email);
console.log(result);