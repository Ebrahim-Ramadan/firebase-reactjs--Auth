# firebase-reactjs--Auth
firebase-based emailandpassword auth + user auth state management by redux
<br>
this very basic insecure way of managing the user's auth state by Redux is so bad and here's bunch of reasons:
<br>
1 - Redux is primarily designed for managing application state globally, while route protection is a concern related to navigation and access control. By using ProtectedRoutes, you separate the concerns of authentication and authorization from the application state management, making your codebase more modular and easier to maintain.
<br>
2 - Protected routes can provide an extra layer of security for your application. With Redux alone, if someone gains access to the Redux store, they might be able to manipulate the authentication state and gain unauthorized access to protected parts of your app. Protected routes, on the other hand, are typically implemented using higher-order components or route guards, which can prevent unauthorized users from accessing certain pages or components altogether.
<br>
3 - As you can see, I just wanted to deliver the simple basic idea of how all this works, following Protected Routes and AUTHENTICATION CONTEXT makes it all Easier Implementation of Access Control Logic: While you can implement access control logic in Redux, it might become more complex and difficult to maintain as your application grows. With protected routes, you can utilize built-in navigation guards (e.g., React Router guards) to handle access control more efficiently and intuitively.

<br> <br>  THIS IS A FIRST-CLASS WARNING TO NOT FOLLOW THIS TECHNIQUE
