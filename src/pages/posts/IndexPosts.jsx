
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
                <th scope="col">Nome</th>
                <th scope="col">Descrizione</th>
                <th scope="col">Tags</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <th>
                    <p>{post.titolo}</p>
                  </th>
                  <td>
                     <p >{post.description}</p>
                  </td>
                  <td>{post.tags.map((tags, index) => (
                      <span key={index} className="">
                        {tags}
                     
                      </span>
                   )) }
                    
                  </td>
                  <td></td>
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
