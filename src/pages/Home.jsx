import { Header } from 'modules/shared/components';
import BookList from 'modules/home/components/BookList';
import { HomeContainer } from 'modules/home/style';
export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <BookList />
      </HomeContainer>
    </>
  );
}
