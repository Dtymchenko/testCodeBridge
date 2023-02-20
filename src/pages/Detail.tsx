import Article from '../components/Article'
import { useSelector } from 'react-redux';
import { RootState } from '../components/redux/store';
import Loader from '../components/Loader/Loader';

function Detail() {

  const loading = useSelector((state:RootState) => state.main.isLoading)
  
  return (
    loading ? <Loader /> : <Article />
  )
}

export default Detail
