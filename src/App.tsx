import './App.css'
import { AdvancedFilters } from './advanced-filters/AdvancedFilters'
import { Users } from './users/Users'

function App() {
  // branch: step-01
  // 1. create filteredUsers slice
  // 2. create a selector to get filteredUsers { users, filterCriteria }
  // 3. fetch users from GET http://localhost:5000/users

  // branch: step-02
  // THE PROBLEM:
  // 1. we need to fetch users and filterCriteria from DB as well store it back
  //    ---- post settings to POST http://localhost:5000/settings
  //    ---- get settings from GET http://localhost:5000/settings
  // 2. do we really need filteredUsers createSlice ?
  // 3. introduce selector factory <------------------ IMPORTANT

  return (
    <>
      <div>
        <Users />
        <AdvancedFilters />
      </div>
      <h3>twitter.com/ajinkyax</h3>
    </>
  )
}

export default App
