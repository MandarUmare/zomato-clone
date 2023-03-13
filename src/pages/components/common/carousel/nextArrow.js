import React from 'react';

const NextArrow = (props) => {
    
        const {className,style,onClick}=props;
        
        return(
            <div className={className}style={{...style, background: "white",boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px ,rgba(0, 0, 0, 0.14) 0px 6px 10px 0px ,rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",position:"absolute",right:"20px",top:"80px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",padding:"4px"}}
            onClick={onClick}>
        
        </div>
        )
           
        
        
}

export default NextArrow;
