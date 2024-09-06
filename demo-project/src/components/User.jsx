
export default function User () {
    
    const userName = "John";  //String
    const age = 10; // Number
    const job = 'enginerr'
    const userDetails = {
        name: "David",
        age: 15,
        job: "Software Engineer",
        working: true,
        details: {
            address: "Chennai",
            phone: 4523
        }
    }

    const {name, age:davidAge, details, working} = userDetails
    const {address, phone} = details
    console.log(name, age, job, address, phone);

  return(
    <>
    {age}
    {davidAge}

        {/* My Name is : {userName}, My Age is : {age}. */}
          {/* My New name is {name}, my age is {age} 
        and my job is {job}, 
        my current work status is {working ? "Working" : 'Not working'}.
        My details are {address} */}
    </>
  )
}

