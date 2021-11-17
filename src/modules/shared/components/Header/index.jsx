import history from 'modules/shared/history';
import UserService from 'modules/shared/services/UserService';
import { BtnLogout, TheHeader } from './style';

export default function Header() {
  return (
    <TheHeader>
      <div className="container">
        <BtnLogout
          onClick={() => {
            UserService.removeUser();
            history.push('/login');
          }}
        >
          Logout
        </BtnLogout>
      </div>
    </TheHeader>
  );
}
