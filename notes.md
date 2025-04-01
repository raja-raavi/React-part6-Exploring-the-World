# Episode : 5, part : 1

There are 2 ways to export the data

1. export default <name>
1. import <component> from "path"

1. named export - In single file we have to export multiple files
   export CONST_URL = "https./jnascaobobaobacb"
1. export {CONST_URL} form "path"

H/W - can I use default export along with named export?

Yes - we can use the combination of both

# useState :

When ever a sate variable changes recat will re-render the component - How do you prove this statement? -> Just log it in console
If any viarbles changes from one value to another value then React don't capable of track changes whether ti got changed or not...Instead it come up with new one called useState() hooks
Why we need use state? is it not possible with local variables i.e JS variables? Just try below example then u will got all answers
**\***Just try the login and logout example, just try with normal JS way first and then try with useState - now u can see the difference
It will changing from login to logout fine.. but how will it chanigng the CONST variable? It will become a new variable i.e instance and the <varaible name> is different than the older <variable name>

//simply the variable is one but the data is going to varaible is different types from different souces

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
