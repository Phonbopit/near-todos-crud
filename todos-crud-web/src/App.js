import 'regenerator-runtime/runtime';
import './App.css';

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const signIn = () => {
    wallet.requestSignIn(nearConfig.contractName, 'NEAR ToDo List');
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };
  return (
    <>
      <h1>NEAR Todos CRUD App</h1>
      {currentUser ? (
        <div>
          <h2>
            Account ID: {currentUser.accountId}{' '}
            <button onClick={signOut}>Log out</button>
          </h2>
        </div>
      ) : (
        <div>
          Sign In To Use The App: <button onClick={signIn}>Log in</button>
        </div>
      )}
    </>
  );
};

export default App;
