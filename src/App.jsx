import { ToastContainer } from 'react-toastify'
import FormAttention from './FormAttention'

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />

      <FormAttention />
    </div>
  )
}

export default App
