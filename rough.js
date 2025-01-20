// closure
const firstfunction= () =>
    {
        console.log('I am the first function');

        const secondfunction= () =>
        {
            console.log('I am the second function');
        }   
    }
const closure= firstfunction()
console.log("closure",closure)
closure()

//one more code

const incrementdecremenet= () =>
{
    let count=0;
    return {
        increment: () => {
            count++;
            return count;
        },
        decrement: () => {
            count--;
            return count;
        },
        getcount: () => {
            return count;
        }
    }
}

const counter= incrementdecremenet();
console.log(counter.increment());
counter.increment();
console.log(counter.getcount());
counter.decrement();
console.log(counter.getcount());    

// call backs: function ma function nai parameter pass garim vane call back function vaninxa (vvi)


const sum= (a,b,callback) =>
{
    let temp= a+b;
    callback(temp);
}
sum(5,6,(result) => { //callback ko temp ko value result ma aayera basxa
    console.log(result);
})

//next example
const fetchdata= (callback) =>  
{
    let data="Data fetched from the server";
    if(data)
}