import styles from './Article.module.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

// interface ArticleProps {
//     item: any
// }

function Article()
    // {item}: ArticleProps
    {
const items = useSelector((state:RootState) => state.main.items)
const itemId = useSelector((state:RootState) => state.main.itemId)
const item = items.filter(obj => obj.id === itemId)[0]
console.log(item)
    return (
            <div className={styles.wrapper}>
            <article  className={styles.article}>
                <h1>
                {item.title}
                </h1>
                <div className={styles.text}>
                    {item.summary}
                    {/* Below you can see more text to check CSS, if you want
                    {items.map(el => item.summary)} */}
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
