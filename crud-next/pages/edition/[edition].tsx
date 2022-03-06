import { useRouter } from 'next/router';
import UserEdit from '../../components/UserEdit';
import useGetUser from '../../hooks/useGetUser';

const Edition = () => {
  const idEdit = useRouter().query.edition as string;
  const userForEdit = useGetUser(idEdit);

  return (userForEdit.id.length > 1 && <UserEdit user={userForEdit} />);
};

export default Edition;