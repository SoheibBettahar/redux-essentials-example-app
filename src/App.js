import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostForm from './features/posts/EditPostForm'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            }
          />

          <Route path="/posts/:postId" Component={SinglePostPage} />
          <Route path="/editPost/:postId" Component={EditPostForm} />
          {/* use `const { postId } = useParams()` in components to access params */}
          {/* use `const navigate = useNavigate(); navigate('/')` instead `const history = useHistory(); history.push(`/posts/${postId}`)`*/}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
