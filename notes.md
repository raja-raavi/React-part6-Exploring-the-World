# Episode : 5, part : 1

There are 2 ways to export the data

1. export default <name>
1. import <component> from "path"

1. named export - In single file we have to export multiple files
   export CONST_URL = "https./jnascaobobaobacb"
1. export {CONST_URL} form "path"

H/W - can I use default export along with named export?

Yes - we can use the combination of both

State is a super powerFul variable in React.. How do you make it super powerful.. to do that we use hooks i.e useState
Definition : Whenever the state variables updates, React renders the component
Functional component at the end of the day is normal JS fn
Recat.createElement at the end of the day is a normal JS object
||y Hook are normal JS functions the onlly difference is, it comes it super powers

- useState() - superPowerful state variables in react
- useEffect()

Virtual DOM - it's a representation of Actula DOM and it's like a normal JS object

# Episode : 6, part : 1

Monolith Architecture - Everything combined in a single application. DB, Backend, Frontend, Cluod evrything combined so when we want to changea buttuonn color then we should run all the applications
again right. This is a time consuming proces
Everyone will work on same git hub repository and every one should work on backedn etc..
Would we like to work on java then our whole app need to work only on Java or pyhton

Micro services Architecture - Evrything is sepperated here. DB, Backedn, Frontend and Cloud developed seperatley and combined onw with other to work This is known as "SEPERATION OF CONCERN"
Each team should work on their repective team and havving different git hub repositries also cloud depolyement is seprate for each team
The biggest adavantage is we can use different text stacks for different services
On different ports we can run different services like Raect - 1234, backedn - 1080 etc

# Episode : 6, part : 2

We can make AIP call in 2 ways

page Loads -> API (500ms) |-> Render

page Loads -> Render Skeleton -> API -> Render (We use this approacch in React ans it's better user experience and dsn't fell lag)

# Episode : 6, part : 3

useEffect hook at EOD is just a normal JS function but it's having 2 arguments, (call back function, dependency array)

When we will call the callback function - After your component renderes
Simply if we want to do something after rendering the component then we can write it inside useEffect

body component will render first -> made api call -> fill data

useEffect(() => {
fetchData();
console.log("use effect hook called"); //called 2nd
}, []);

console.log("Body Rendered"); //called first useEffect call back fn executed

# Episode : 6, part : 4

What is conditional rendering... below is the conditional rendering

//conditional rendering
if (listOfRestaurants.length === 0) {
return <Shimmer />;
}
