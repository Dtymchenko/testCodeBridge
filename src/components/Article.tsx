import React from 'react';
import styles from './Article.module.scss'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IItem } from './interface';
import { API_ADDRESS } from '../API/API';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoadingFalse, setIsLoadingTrue } from './redux/slices/mainSlice';
import { RootState } from './redux/store';
import Loader from './Loader/Loader';


function Article() {

    const dispatch = useDispatch()
    const loading = useSelector((state:RootState) => state.main.isLoading)
    const params = useParams()
    const [item, setItem] = React.useState<IItem>()   

    React.useEffect(() => {
        const getDetail = async () => {
            try {
              dispatch(setIsLoadingTrue())
            const response = await axios.get(`${API_ADDRESS}/${params.id}`)
            setItem(response.data)
          }   catch (error:any) {
            alert(error.message)
            console.log(error.message)
        }    finally {
          dispatch(setIsLoadingFalse())
          }
        }
        getDetail();
      }, [params.id])

    return (
      loading ? <Loader/> :
            <div className={styles.wrapper}
            style={{ backgroundImage: `url(${item?.imageUrl})`,
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', padding: '150px 75px 0px' }}
            >
            <article className={styles.article}>
                <h1>
                {item?.title}
                </h1>
                <div className={styles.text}>
                    <p>{item?.summary}</p>
                    {/* Below you can see more text to check CSS, if you want
                    {items.map(el => (<p>{item.summary}</p>))} */}
                </div>
            </article>
            <Link to={'/'}>
                <div className={styles.link}>
                        <span></span>
                    Back to homepage
                </div>
      </Link>
        </div>
    );
}
export default Article
