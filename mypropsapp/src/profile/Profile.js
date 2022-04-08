import React from "react";
import  propTypes  from "prop-types";





const profile = (props) => {
  
  const view={display:"flex"}
  const cardWrapper = { backgroundColor: '#393E46',display:'flex'}
  const card = { flexBasis: '100%',maxWidth:'50em', margin: 'auto',color: '#FD7014',padding: '2em',backgroundColor: '#393E46', float:"right"}
  const otherView = {padding:'1em',fontFamily: 'Orbitron',letterSpacing: '1px',}
  const styleText={ textShadow:"2px 2px 5px #FD7014", border:"2px",fontFamily:"Ultra"}
    return(
      <div style={cardWrapper}>
        <div style={card}>
          <div style={view}>
             <div>
               {props.children}
             </div>
            <div style={otherView}>
          
              <h1 style={styleText}>Full Name:</h1>
              <h1>{props.fullName}</h1>
              <h1 style={styleText}>Biograpphy:</h1>
              <h1>{props.bio}</h1>
              <h1 style={styleText}>Profession:</h1>
              <h1>{props.profession}</h1>
          
            </div> 
          </div>
        </div>
      </div> 
          
         
        
    );
}

profile.defaultProps={
  fullName:"name lastname",
  profession:"anything",
  bio:"anything",
  handleName: () => alert("Anonymous user"),
  
};

profile.propTypes={
  fullName: propTypes.string.isRequired,
  bio: propTypes.string.isRequired,
  profession: propTypes.string.isRequired,

}


export default profile;