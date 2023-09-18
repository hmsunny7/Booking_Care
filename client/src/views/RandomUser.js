import {useState} from 'react';
const RandomUser = () => {
  const [user,setUser] = useState('');
  const randomUser = () => {
    const string = 'abcdefgh1234567890qwertyuiopzxcvbnm';
    let random = '';
    for(let i = 0;i < 7;i++) {
      random += string[Math.floor(Math.random()*string.length)];
    }
    setUser(random + '@' + random)
  }
  return(<>
    <button onClick={()=>randomUser()}>Random</button>
    <div>{user}</div>
    <div>
      <button onClick={() =>  navigator.clipboard.writeText(user)}
>
       Copy
      </button>
    </div>
  </>)
}
export default RandomUser;