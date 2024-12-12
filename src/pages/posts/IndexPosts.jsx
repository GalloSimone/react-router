
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error('Errore:', error));
  }, []);

  return (
    
      <div className="container">
        <h1 className="mt-5">Lista dei post</h1>
        {posts.length > 0 ? (
          <table className="table table-hover">
            <thead className=''>
              <tr className="table-light">
                <th scope="col">Immagine</th>
                <th scope="col">Nome</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>


                  <th>
                  <img src="https://via.placeholder.com/150" alt={post.titolo} />
                  </th>
                  <td>
                      <p className='h3'>{post.titolo}</p>
                  </td>
                  <td>
                  <Link
                    to={`/posts/:id`}
                    type="button"
                    className="btn btn-primary m-1 mt-0"   >
                    
                     
                        MOSTRA POST
                        </Link>              

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ):(
          <h5>no posts</h5>
        )
      }
      </div>
    );
  
  

}
