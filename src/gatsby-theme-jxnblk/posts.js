/** @jsx jsx */
// import { jsx, Styled } from 'theme-ui'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = (obj[key] && obj[key].length) ? obj[key][0] : 'Others';
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
const groupByCategory = groupBy('categories');

export default ({
  posts,
  previous,
  next,
  ...props
}) => {
  const postsByCategory = groupByCategory(posts);
  console.log('postsByCategory:');
  console.log(postsByCategory);

  return (
    <div
      sx={{
        maxWidth: 'container',
      }}>
      {Object.keys(postsByCategory)
        .sort(function (a, b) {
          const nameA = a.toLowerCase(); // ignore upper and lowercase
          const nameB = b.toLowerCase(); // ignore upper and lowercase
          if (nameB === 'others') return -1;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })
        .map(category => (
          <section key={category}>
            <h2>{category}</h2>
            <ul>
              {postsByCategory[category].map(post => (
                <li key={post.id}>
                  <Link
                    to={post.slug}
                    sx={{
                      display: 'block',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {post.slug.replace(/\//g, '')}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
      ))}
      {/* <ul
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0,
        }}>
        {posts.map(post => (
          <li key={post.id}>
            <Link
              to={post.slug}
              sx={{
                display: 'block',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              {post.slug.replace(/\//g, '')}
            </Link>
          </li>
        ))}
      </ul> */}
      {/* <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 4,
        }}>
        {previous && (
          <Link to={previous}
            sx={{
              variant: 'styles.navitem',
            }}>
            Previous
          </Link>
        )}
        <div sx={{ mx: 'auto' }} />
        {next && (
          <Link to={next}
            sx={{
              variant: 'styles.navitem',
            }}>
            Next
          </Link>
        )}
      </div> */}
    </div>
  )
}
