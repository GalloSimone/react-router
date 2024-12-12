import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function ShowPosts() {
    

    const goTo = useNavigate();

    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => fetchPost(), []);

    function fetchPost() {
        fetch(`/posts/${id}`)
            .then((res) => {
                
                if (!res.ok) {
                   
                    if (res.status === 404) goTo("/not-found");

                    throw new Error("Errore richiesta API");
                }

                return res.json();
            })
            .then((data) => {
                const { post: newPost } = data;
                setPost(newPost);
            })
            .catch((err) => console.error(err));
    }

    return (
        <>
            <div className="container"></div>
            <div className="d-flex justify-content-between align-items-center">
                    {/* Titolo Pagina */}
                    <h1>Dettagli {post.title}</h1>
                    {/* Pulsante Indietro */}
                    <Link
                        to={`/posts`}
                        type="button"
                        className="btn btn-primary"
                    >
                        Indietro
                    </Link>
                </div>

                <div className="d-flex gap-3 mt-3">
                    {post && (
                        <>
                          
                            <img
                                src= "https://via.placeholder.com/150"
                                alt={post.title}
                                width="400"
                            />

                            
                            <ul>
                                <li>
                                    <b>Titolo:</b> {post.titolo}
                                </li>
                              
                                <li>
                                    <b>Descrizione:</b> {post.description}
                                </li>
                                
                                
                                <li>
                                    <b>Pubblicato:</b> {post.avaible}
                                </li>
                                <li>
                                    <b>Tag:</b>
                                    <ul>
                                        {Array.isArray(post.tags) ? (
                                            post.tags.map((tag) => (
                                                <li
                                                    key={
                                                        post.id + "-tag-" + tag
                                                    }
                                                >
                                                    {tag}
                                                </li>
                                            ))
                                        ) : (
                                            <li>{post.tags}</li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
            
        </>
    );
}