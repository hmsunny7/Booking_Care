import {useState} from 'react';
import Button from 'react-bootstrap/Button'; 
const RandomUser = () => {
  const [user,setUser] = useState('');
  const randomUser = () => {
    const string = 'abcdefgh1234567890qwertyuiopzxcvbnm';
    let random = '';
    for(let i = 0;i < 7;i++) {
      random += string[Math.floor(Math.random()*string.length)];
    }
    setUser(random + '@gmail.com')
  }
  return(<>
    <Button variant="primary" onClick={()=>randomUser()}>Random</Button>
    <div>{user}</div>
    <div>
    <Button onClick={() =>  navigator.clipboard.writeText(user)} variant="secondary">Copy</Button>
    </div>
  </>)
}
export default RandomUser;