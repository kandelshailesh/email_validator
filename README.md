### @shaileshkandel123/match_email

## Email Match
Email Match is used to match whether the entered email match the real email pattern or not. It provides the function which work on single email or multiple emails.


## Installation
Install the dependencies .

```sh
 $ npm install @shaileshkandel123/match_email
```

## Usage 

### For single email

#### testemail() function is used.
```sh
const email_match = require('@shaileshkandel123/match_email');
//Test Email 
const email1 = "shaileshkandel123@gmail.com"
const email2 = ".shaileshkandel123@gmail.com"
//For testing this test email match the real email or not
const result1 = email_match.testemail(email1); // result1 = true
const result2 = email_match.testemail(email2); // result1 = false
```

### For multiple email
#### testmultipleemail() function is used.
```sh
const email_match = require('@shaileshkandel123/match_email');
//Test Email 
const email =["sha@gmail.com","123shaileshkandel123@gmail.com",".shaileshkandel123@gmail.com"];
//For testing this test email match the real email or not
const result = email_match.testmultipleemail(email) 
// result= [true,true,false]
```
## About Author
Shailesh Kandel [Facebook](https://www.facebook.com/shivramkri) [GitHub](https://github.com/kandelshailesh/email_validator)
## License
MIT © [kandelshailesh](https://github.com/kandelshailesh/email_validator)


