import { Button } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "react-oauth2-code-pkce"
import { BrowserRouter as  Router, Navigate, Route, Routes, useLocation} from "react-router"
import { setCredentials } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import ActivityDetail from "./components/ActivityDetail";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";


const ActivitiesPage = () => {
  return(
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <ActivityForm onActivitiesAdded = { () => window.location.reload()} /> 
      <ActivityList /> 
    </Box>)
}


function App() {

  const {token, tokenData, logIn, logOut, isAuthenticated} = useContext(AuthContext);
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);



  useEffect(() => {
    if(token) {
      dispatch(setCredentials({token, user: tokenData}));
      setAuthReady(true);
    }
  }, [token, tokenData, dispatch]);

  return (
    <Router>
      {!token ? (
      <Button variant="contained" color="#dc004"
              onClick={() => {
                logIn();
              }}> Login </Button>
              ) : (
                // <div>
                //   <pre>{JSON.stringify(tokenData, null, 2)}</pre>
                //   <pre>{JSON.stringify(token, null, 2)}</pre>
                // </div>
                <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                  <Routes>
                    <Route path= "/activities" element={<ActivitiesPage/>}/>
                    <Route path= "/activities/:id" element={<ActivityDetail/>}/>
                    <Route path= "/" element={token ? <Navigate to = "/activities" replace/> : <div>Welcome! Please Login.</div>} />
                  </Routes>
                </Box>
                
              )}
    </Router>
  )
}

export default App
