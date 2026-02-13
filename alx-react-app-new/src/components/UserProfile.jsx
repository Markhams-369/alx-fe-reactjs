const UserProfile = (props) => {
  return (
    <div 
        style={{
        border: '2px teal solid',
        padding: '15px',
        margin: '20px',
        borderRadius: '8px',
        backgroundColor: '#152630',
        color: 'blue'
        }}
    >
      <h2 style={{ color: 'teal', marginBottom: '10px' }}>
        {props.name}
        </h2>
      <p style={{ color: 'teal', margin: '5px 0'}}>Age: <span style={{fontWeight: 'bold'}}> {props.age}
        </span></p>
      <p style={{ color: 'teal'}}>
        Bio: {props.bio}
        </p>
    </div>
  );
};

export default UserProfile;