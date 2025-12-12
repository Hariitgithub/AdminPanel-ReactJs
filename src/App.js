import logo from './logo.svg';
import './App.css';
import ReactRoutes from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { saveAlertMessage } from './screens/redux/slice/alertMessage';
import { useEffect, useState } from 'react';
import AlertPopUp from './components/Common/AlertPopup/alertPopup';

function App() {
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.alertMessage);

  const togglePopup = () => {
    dispatch(saveAlertMessage(null));
  };

  const [loading, setLoading] = useState(false);

  // For Loader
  const isSomeQueryPending = useSelector((state) =>
    Object.values(state.api.queries).some((query) => query.status === "pending")
  );


  useEffect(() => {
    if (isSomeQueryPending) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [isSomeQueryPending]);

  return (
    <div>
      {alertMessage && (
        <AlertPopUp alertMessage={alertMessage} togglePopup={togglePopup} />
      )}
      <ReactRoutes />
    </div>
  );
}

export default App;
