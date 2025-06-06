### Using react router dom for navigation (Link)

Important thing while working with context is creating an initial state. This will define the starting values for the store.Create a constant called initialState, and it will include a watchList, which is an array of movies. To start, it will just be an empty array. We’ll also add a watched property, which will also be an array of movies. This sets up the initial state.

### GlobalState.jsx

This is a global context — basically a mini state manager — where we store two lists:
	•	watchlist: movies the user wants to watch
	•	watched: movies the user has already watched

This approach is a simpler alternative to Redux, and it’s built into React.

This component does the following:
	1.	Manages global state using useReducer
	2.	Listens for state changes and saves everything to localStorage
	3.	Exposes functions that dispatch actions
	4.	Wraps the entire app in <GlobalContext.Provider> so we can access global state and functions from any component

`  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
`

I used the Context API + useReducer to manage global state without needing extra libraries like Redux.

The state is stored in localStorage, so the user doesn’t lose their data between sessions.

### AppReducer.jsx

This is a regular reducer function — it takes the current state and an action, and returns a new state depending on the action type.

It handles the following actions:
	•	"ADD_MOVIE_TO_WATCHLIST" — adds a movie to the watchlist
	•	"REMOVE_MOVIE_FROM_WATCHLIST" — removes a movie by ID from the watchlist
	•	"ADD_MOVIE_TO_WATCHED" — if the movie hasn’t been watched yet, moves it from the watchlist to the watched list
	•	"MOVE_TO_WATCHLIST" — moves a movie back from watched to watchlist