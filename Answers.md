1. What problem does the context API help solve?

    Prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions have types and payloads, to tell the reducer how to update state. The store is the application state which is altered by the reducer, based on the action type and payload sent in.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is something stored in the whole app, which can be used by each component via useContext or connect. Component state is local to the component, and goes away if it unmounts. Component state is good for something like input text, or anything that's needed only for that component. Application state is good for things that multiple components use, like "isLoggedIn".

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It lets us pass async functions to our action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I guess redux. Mostly because I have more practice with it. Maybe useContext is better though?