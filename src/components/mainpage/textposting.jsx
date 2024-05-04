import React, {useEffect, useState} from 'react'

const TextPosting = ({Username}) => {
	const [Text, SetText] = useState("");
	const [Post, SetPost] = useState([])
	const [Error, SetError] = useState("");

	useEffect(() =>{
		FetchPosts();
	},[]);
	const FetchPosts = () => {
		fetch('http://localhost:3001/posts')
		.then(response => response.json())
		.then(data => SetPost(data))
		.catch(Error => SetError("Error fetching posts"));
	};
	const HandlePost= (e) => {
		e.preventDefault();
		fetch('http://localhost:3001/posts',{
			method: 'POST',
			headers: {"Content-Type": 'application/json'},
			body: JSON.stringify({username: Username, text: Text})
		})
	
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					SetText("");
				FetchPosts();
				} else {
					SetError("Failed to post");
				}
	
			})
			.catch(Error => SetError("Failed to post"));
		
	};
	return (
        <div>
            <h1>Text Posts</h1>
	
            <section>
                <h1>Make a Post</h1>
                <textarea value={Text} onChange={(e) => SetText(e.target.value)}></textarea>
                <button type='button' onClick={HandlePost}>Post</button>
            </section>

        </div>
    );

}
export default TextPosting;