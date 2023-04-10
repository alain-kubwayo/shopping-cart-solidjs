import { createSignal } from "solid-js";

const Card = (props) => {
    const [name, setName] = createSignal('alain');
    const [bool, setBool] = createSignal(true);
    const [age, setAge] = createSignal(25);
    const [person, setPerson] = createSignal({
        name: {
            first: "Alain",
            last: "Kubwayo"
        },
        age: 27
    })

    setTimeout(() => {
        setName('James');
    }, 1000)

    setTimeout(() => {
        // setBool(false);
        // setBool(!bool()); // prevValue
        // setBool(() => {
        //     return false;
        // })
        setBool(prev => !prev);

    }, 2000)

    const ageInterval = setInterval(() => {
        // setAge(prevAge => prevAge + 1);
        setAge(age() + 1);
    }, 1000);

    clearInterval(ageInterval);

    // createSignal is not really optimized for deeply nested objects or arrays.
    // we couldn't pass in the last name directly, instead, we would have to re-write the whole object. It's a drawback. Instead, we use another function called createStore.
    setTimeout(() => {
        setPerson({
            name: {
                first: "Alain",
                last: "Ishimwe"
            },
            age: 27
        })
    }, 3000)

    return ( 
        <div 
            class="bg-white p-4 text-center"
            classList={
                { 
                    "rounded-md": props.rounded, 
                    "shadow-md": !props.flat 
                }
            }
        >
            <p>My name is {name()}</p>
            <p>The boolean is {bool().toString()}</p>
            <p>The age is {age()}</p>
            <p>My name is {person().name.first} {person().name.last} and age is {person().age}</p>
            { props.children }
        </div>
    );
}
 
export default Card;