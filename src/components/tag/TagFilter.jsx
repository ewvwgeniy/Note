import React from 'react';
import Tags from "../Tags";
import {useDispatch, useSelector} from "react-redux";
import {addFilterTagActionCreator, removeFilterTagActionCreator} from "../../store/noteReducer";

const getNotFilterTags = (tags, filterTags) => {
  return tags.filter(tag => !filterTags.includes(tag))
}

const TagFilter = () => {
  const dispatch = useDispatch()
  const tagsToFilter = useSelector(state => state.filterTags)
  const allTags = useSelector(state => state.tags)

  const onRemoveSearchTag = (tag) => {
    dispatch(removeFilterTagActionCreator(tag))
  }
  const onAddSearchTag = (tag) => {
    dispatch(addFilterTagActionCreator(tag))
  }

  return (
    <div>
      <Tags tags={tagsToFilter} onClick={onRemoveSearchTag} tagsTitle="Notes are filtered by tags:"/>
      <Tags tags={getNotFilterTags(allTags, tagsToFilter)} onClick={onAddSearchTag} tagsTitle="You can filter notes by tags:"/>
    </div>
  );
};

export default TagFilter;