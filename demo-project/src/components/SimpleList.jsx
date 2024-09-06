
export default function SimpleList () {

    const fruits = ['Apple', 'Banana', 'Orange'];
    console.log(fruits);

    return(
        <>
           {
            fruits.map(
                (fruit, index)=>(
                    <li key={index}>{fruit}</li>
                )
            )
           }
        </>
    )
}


// map
// filter
// reduce