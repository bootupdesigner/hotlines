import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getHotline } from './api';

const Hotline = ({ hotlines }) => {
    const { hotlineId } = useParams();
    const hotline = getHotline(hotlineId);

    return (
        <div>

            <h2>{hotline.help}</h2>

            <div className="hotline-list">
                <h3>{hotline.contacts.group}</h3>
<ul>
                {hotline.contacts.map((contact) => {
                   return( 
                    <div className="hotline-list">
                   <h3>{contact.group}</h3> 
                    
                       <p>
                            
                            {contact.call}
                        </p>
                       <p>
                            
                            {contact.text}
                        </p>
                       <p>
                            
                            {contact.tty}
                        </p>
                       <p>
                            
                            {contact.visit}
                        </p>
                        <hr />
                    </div>)
                })}
</ul>
                


                <Link to={-1}>Back to Hotlines</Link>

            </div>
            
        </div>
)}

export default Hotline;

