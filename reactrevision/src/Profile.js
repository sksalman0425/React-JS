 const user = {
    name: 'Princess Diana',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  function UserName(){
    return(
        <h1>Name :{user.name}</h1>
    )
  }
  function UserImage(){
    return (
        <img 
        src={user.imageUrl}
        style={{width: user.imageSize,height:user.imageSize}}
        alt={{}}
        />
    )
  }
//below we use variable values in <h1></h1> <img/> tags 
 export function Profile(){
    return (
     <>
    <UserName/>
    <UserImage/>
     </>
    ) 
   }

   //export default Profile;