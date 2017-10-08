import React from 'react';
import PropTypes from 'prop-types';

const StreamItemSubItemCalendar = (props) => {
	return (
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

	);
}

export default StreamItemSubItemCalendar;