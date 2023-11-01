import { useEffect, useState } from 'react';
import axios from 'axios'
const PostBody = ({ id }) => {
  const [text, setText] = useState('');

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/posts/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setText(data.body);
  //     }).catch((err) => {
  //       setText("Something went wrong");
  //     });
  // }, [id]);

  useEffect(() => {
     const fetchData = async () =>{
      const response = await axios.get(`https://dummyjson.com/posts/${id}`);
      setText(response.data.body)
     }
     fetchData()
  },[id]);

  return <div>{text}</div>;
};

export default PostBody;
