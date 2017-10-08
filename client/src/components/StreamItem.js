import React from 'react';
import PropTypes from 'prop-types';


const StreamItem = (props) => {

  return (
    <div key={props.item.entityID} className="stream-item-container">
      <div className="author-img-container">
          <img src={props.item.displayEntityImagePublicURL}  
            alt="Unknown lifeform"
            id={props.item.displayEntityImageID}
            className={props.item.displayEntityType==="Employee" ? "author-img-emp":""}
          />
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
          <div className="calendar-box sub-item">
            <div className="cal-icon">
              <a href={props.item.subItemProfileURL}>
                <div className="cal-month">{props.item.dateStampString.substring(0,3).toUpperCase()}</div>
                <div className="cal-day">{props.item.dateStampString.substring(4,6)}</div>
              </a>
            </div>
            <div>
              <a href={props.item.subItemProfileURL} className="subitem-title">Time</a>
              <span className="event-location">{props.item.subItemSubtitle}</span>
              <a href={props.item.subItemListURL} className="subitem-subtitle">{props.item.subItemListName}</a>
            </div>
          </div>
        </div>
        <div className="streamItemFooter">
          <span title="Like this item" className="btnLike">
            <img className="likeIcon" src={process.env.PUBLIC_URL+'/like_off_20.png'} alt="Click to like" /> 
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