import React from 'react';
import PropTypes from 'prop-types';


const StreamItem = (props) => {
  return (
    <div key={props.item.entityID} className="stream-item-container">
      <div className="author-img-container">
          <img src={props.item.displayEntityImagePublicURL}  
          alt="Unknown lifeform"
          id={props.item.displayEntityImageID}
          className="author-img" />
      </div>
      <div className="streamitem-body">
        <div>
          <a className="author-name" href="http://synthesis.bvn.com.au">
            {props.item.authorName}
          </a>
          <span className="streamitem-date">{props.item.dateStampString}</span>
        </div>
        <span className="streamitem-title">{props.item.titleWithEntityNames}</span>
        <div className="subItemContainer">
          {props.item.itemType}
        </div>
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
  itemType: PropTypes.string,
};

export default StreamItem;