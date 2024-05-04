import React, {useEffect, useState} from 'react'

const Display = () => {
	const [Text, SetText] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(data => SetText(data))
            .catch(error => console.error("Error fetching posts", error));
    });

    return(
        <div>
        <h3>Recent Posts</h3>
        <ul>
            {Text.map(post => (
                <li key={post.id}>
                    : {post.text}
                </li>
            ))}
        </ul>
        </div>
    );
}
export default Display
