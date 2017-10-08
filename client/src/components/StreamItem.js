import React from 'react';
import PropTypes from 'prop-types';


const StreamItem = (props) => {
  return (
    <div key={props.item.entityID} className="updatesRow">
      <div className="divSubjectImage">
        <img src={props.item.displayEntityImagePublicURL}  
          alt="Unknown lifeform"
          id={props.item.displayEntityImageID}
          className="imgSubjectImage" />
      </div>
      <div className="divStreamBody">
        <div>
          <a className="authorName" href="http://synthesis.bvn.com.au">
            {props.item.authorName}
          </a>
          <span className="streamItemDate">{props.item.dateStampString}</span>
        </div>
        <span className="streamItemTitle">{props.item.titleWithEntityNames}</span>
        <div className="subItemContainer"></div>
        <div className="streamItemFooter">
          <span title="Like this item" className="btnLike">
            <img className="likeIcon" src="../like_off_20.png" /> 
          </span>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
}


StreamItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default StreamItem;