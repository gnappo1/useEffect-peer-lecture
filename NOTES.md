1. Add state to JokesContainer
- How do we call it? 
- What should the default value be? 
- What do we mean by destructuring?

2. Fetch API
- What does fetch() create and return?
- What does json() do on the response object?
- async/await syntax

3. Fire the fetch call on its own: what happens?

4. useEffect to the rescue!
- syntax: useEffect(callback, [])
- add a console.log inside and one outside of useEffect
- callback notes: sync or async? Invoke fetch function inside or pass as argument
- deps notes: has to be there? has to be empty? how does it relate to the component lifecycle/sync with props&state?
- deps: If you only use some functions inside an effect, move them directly into that effect. Then you don't have to list them in the deps array.

5. RECAP: 
- useEffect is in sync with lifecycle: after birth, after evolutions, before death. Different than interactive with React's Synthetic Event System.
- takes a cb; the cb performs side effects and must be synchronous.
- takes a cb and a dependency array; the array tracks the value that force useEffect to reinvoke the cb. 

5. Timer Exercise
- Add Timer component: state, useEffect, timer on page
- Conditionally display the timer with a button located inside App