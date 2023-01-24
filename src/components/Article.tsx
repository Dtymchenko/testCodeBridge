import styles from './Article.module.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


function Article() {
const items = useSelector((state:RootState) => state.main.items)
const itemId = useSelector((state:RootState) => state.main.itemId)
const item = items.filter(obj => obj.id === itemId)[0]

    return (
            <div className={styles.wrapper}
            style={{ background: `url(${item.imageUrl})`,
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', padding: '150px 75px 0px' }}
            >
            <article className={styles.article}>
                <h1>
                {item.title}
                </h1>
                <div className={styles.text}>
                    <p>{item.summary}</p>
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
